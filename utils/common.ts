import { SITE_URL } from '@/constants/config'
import { IMAGE_PATH } from '@/constants/default-path'
import { SITE_NAME } from '@/constants/misc'
import type { Metadata } from 'next'
import { z } from 'zod'

function isServer(): boolean {
  return typeof window === 'undefined'
}

const isValidUrl = (url: string): boolean => {
  try {
    return Boolean(new URL(url))
  } catch (e) {
    return false
  }
}

const checkShortsTitle = (title: string) => title.length > 0
const checkEmail = (email: string) => {
  const { success } = z.string().email().safeParse(email)
  return success
}

const metaDescription =
  '《鏡報新聞網》——AI時代最需要的新聞媒體！快速、準確、中立，提供最新時事、深度調查報導與獨家新聞，一站掌握全球重大資訊, 打造趣味、有梗的短影音，貼近新世代年輕人媒體消費習慣。想掌握即時新聞、熱門話題？上《鏡報新聞網》，隨時隨地獲取關鍵資訊！'

// TODO: update default description
const getDefaultMetadata = (): Metadata => ({
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: metaDescription,
  openGraph: {
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: metaDescription,
    url: '/',
    images: IMAGE_PATH,
  },
})

type CustomMetadata = {
  title?: string
  description?: string
  url?: string
}
const updateMetadataOnClientSide = ({
  title,
  description,
  url,
}: CustomMetadata) => {
  if (title) {
    const titleElement = document.querySelector('title')
    if (titleElement) titleElement.textContent = title

    const ogElement = document.querySelector('meta[property="og:title"]')
    if (ogElement) ogElement.setAttribute('content', title)

    const twitterElement = document.querySelector('meta[name="twitter:title"]')
    if (twitterElement) twitterElement.setAttribute('content', title)
  }

  if (description) {
    const metaElement = document.querySelector('meta[name="description"]')
    if (metaElement) metaElement.setAttribute('content', description)

    const ogElement = document.querySelector('meta[property="og:description"]')
    if (ogElement) ogElement.setAttribute('content', description)

    const twitterElement = document.querySelector(
      'meta[name="twitter:description"]'
    )
    if (twitterElement) twitterElement.setAttribute('content', description)
  }

  if (url) {
    const ogElement = document.querySelector('meta[property="og:url"]')
    if (ogElement) ogElement.setAttribute('content', url)
  }
}

export {
  isServer,
  isValidUrl,
  checkShortsTitle,
  checkEmail,
  getDefaultMetadata,
  updateMetadataOnClientSide,
}
