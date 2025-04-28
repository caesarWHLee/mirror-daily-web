import type { ImageDataFragment } from '@/graphql/__generated__/graphql'
import { SHORTS_TYPE } from '@/types/common'
import { z } from 'zod'

export type ImageKeys = keyof Omit<
  NonNullable<ImageDataFragment['resized']>,
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

export const resizedImageSchema = z
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
  type: z.literal('Section'),
})

const partnerSchema = z.object({
  slug: z.string(),
})

export const rawLatestPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  brief: z.string(),
  heroImage: z.union([heroImageSchema, z.string(), z.null(), z.undefined()]),
  sections: z.array(sectionSchema.pick({ name: true, slug: true })),
  categories: z.array(categorySchema.pick({ name: true, slug: true })),
  partner: z.union([partnerSchema, z.string()]),
  redirect: z.string(),
  publishedDate: z.string(),
})

export const rawPopularPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  brief: z.string(),
  heroImage: z.union([heroImageSchema, z.string(), z.null(), z.undefined()]),
  publishedDate: z.string(),
  sectionsInInputOrder: z.array(sectionSchema.pick({ name: true, slug: true })),
  categories: z.array(categorySchema.pick({ name: true, slug: true })),
})

export const rawFlashNewsSchema = z.object({
  outlink: z.string(),
  hotnews: z
    .object({
      id: z.string(),
      title: z.string(),
    })
    .nullish(),
  hotexternals: z
    .object({
      id: z.string(),
      title: z.string(),
    })
    .nullish(),
})

export const editorChoiceSchenma = z.object({
  outlink: z.string().nullish(),
  heroImage: heroImageSchema.nullable(),
  choices: rawLatestPostSchema
    .pick({
      id: true,
      title: true,
      heroImage: true,
    })
    .nullish(),
})

export const topicsSchema = z.object({
  name: z.string(),
  slug: z.string(),
  posts: z.array(
    rawLatestPostSchema.pick({
      id: true,
      title: true,
      heroImage: true,
    })
  ),
})

const weatherSchema = z.object({
  date: z.string(),
  max_temp: z.number(),
  min_temp: z.number(),
  weather_desc: z.string(),
  weather_code: z.string(),
  weather: z.string(),
  fetch_time: z.string(),
})

export const cityWeatherSchema = z.record(z.string(), weatherSchema)

export const latestShortsSchema = z.object({
  id: z.string(),
  name: z.string(),
  uploader: z.string(),
  youtubeUrl: z.string().nullish(),
  videoSrc: z.string().nullish(),
  heroImage: heroImageSchema.nullable(),
})

export const shortsDataSchema = z.object({
  id: z.string(),
  name: z.string(),
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

export const headerSchema = z.array(
  z.union([
    sectionSchema,
    topicsSchema
      .pick({
        name: true,
        slug: true,
      })
      .extend({
        type: z.literal('Topic'),
      }),
  ])
)
