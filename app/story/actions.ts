'use server'

import { createErrorLogger, getTraceObject } from '@/utils/log/common'
import { fetchGQLData } from '@/utils/graphql'
import {
  GetPostByIdDocument,
  GetRelatedPostsByIdDocument,
} from '@/graphql/__generated__/graphql'
import type { GetPostByIdQuery } from '@/graphql/__generated__/graphql'
import {
  dateFormatter,
  getHeroImage,
  selectMainImage,
  transfromRawRelatedPosts,
} from '@/utils/data-process'
import type { Post } from '@/types/story'
import type { RelatedPost } from '@/types/common'
import { getStoryPageUrl, getAuthorPageUrl } from '@/utils/site-urls'
import { DEFAULT_SECTION_COLOR, DEFAULT_SECTION_NAME } from '@/constants/misc'

function transformPost(rawData: GetPostByIdQuery['post']): Post | null {
  if (!rawData) return null

  const title = rawData.title ?? ''
  const subtitle = rawData.subtitle ?? ''
  const heroCaption = rawData.heroCaption ?? ''
  const warning = rawData.Warning?.content ?? ''
  const publishedTime = dateFormatter(rawData.publishedDate) ?? ''
  const heroImage = getHeroImage(rawData.heroImage)
  const ogImage = getHeroImage(rawData.og_image)
  const postMainImage = selectMainImage(heroImage, ogImage)
  const sectionName = rawData.sections?.[0]?.name ?? DEFAULT_SECTION_NAME
  const sectionColor = rawData.sections?.[0]?.color ?? DEFAULT_SECTION_COLOR
  const writers =
    rawData.writers?.map(({ id, name }) => ({
      link: getAuthorPageUrl(id),
      name: name ?? '',
    })) ?? []
  const photographers =
    rawData.photographers?.map(({ id, name }) => ({
      link: getAuthorPageUrl(id),
      name: name ?? '',
    })) ?? []
  const apiData = rawData.apiData
  const apiDataBrief = rawData.apiDataBrief
  const tags =
    rawData.tags?.map((tag) => ({
      name: tag.name ?? '',
      slug: tag.slug ?? '',
    })) ?? []
  const algoTags =
    rawData.tags_algo?.map((tag) => ({
      name: tag.name ?? '',
      slug: tag.slug ?? '',
    })) ?? []
  const link = getStoryPageUrl(rawData.id)

  return {
    id: rawData.id,
    title,
    subtitle,
    heroCaption,
    publishedTime,
    postMainImage,
    sectionName,
    sectionColor,
    writers,
    photographers,
    apiData,
    apiDataBrief,
    tags,
    algoTags,
    link,
    warning,
    isAdult: rawData.isAdult ?? false,
  }
}

async function fetchPost(id: string) {
  const errorLogger = createErrorLogger(
    `Error occurs while fetching post with id: ${id} on story page`,
    getTraceObject()
  )

  const result = await fetchGQLData(errorLogger, GetPostByIdDocument, {
    id: id,
  })

  if (result) {
    const { post } = result
    return transformPost(post)
  } else {
    return null
  }
}

async function fetchRelatedPosts(id: string): Promise<RelatedPost[]> {
  const errorLogger = createErrorLogger(
    `Error occurs while fetching related posts using post id ${id} on story page`,
    getTraceObject()
  )

  const result = await fetchGQLData(errorLogger, GetRelatedPostsByIdDocument, {
    id: id,
  })

  if (result) {
    const { post } = result
    return transfromRawRelatedPosts(post)
  } else return []
}

export { fetchPost, fetchRelatedPosts }
