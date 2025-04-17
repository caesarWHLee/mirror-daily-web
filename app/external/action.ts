'use server'

import { createErrorLogger, getTraceObject } from '@/utils/log/common'
import { fetchGQLData } from '@/utils/graphql'
import {
  GetExternalByIdDocument,
  GetRelatedPostsByExternalIdDocument,
} from '@/graphql/__generated__/graphql'
import type { GetExternalByIdQuery } from '@/graphql/__generated__/graphql'
import type { ExternalPost } from '@/types/external'
import { dateFormatter, transfromRawRelatedPosts } from '@/utils/data-process'
import { getExternalPageUrl, getExternalsPageUrl } from '@/utils/site-urls'
import type { RelatedPost } from '@/types/common'

function transformExternal(
  rawData: GetExternalByIdQuery['external']
): ExternalPost | null {
  if (!rawData) return null
  const title = rawData.title ?? ''
  const thumb = rawData.thumb ?? ''
  const partner = rawData.partner?.name ?? ''
  const partnerSlug = rawData.partner?.slug ?? ''
  const externalsLink = getExternalsPageUrl(partnerSlug)
  const publishedTime = dateFormatter(rawData.publishedDate) ?? ''
  const brief = rawData.brief ?? ''
  const content = rawData.content ?? ''
  const tags =
    rawData.tags?.map((tag) => ({
      name: tag.name ?? '',
      slug: tag.slug ?? '',
    })) ?? []
  const link = getExternalPageUrl(rawData.id)
  const sectionName = '時事'

  return {
    title,
    thumb,
    partner,
    externalsLink,
    publishedTime,
    brief,
    content,
    tags,
    link,
    sectionName,
  }
}

async function fetchExternal(id: string): Promise<ExternalPost | null> {
  const errorLogger = createErrorLogger(
    `Error occurs while fetching external with id:${id} on external page`,
    getTraceObject()
  )
  const result = await fetchGQLData(errorLogger, GetExternalByIdDocument, {
    id,
  })
  if (result) {
    const { external } = result
    return transformExternal(external)
  } else {
    return null
  }
}

async function fetchRelatedPosts(id: string): Promise<RelatedPost[]> {
  const errorLogger = createErrorLogger(
    `Error occurs while fetching related posts using external id:${id} on external page`,
    getTraceObject()
  )
  const result = await fetchGQLData(
    errorLogger,
    GetRelatedPostsByExternalIdDocument,
    {
      id,
    }
  )
  if (result) {
    const { external } = result
    return transfromRawRelatedPosts(external)
  } else {
    return []
  }
}

export { fetchExternal, fetchRelatedPosts }
