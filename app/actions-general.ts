'use server'

import type { HeaderData, PopularNews, Shorts } from '@/types/common'
import { SHORTS_TYPE } from '@/types/common'
import { z } from 'zod'
import { createErrorLogger, getTraceObject } from '@/utils/log/common'
import {
  createDataFetchingChain,
  transformLatestShorts,
} from '@/utils/data-process'
import { fetchGQLData, updateGQLData } from '@/utils/graphql'
import {
  latestShortsSchema,
  rawPopularPostSchema,
  rawLatestPostSchema,
  headerSchema,
} from '@/utils/data-schema'
import {
  URL_STATIC_LATEST_SHORTS,
  URL_STATIC_POPULAR_NEWS,
  URL_STATIC_LATEST_NEWS,
  URL_STATIC_HEADER,
} from '@/constants/config'
import {
  CreateCreativityShortsDocument,
  CreateShortsPreviewDocument,
  GetLatestShortsDocument,
} from '@/graphql/__generated__/graphql'
import type { LatestPost } from '@/types/common'
import {
  AVAILABLE_IMAGE_MIME_TYPE,
  AVAILABLE_VIDEO_MIME_TYPE,
  MAX_IMAGE_SIZE,
  MAX_VIDEO_SIZE,
} from '@/constants/multimedia'
import type { FormActionResponse } from '@/types/shorts'
import { FormState } from '@/types/shorts'
import {
  hasExternalLink,
  transformRawLatestPost,
  transformRawPopularPost,
} from '@/utils/post'
import { cache } from 'react'

export const fetchLatestPost = async (
  page: number = 1
): Promise<LatestPost[]> => {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching latest posts',
    getTraceObject()
  )

  try {
    const resp = await fetch(`${URL_STATIC_LATEST_NEWS}0${page}.json`)

    const rawPostData = await resp.json()
    const latestPosts = z.array(rawLatestPostSchema).parse(rawPostData?.latest)
    const filteredData = latestPosts.filter(
      (rawPost) => !hasExternalLink(rawPost)
    )

    const headerData = await fetchHeaderData()
    return filteredData.map((item) => transformRawLatestPost(item, headerData))
  } catch (e) {
    errorLogger(e)
    return []
  }
}

export const fetchPopularPost = async (
  amount: number = 10
): Promise<PopularNews[]> => {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching popular posts',
    getTraceObject()
  )

  try {
    const resp = await fetch(URL_STATIC_POPULAR_NEWS)

    const rawPostData = await z
      .promise(z.array(rawPopularPostSchema))
      .parse(resp.json())

    const headerData = await fetchHeaderData()

    return rawPostData
      .map((item) => transformRawPopularPost(item, headerData))
      .slice(0, amount)
  } catch (e) {
    errorLogger(e)
    return []
  }
}

export const fetchLatestShorts = async (
  type: SHORTS_TYPE,
  amount: number = 10,
  start: number = 0
): Promise<Shorts[]> => {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching latest shorts',
    getTraceObject()
  )

  const orignal = z.object({
    [SHORTS_TYPE.NEWS]: z.array(latestShortsSchema),
    [SHORTS_TYPE.DERIVATIVE]: z.array(latestShortsSchema),
  })
  const schema = z.promise(orignal)

  const data = await createDataFetchingChain<z.infer<typeof orignal>>(
    errorLogger,
    {
      [SHORTS_TYPE.NEWS]: [],
      [SHORTS_TYPE.DERIVATIVE]: [],
    },
    async () => {
      const resp = await fetch(URL_STATIC_LATEST_SHORTS)

      const result = await schema.parse(resp.json())
      return result
    },
    async () => {
      const result = await schema.parse(
        fetchGQLData(errorLogger, GetLatestShortsDocument, { amount, start })
      )
      return result
    }
  )

  const matchedData = data[type].slice(start, amount)
  return matchedData.map(transformLatestShorts)
}

export const createCreativityShorts = async (
  formData: FormData
): Promise<FormActionResponse> => {
  const errorLogger = createErrorLogger(
    'Error occurs while creating creativity shorts',
    getTraceObject()
  )

  /** File is not available in Node.js 18 environment, so we need to create schema to validate it */
  const fileSchema = z.custom<File>(
    (val) =>
      typeof val === 'object' &&
      'type' in val &&
      typeof val['type'] === 'string' &&
      'size' in val &&
      typeof val['size'] === 'number',
    {
      message: 'input is not a file',
    }
  )

  const dataSchema = z.object({
    shorts: fileSchema
      .refine((file) => AVAILABLE_VIDEO_MIME_TYPE.includes(file.type), {
        message: 'shorts is not valid type',
      })
      .refine((file) => file.size <= MAX_VIDEO_SIZE, {
        message: 'shorts is over size limit',
      }),
    preview: fileSchema
      .refine((file) => AVAILABLE_IMAGE_MIME_TYPE.includes(file.type), {
        message: 'preview image is not valid type',
      })
      .refine((file) => file.size <= MAX_IMAGE_SIZE, {
        message: 'preview image is over size limit',
      }),
    title: z.string().min(1),
    description: z.string().nullish(),
    user: z.string().nullish(),
    email: z.string().email(),
    tos: z.literal('on'),
    copyright: z.literal('on'),
  })

  const formKeys = Object.keys(dataSchema.shape)
  const rawFormData = formKeys.reduce((data: Record<string, unknown>, key) => {
    data[key] = formData.get(key)
    return data
  }, {})

  const { success, data, error } = dataSchema.safeParse(rawFormData)

  if (!success) {
    const errors = error.flatten().fieldErrors
    errorLogger(error)

    return {
      state: FormState.Fail,
      errors: errors,
    }
  }

  let imageId: string = ''

  {
    const result = await updateGQLData(
      errorLogger,
      CreateShortsPreviewDocument,
      {
        name: data.preview.name,
        file: data.preview,
      }
    )

    if (result && result.photo) {
      imageId = result.photo?.id
    } else {
      return {
        state: FormState.Fail,
        errors: {
          misc: ['Create preview image failed.'],
        },
      }
    }
  }

  {
    const result = await updateGQLData(
      errorLogger,
      CreateCreativityShortsDocument,
      {
        title: data.title,
        photoId: imageId,
        file: data.shorts,
        author: data.user,
        authorEmail: data.email,
        description: data.description,
      }
    )

    if (!(result && result.shorts)) {
      return {
        state: FormState.Fail,
        errors: {
          misc: ['Create creativity shorts failed.'],
        },
      }
    } else {
      return {
        state: FormState.Success,
      }
    }
  }
}

const transformHeaderData = (
  rawData: z.infer<typeof headerSchema>
): HeaderData[] => {
  if (!rawData) return []

  return rawData.map((item) => {
    if (item.type === 'Topic') {
      const name = item.name ?? ''
      const slug = item.slug ?? ''

      return {
        name,
        slug,
        type: item.type,
      }
    } else {
      const name = item.name ?? ''
      const slug = item.slug ?? ''
      const color = item.color ?? ''
      const categories = (item.categories ?? []).map((rawCategory) => {
        const name = rawCategory.name ?? ''
        const slug = rawCategory.slug ?? ''

        return {
          name,
          slug,
          color,
        }
      })

      return {
        name,
        slug,
        color,
        categories,
        type: item.type ?? 'Section',
      }
    }
  })
}

export const fetchHeaderData = cache(async (): Promise<HeaderData[]> => {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching header json',
    getTraceObject()
  )
  const schema = z.promise(headerSchema)

  const data = await createDataFetchingChain<z.infer<typeof headerSchema>>(
    errorLogger,
    [],
    async () => {
      const resp = await fetch(URL_STATIC_HEADER)

      const result = await schema.parse(resp.json())
      return result
    }
  )

  return transformHeaderData(data)
})
