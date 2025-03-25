import { FIXED_KEY_FOR_SECTION_SHORTS } from '@/constants/config'
import { LATEST_SHORT_PAGES } from '@/constants/misc'

export const getPostPageUrl = (id: string, isExternal?: boolean) =>
  isExternal ? getExternalPageUrl(id) : getStoryPageUrl(id)

export const getExternalPageUrl = (id: string) => `/external/${id}`

export const getStoryPageUrl = (id: string) => `/story/${id}`

export const getSectionPageUrl = (slug: string) =>
  slug === FIXED_KEY_FOR_SECTION_SHORTS
    ? LATEST_SHORT_PAGES.news
    : `/section/${slug}`

export const getCategoryPageUrl = (
  slug: string,
  isShortsCategory?: boolean
) => {
  if (typeof isShortsCategory === 'boolean' && isShortsCategory) {
    return `/shorts/${slug}`
  } else return `/category/${slug}`
}

export const getTopicListingPage = () => `/topic`

export const getTopicPageUrl = (slug: string) => `/topic/${slug}`

export const getShortsPageUrl = (id: string) => `/shorts/${id}`

export const getAuthorPageUrl = (id: string) => `/author/${id}`

export const getTagPageUrl = (slug: string) => `/tag/${slug}`
