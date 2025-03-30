'use server'

import { createErrorLogger, getTraceObject } from '@/utils/log/common'
import { transfromRawPostWithSection } from '@/utils/data-process'
import { fetchGQLData } from '@/utils/graphql'
import type {
  GetTagInformationQuery,
  GetPostsByTagSlugQuery,
} from '@/graphql/__generated__/graphql'
import {
  GetTagInformationDocument,
  GetPostsByTagSlugDocument,
} from '@/graphql/__generated__/graphql'
import type { TagPost, TagInfo } from '@/types/tag'

function transformTagInformation(
  rawData: GetTagInformationQuery['tag']
): TagInfo | null {
  if (!rawData) return null

  const name = rawData.name ?? ''

  return {
    name,
  }
}

async function fetchTagInformation(slug: string): Promise<TagInfo | null> {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching tag information',
    getTraceObject()
  )

  const result = await fetchGQLData(errorLogger, GetTagInformationDocument, {
    slug: slug,
  })

  if (result) {
    const { tag } = result
    return transformTagInformation(tag)
  } else {
    return null
  }
}

function transformTagPost(rawData: GetPostsByTagSlugQuery['posts']): TagPost[] {
  if (!rawData) return []

  return rawData.map(transfromRawPostWithSection)
}

async function fetchTagPosts({
  take,
  skip = 0,
  slug,
}: {
  take: number
  skip: number
  slug: string
}): Promise<TagPost[]> {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching posts in tag page',
    getTraceObject()
  )

  const result = await fetchGQLData(errorLogger, GetPostsByTagSlugDocument, {
    skip,
    take,
    slug,
  })

  if (result) {
    const { posts } = result
    return transformTagPost(posts)
  } else {
    return []
  }
}

export { fetchTagInformation, fetchTagPosts }
