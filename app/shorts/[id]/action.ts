'use server'

import { z } from 'zod'
import type { ShortsData } from '@/types/shorts'
import { latestShortsSchema, shortsDataSchema } from '@/utils/data-schema'
import { createErrorLogger, getTraceObject } from '@/utils/log/common'
import {
  createDataFetchingChain,
  transformLatestShorts,
} from '@/utils/data-process'
import {
  GetShortsByTagAndVideoSectionDocument,
  GetShortsByVideoSectionDocument,
  GetShortsDataDocument,
} from '@/graphql/__generated__/graphql'
import { fetchGQLData } from '@/utils/graphql'
import type { Shorts, SHORTS_TYPE } from '@/types/common'
import { URL_STATIC_NEWS_SHORTSPAGE } from '@/constants/config'

export const fetchShortsData = async (
  videoId: string
): Promise<ShortsData | null> => {
  const errorLogger = createErrorLogger(
    `Error occurs while fetching shorts data (vidoeId: ${videoId})`,
    getTraceObject()
  )
  const schema = z.promise(z.object({ video: shortsDataSchema }))

  const data = await createDataFetchingChain<z.infer<
    typeof shortsDataSchema
  > | null>(errorLogger, null, async () => {
    const result = await schema.parse(
      fetchGQLData(errorLogger, GetShortsDataDocument, { id: videoId })
    )
    return result.video
  })

  if (data !== null) {
    if (data.state !== 'published') return null
    if (data.isShorts !== true) return null

    return {
      id: data.id,
      name: data.name,
      state: data.state,
      contributor: data.uploader,
      videoSection: data.videoSection,
      tagId: data.tags[0]?.id,
    }
  }

  return data
}

export const fetchShortsByTagAndVideoSection = async (
  originalVideoId: string,
  tagId: string | undefined,
  section: SHORTS_TYPE,
  page: number = 1
): Promise<Shorts[]> => {
  const errorLogger = createErrorLogger(
    `Error occurs while fetching shorts by tag (tagId: ${tagId})`,
    getTraceObject()
  )
  const schema = z.promise(z.object({ videos: z.array(latestShortsSchema) }))

  const isValidTagId = (tagId: string | undefined): tagId is string =>
    !Number.isNaN(Number(tagId))

  const take = 20
  const skip = (page - 1) * take

  const data = await createDataFetchingChain<
    z.infer<z.ZodArray<typeof latestShortsSchema>>
  >(
    errorLogger,
    [],
    async () => {
      const fetchFunc = isValidTagId(tagId)
        ? fetchGQLData(errorLogger, GetShortsByTagAndVideoSectionDocument, {
            tagId,
            section,
            skip,
            take,
          })
        : fetchGQLData(errorLogger, GetShortsByVideoSectionDocument, {
            section,
            skip,
            take,
          })

      const result = await schema.parse(fetchFunc)
      return result.videos
    },
    async () => {
      const baseUrl = URL_STATIC_NEWS_SHORTSPAGE
      const jsonUrl = `${baseUrl}01.json`
      const resp = await fetch(jsonUrl)

      const result = await resp.json()
      return result
    }
  )

  const orginalVideo = data.find((video) => video.id === originalVideoId)
  if (orginalVideo) {
    const filteredData = data.filter((video) => video.id !== originalVideoId)
    filteredData.unshift(orginalVideo)
    return filteredData.map(transformLatestShorts)
  }

  return data.map(transformLatestShorts)
}
