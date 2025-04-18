import type { ImageDataFragment } from '@/graphql/__generated__/graphql'

type ResizedImage = { original: string } & Partial<
  Record<
    keyof Omit<
      NonNullable<ImageDataFragment['resized']>,
      'original' | '__typename'
    >,
    string
  >
>
type ResizedWebPImage = { original: string } & Partial<
  Record<
    keyof Omit<
      NonNullable<ImageDataFragment['resizedWebp']>,
      'original' | '__typename'
    >,
    string
  >
>

export type HeroImage = {
  resized?: ResizedImage
  resizedWebp?: ResizedWebPImage
}

export type PopularNews = {
  categoryName: string
  categoryColor: string
  postId: string
  postName: string
  heroImage: HeroImage
  publishedDate: string
  link: string
}

export type ParameterOfComponent<T> = T extends (
  props: infer P,
  ...args: any[] // eslint-disable-line @typescript-eslint/no-explicit-any
) => any // eslint-disable-line @typescript-eslint/no-explicit-any
  ? P
  : never

export type HeaderSection = {
  name: string
  slug: string
  color: string
  categories: {
    name: string
    slug: string
    color: string
  }[]
  type: 'Section'
}

export type HeaderTopic = {
  name: string
  slug: string
  type: 'Topic'
}

export type HeaderData = HeaderSection | HeaderTopic

export enum SHORTS_TYPE {
  NEWS = 'news',
  DERIVATIVE = 'creativity',
}

export type Shorts = {
  id: string
  title: string
  link: string
  fileUrl: string
  poster?: string
  contributor?: string
}

export type LatestPost = {
  categoryName: string
  categoryColor: string
  postId: string
  postName: string
  heroImage: HeroImage
  publishedDate: string
  link: string
}

export type RelatedPost = {
  title: string
  link: string
  sectionColor: string
  sectionName: string
  postMainImage: HeroImage
}

export type SectionData = Pick<HeaderSection, 'slug' | 'color'>[]
