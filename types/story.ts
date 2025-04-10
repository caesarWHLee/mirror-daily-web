import type { HeroImage } from '@/types/common'
import type { ApiData } from '@/shared-components/api-data-renderer/renderer'

export type Contact = {
  link: string
  name: string
}

export type Post = {
  id: string
  title: string
  subtitle: string
  heroCaption: string
  publishedTime: string
  postMainImage: HeroImage
  sectionName: string
  sectionColor: string
  writers: Contact[]
  photographers: Contact[]
  apiData: ApiData
  apiDataBrief: ApiData
  tags: { name: string; slug: string }[]
  algoTags: { name: string; slug: string }[]
  link: string
  warning: string
  isAdult: boolean
}

export type ItemInHeroSection = Omit<
  Post,
  'apiData' | 'apiDataBrief' | 'id' | 'warning' | 'isAdult'
>
