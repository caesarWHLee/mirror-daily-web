import type { HeroImageFragment } from '@/graphql/__generated__/graphql'
import { SHORTS_TYPE } from '@/types/common'
import { z } from 'zod'

type ImageKeys = keyof Omit<
  NonNullable<HeroImageFragment['resized']>,
  '__typename'
>

const imageKeys = [
  'original',
  'w480',
  'w800',
  'w1200',
  'w1600',
  'w2400',
] as const satisfies ImageKeys[]

const requiredImageKey = 'original'

const resizedImageSchema = z
  .object(
    imageKeys.reduce(
      (shape, key) => {
        shape[key] = z.optional(z.string())
        return shape
      },
      {} as Record<ImageKeys, z.ZodTypeAny>
    )
  )
  .partial(
    Object.fromEntries([
      imageKeys.filter((k) => k != requiredImageKey).map((k) => [k, true]),
    ])
  )

const heroImageSchema = z
  .object({
    resized: resizedImageSchema,
    resizedWebp: resizedImageSchema,
  })
  .partial()

const categorySchema = z.object({
  name: z.string(),
  slug: z.string(),
})

export const sectionSchema = z.object({
  name: z.string(),
  slug: z.string(),
  color: z.string(),
  categories: z.array(categorySchema),
})

const partnerSchema = z.object({
  slug: z.string(),
})

export const rawLatestPostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  heroImage: z.union([heroImageSchema, z.string(), z.null(), z.undefined()]),
  sections: z.array(sectionSchema.pick({ name: true, slug: true })),
  partner: z.union([partnerSchema, z.string()]),
  redirect: z.string(),
  publishedDate: z.string(),
})

export const rawPopularPostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  heroImage: z.union([heroImageSchema, z.string(), z.null(), z.undefined()]),
  sectionsInInputOrder: z.array(sectionSchema.pick({ name: true, slug: true })),
})

export const rawFlashNewsSchema = rawLatestPostSchema.pick({
  title: true,
  slug: true,
})

export const editorChoiceSchenma = z.object({
  outlink: z.string().nullish(),
  heroImage: heroImageSchema.nullable(),
  choices: rawLatestPostSchema
    .pick({
      title: true,
      slug: true,
      heroImage: true,
    })
    .nullish(),
})

export const topicsSchema = z.object({
  name: z.string(),
  slug: z.string(),
  posts: z.array(
    rawLatestPostSchema.pick({
      title: true,
      slug: true,
      heroImage: true,
    })
  ),
})

export const gameSchema = z.object({
  name: z.string(),
  descriptions: z.string(),
  link: z.string(),
  heroImage: heroImageSchema,
})

export const latestShortsSchema = z.object({
  id: z.string(),
  name: z.string(),
  uploader: z.string(),
  videoSrc: z.string(),
  heroImage: z.union([heroImageSchema, z.null()]),
})

export const shortsDataSchema = z.object({
  id: z.string(),
  isShorts: z.boolean(),
  uploader: z.string(),
  videoSection: z.nativeEnum(SHORTS_TYPE),
  state: z.enum(['draft', 'scheduled', 'published']),
  tags: z.array(
    z.object({
      id: z.string(),
    })
  ),
})
