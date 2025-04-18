'use server'
import { fetchGQLData } from '@/utils/graphql'
import {
  GetPostsBySectionSlugDocument,
  GetSectionInformationDocument,
} from '@/graphql/__generated__/graphql'
import { createErrorLogger, getTraceObject } from '@/utils/log/common'
import type {
  GetPostsBySectionSlugQuery,
  GetSectionInformationQuery,
} from '@/graphql/__generated__/graphql'
import { transfromRawPost } from '@/utils/data-process'
import type { SectionPost } from '@/types/section'

function transformSectionPost(
  rawData: GetPostsBySectionSlugQuery['posts']
): SectionPost[] {
  if (!rawData) return []

  return rawData.map(transfromRawPost)
}

async function fetchSectionPosts({
  take,
  skip = 0,
  slug,
}: {
  take: number
  skip: number
  slug: string
}) {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching section posts in section page',
    getTraceObject()
  )

  const result = await fetchGQLData(
    errorLogger,
    GetPostsBySectionSlugDocument,
    {
      skip,
      take,
      slug,
    }
  )

  if (result) {
    const { posts } = result
    return transformSectionPost(posts)
  } else {
    return []
  }
}

function transformSectionInformation(
  rawData: GetSectionInformationQuery['section']
) {
  if (!rawData) return null

  const name = rawData.name ?? ''
  const color = rawData.color ?? '#FF5A36'
  const state = rawData.state

  if (state === 'active') {
    return {
      name,
      color,
    }
  } else return null
}

async function fetchSectionInformation(slug: string) {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching sections information',
    getTraceObject()
  )

  const result = await fetchGQLData(
    errorLogger,
    GetSectionInformationDocument,
    {
      slug: slug,
    }
  )

  if (result) {
    const { section } = result
    return transformSectionInformation(section)
  } else {
    return null
  }
}

export { fetchSectionPosts, fetchSectionInformation }
