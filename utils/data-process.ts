import type {
  GetPostsByAuthorIdQuery,
  GetPostsByCategorySlugQuery,
  GetPostsBySectionSlugQuery,
  GetPostsByTagSlugQuery,
  GetRelatedPostsByExternalIdQuery,
  GetRelatedPostsByIdQuery,
  ImageDataFragment,
} from '@/graphql/__generated__/graphql'
import type { HeaderData, HeroImage, Shorts } from '@/types/common'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import type { createErrorLogger } from './log/common'
import type {
  latestShortsSchema,
  ImageKeys,
  resizedImageSchema,
} from './data-schema'
import type { z } from 'zod'
import { getShortsPageUrl, getStoryPageUrl } from './site-urls'
import type { SectionPost } from '@/types/section'
import type { CategoryPost } from '@/types/category'
import type { AuthorPost } from '@/types/author'
import type { TagPost } from '@/types/tag'
import type { RelatedPost } from '@/types/common'
import { DEFAULT_SECTION_COLOR, DEFAULT_SECTION_NAME } from '@/constants/misc'
import { isSectionItem } from './common'

const getHeroImage = (
  rawImageObj:
    | Pick<ImageDataFragment, 'resized' | 'resizedWebp'>
    | string
    | null
    | undefined
): HeroImage => {
  if (typeof rawImageObj === 'object' || typeof rawImageObj === 'undefined') {
    if (rawImageObj !== null && rawImageObj !== undefined) {
      return Object.entries(rawImageObj).reduce<HeroImage>(
        (
          obj: HeroImage,
          [typeKey, valueObj]: [
            string,
            ImageDataFragment[keyof ImageDataFragment],
          ]
        ) => {
          type RawResziedImages = NonNullable<ImageDataFragment['resized']>
          type ResizedImages = NonNullable<HeroImage['resized']>

          if (['resized', 'resizedWebp'].includes(typeKey) && valueObj) {
            const newValueObj = Object.entries(valueObj).reduce<ResizedImages>(
              (
                values,
                [sizeKey, value]: [
                  string,
                  RawResziedImages[keyof RawResziedImages],
                ]
              ) => {
                if (value) {
                  values[sizeKey as keyof ResizedImages] = value
                }

                return values
              },
              {
                original: '',
              } satisfies ResizedImages
            )

            obj[typeKey as keyof HeroImage] = newValueObj
          }

          return obj
        },
        {
          resized: {
            original: '',
          },
        } satisfies HeroImage
      )
    } else
      return {
        resized: {
          original: '',
        },
      }
  } else {
    return {
      resized: {
        original: rawImageObj,
      },
    }
  }
}

const dateFormatter = (date: string) => {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  return dayjs(date).utc().tz('Asia/Taipei').format('YYYY/MM/DD HH:mm:ss')
}

type DataFetchFunction<T> = () => Promise<T>

const createDataFetchingChain = async <T>(
  errorLogger: ReturnType<typeof createErrorLogger>,
  defaultValue: T,
  ...dataFetchFunc: DataFetchFunction<T>[]
): Promise<T> => {
  // use promise.catch to build a chain of fallback handlers

  let chain: Promise<T> = Promise.reject()

  for (const func of dataFetchFunc) {
    chain = chain.catch((err) => {
      if (err) errorLogger(err)

      return func()
    })
  }

  chain = chain.catch((err) => {
    errorLogger(err)

    return defaultValue
  })

  return chain
}

const selectMainImage = (
  heroImage: HeroImage,
  ogImage: HeroImage
): HeroImage => {
  if (heroImage?.resized?.original === '') {
    return ogImage
  }
  return heroImage
}

const getImageSrc = (
  imageObj: z.infer<typeof resizedImageSchema> | null | undefined,
  pickedSize: ImageKeys[]
): string | undefined => {
  if (imageObj) {
    return pickedSize.reduce((src: string | undefined, size) => {
      const newSrc = imageObj[size]
      if (!src && newSrc) return newSrc
      else return src
    }, undefined)
  }
  return undefined
}

const getPosterFromShorts = (
  heroImage: z.infer<typeof latestShortsSchema>['heroImage']
): string => {
  const pickedSize: ImageKeys[] = ['w800', 'w480', 'original']
  if (!heroImage) return ''

  const resized = getImageSrc(heroImage.resized, pickedSize)
  const resizedWebp = getImageSrc(heroImage.resizedWebp, pickedSize)

  return resizedWebp || resized || ''
}

const transformLatestShorts = (
  rawData: z.infer<typeof latestShortsSchema>
): Shorts => {
  return {
    id: rawData.id,
    title: rawData.name,
    fileUrl: rawData.youtubeUrl || rawData.videoSrc || '',
    poster: getPosterFromShorts(rawData.heroImage),
    link: getShortsPageUrl(rawData.id),
    contributor: rawData.uploader,
  }
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const getFirstParagraphFromApiData = (apiData: any): string | undefined => {
  return apiData?.[0]?.content?.[0]
}

type RawPost = NonNullable<
  GetPostsByCategorySlugQuery['posts'] | GetPostsBySectionSlugQuery['posts']
>[0]

export type PostData = CategoryPost | SectionPost

const transfromRawPost = (rawPost: RawPost): PostData => {
  const id = rawPost.id
  const title = rawPost.title ?? ''
  const link = getStoryPageUrl(id)
  const publishedDate = dateFormatter(rawPost.publishedDate)
  const heroImage = getHeroImage(rawPost.heroImage)
  const brief = getFirstParagraphFromApiData(rawPost.apiDataBrief) ?? ''
  const content = getFirstParagraphFromApiData(rawPost.apiData) ?? ''
  const ogImage = getHeroImage(rawPost.og_image)
  const postMainImage = selectMainImage(heroImage, ogImage)
  const textContent = removeHtmlTags(brief || content)

  return {
    id,
    title,
    link,
    publishedDate,
    textContent,
    postMainImage,
  }
}

type RawPostWithSection = NonNullable<
  GetPostsByAuthorIdQuery['posts'] | GetPostsByTagSlugQuery['posts']
>[0]

export type PostDataWithSection = AuthorPost | TagPost

const transfromRawPostWithSection = (
  rawPost: RawPostWithSection
): PostDataWithSection => {
  const id = rawPost.id
  const title = rawPost.title ?? ''
  const link = getStoryPageUrl(id)
  const publishedDate = dateFormatter(rawPost.publishedDate) ?? ''
  const heroImage = getHeroImage(rawPost.heroImage)
  const brief = getFirstParagraphFromApiData(rawPost.apiDataBrief) ?? ''
  const sectionName = rawPost.sections?.[0]?.name ?? DEFAULT_SECTION_NAME
  const sectionColor = rawPost.sections?.[0]?.color ?? DEFAULT_SECTION_COLOR
  const content = getFirstParagraphFromApiData(rawPost.apiData) ?? ''
  const ogImage = getHeroImage(rawPost.og_image)
  const postMainImage = selectMainImage(heroImage, ogImage)
  const textContent = brief || content

  return {
    postMainImage,
    title,
    textContent,
    link,
    publishedDate,
    sectionColor,
    sectionName,
  }
}

type RawRelatedPosts =
  | GetRelatedPostsByExternalIdQuery['external']
  | GetRelatedPostsByIdQuery['post']

const transfromRawRelatedPosts = (rawData: RawRelatedPosts): RelatedPost[] => {
  if (!rawData || !rawData.relateds) return []

  return rawData.relateds.map((rawPost) => {
    const title = rawPost.title ?? ''
    const link = getStoryPageUrl(rawPost.id)
    const heroImage = getHeroImage(rawPost.heroImage)
    const ogImage = getHeroImage(rawPost.og_image)
    const postMainImage = selectMainImage(heroImage, ogImage)
    const sectionName = rawPost.sections?.[0]?.name ?? DEFAULT_SECTION_NAME
    const sectionColor = rawPost.sections?.[0]?.color ?? DEFAULT_SECTION_COLOR

    return {
      title,
      link,
      postMainImage,
      sectionColor,
      sectionName,
    }
  })
}

const getSectionColor = (headerData: HeaderData[], slug?: string) => {
  return (
    headerData.filter(isSectionItem).find((item) => item.slug === slug)
      ?.color ?? DEFAULT_SECTION_COLOR
  )
}

const getCategoryColor = (headerData: HeaderData[], slug?: string) => {
  const sectionData = headerData.filter(isSectionItem)
  const matchedSection = sectionData.find((section) =>
    section.categories.find((category) => category.slug === slug)
  )
  return matchedSection?.color ?? DEFAULT_SECTION_COLOR
}

const removeHtmlTags = (content: string) => {
  const regex = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g
  return content.replaceAll(regex, '')
}

export {
  getHeroImage,
  dateFormatter,
  createDataFetchingChain,
  selectMainImage,
  transformLatestShorts,
  getFirstParagraphFromApiData,
  transfromRawPost,
  transfromRawPostWithSection,
  getImageSrc,
  transfromRawRelatedPosts,
  getSectionColor,
  getCategoryColor,
}
