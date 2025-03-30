'use server'
import { fetchGQLData } from '@/utils/graphql'
import { createErrorLogger, getTraceObject } from '@/utils/log/common'
import {
  GetPartnerInformationDocument,
  GetExternalsByPartnerSlugDocument,
} from '@/graphql/__generated__/graphql'
import type {
  GetPartnerInformationQuery,
  GetExternalsByPartnerSlugQuery,
} from '@/graphql/__generated__/graphql'
import { getExternalPageUrl } from '@/utils/site-urls'
import { DEFAULT_SECTION_NAME, DEFAULT_SECTION_COLOR } from '@/constants/misc'

function transformPartnerInformation(
  rawData: GetPartnerInformationQuery['partner']
): string | null {
  if (!rawData) return null

  const name = rawData.name ?? ''
  return name
}

async function fetchPartnerInformation(slug: string) {
  const errorLogger = createErrorLogger(
    `Error occurs while fetching partner information (slug:${slug}) on externals page`,
    getTraceObject()
  )

  const result = await fetchGQLData(
    errorLogger,
    GetPartnerInformationDocument,
    {
      slug,
    }
  )

  if (result) {
    const { partner } = result
    return transformPartnerInformation(partner)
  } else {
    return null
  }
}

function transformExternal(
  rawData: GetExternalsByPartnerSlugQuery['externals']
) {
  if (!rawData) return []

  return rawData.map((rawExternal) => {
    const link = getExternalPageUrl(rawExternal.id)
    const title = rawExternal.title ?? ''
    const thumb = rawExternal.thumb ?? ''
    const createdTime = rawExternal.createdAt ?? ''
    const textContent = rawExternal.brief ?? ''
    const sectionName = DEFAULT_SECTION_NAME
    const sectionColor = DEFAULT_SECTION_COLOR

    return {
      link,
      title,
      thumb,
      textContent,
      createdTime,
      sectionName,
      sectionColor,
    }
  })
}

async function fetchExternals(page: number, slug: string) {
  const errorLogger = createErrorLogger(
    `Error occurs while fetching external posts by partner slug: ${slug} on externals page`,
    getTraceObject()
  )

  const pageSize = 12
  const take = pageSize * 2

  const result = await fetchGQLData(
    errorLogger,
    GetExternalsByPartnerSlugDocument,
    {
      skip: (page - 1) * pageSize,
      take,
      slug,
    }
  )

  if (result) {
    const { externals } = result
    return transformExternal(externals)
  } else {
    return []
  }
}

export { fetchPartnerInformation, fetchExternals }
