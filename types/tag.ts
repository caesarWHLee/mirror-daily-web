import type { HeroImage } from './common'

export type TagPost = {
  title: string
  publishedDate: string
  link: string
  sectionColor: string
  sectionName: string
  postMainImage: HeroImage
  textContent: string
}

export type TagInfo = {
  name: string
}
