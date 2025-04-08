'use server'

import { fetchGQLData } from '@/utils/graphql'
import { createErrorLogger, getTraceObject } from '@/utils/log/common'
import {
  GetPostsByAuthorIdDocument,
  GetAuthorInformationDocument,
} from '@/graphql/__generated__/graphql'
import type {
  GetPostsByAuthorIdQuery,
  GetAuthorInformationQuery,
} from '@/graphql/__generated__/graphql'
import { transfromRawPostWithSection } from '@/utils/data-process'
import type { AuthorPost, AuthorInfo } from '@/types/author'

function transformAuthorPost(
  rawData: GetPostsByAuthorIdQuery['posts']
): AuthorPost[] {
  if (!rawData) return []

  return rawData.map(transfromRawPostWithSection)
}

async function fetchAuthorPosts({
  take,
  skip = 0,
  id,
}: {
  take: number
  skip?: number
  id: string
}): Promise<AuthorPost[]> {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching author posts on author page',
    getTraceObject()
  )

  const result = await fetchGQLData(errorLogger, GetPostsByAuthorIdDocument, {
    skip,
    take,
    id,
  })

  if (result) {
    const { posts } = result
    return transformAuthorPost(posts)
  } else {
    return []
  }
}

function transformAuthorInformation(
  rawData: GetAuthorInformationQuery['contact']
): AuthorInfo | null {
  if (!rawData) return null

  const authorId = rawData.id
  const name = rawData.name ?? ''

  return {
    authorId,
    name,
  }
}

async function fetchAuthorInformation(id: string): Promise<AuthorInfo | null> {
  const errorLogger = createErrorLogger(
    'Error occurs while fetching author information in author page',
    getTraceObject()
  )

  const result = await fetchGQLData(errorLogger, GetAuthorInformationDocument, {
    id: id,
  })

  if (result) {
    const { contact } = result
    return transformAuthorInformation(contact)
  } else {
    return null
  }
}

export { fetchAuthorPosts, fetchAuthorInformation }
