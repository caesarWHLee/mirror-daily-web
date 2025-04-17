'use server'
import { fetchGQLData } from '@/utils/graphql'
import {
  GetCategoryInformationDocument,
  GetPostsByCategorySlugDocument,
} from '@/graphql/__generated__/graphql'
import type {
  GetPostsByCategorySlugQuery,
  GetCategoryInformationQuery,
} from '@/graphql/__generated__/graphql'
import { createErrorLogger, getTraceObject } from '@/utils/log/common'
import type { CategoryPost } from '@/types/category'
import { transfromRawPost } from '@/utils/data-process'

function transformCategoryPost(
  rawData: GetPostsByCategorySlugQuery['posts']
): CategoryPost[] {
  if (!rawData) return []

  return rawData.map(transfromRawPost)
}

async function fetchCategoryPosts({
  take,
  skip = 0,
  slug,
}: {
  take: number
  skip: number
  slug: string
}) {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching category posts in category page',
    getTraceObject()
  )

  const result = await fetchGQLData(
    errorLogger,
    GetPostsByCategorySlugDocument,
    {
      skip,
      take,
      slug,
    }
  )

  if (result) {
    const { posts } = result
    return transformCategoryPost(posts)
  } else {
    return []
  }
}

function transformCategoryInformation(
  rawData: GetCategoryInformationQuery['category']
) {
  if (!rawData) return null

  const name = rawData.name ?? ''
  const color = rawData.sections?.[0]?.color ?? '#FF5A36'
  const state = rawData.state

  if (state === 'active') {
    return {
      name,
      color,
    }
  } else return null
}

async function fetchCategoryInformation(slug: string) {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching category information',
    getTraceObject()
  )

  const result = await fetchGQLData(
    errorLogger,
    GetCategoryInformationDocument,
    {
      slug: slug,
    }
  )

  if (result) {
    const { category } = result
    return transformCategoryInformation(category)
  } else {
    return null
  }
}

export { fetchCategoryPosts, fetchCategoryInformation }
