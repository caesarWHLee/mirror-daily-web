import type { ImageDataFragment } from '@/graphql/__generated__/graphql'
import type { headerSchema } from '@/utils/data-schema'
import type { z } from 'zod'

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

export type HeaderData = z.infer<typeof headerSchema>

export type HeaderSection = HeaderData['sections'][number]

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
