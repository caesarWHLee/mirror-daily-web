import { z } from 'zod'
import {
  URL_STATIC_CREATIVTY_SHORTPAGE,
  URL_STATIC_LATEST_NEWS,
  URL_STATIC_NEWS_SHORTSPAGE,
  URL_STATIC_POPULAR_NEWS,
} from '@/constants/config'
import { SHORTS_TYPE } from '@/types/common'
import type {
  HeaderData,
  LatestPost,
  PopularNews,
  Shorts,
} from '@/types/common'
import {
  latestShortsSchema,
  rawLatestPostSchema,
  rawPopularPostSchema,
} from './data-schema'
import {
  hasExternalLink,
  transformRawLatestPost,
  transformRawPopularPost,
} from './post'
import { createDataFetchingChain, transformLatestShorts } from './data-process'

const fetchLatestPost = async (
  headerData: HeaderData[],
  page: number = 0
): Promise<LatestPost[]> => {
  // fetch more latest post on browser side
  try {
    const resp = await fetch(`${URL_STATIC_LATEST_NEWS}0${page}.json`)

    const rawPostData = await resp.json()
    const latestPosts = z.array(rawLatestPostSchema).parse(rawPostData?.latest)
    const filteredData = latestPosts.filter(
      (rawPost) => !hasExternalLink(rawPost)
    )

    return filteredData.map((item) => transformRawLatestPost(item, headerData))
  } catch (e) {
    // TODO: send error log
    console.error(e)
    return []
  }
}

const fetchPopularPost = async (
  headerData: HeaderData[],
  amount: number = 10
): Promise<PopularNews[]> => {
  try {
    const resp = await fetch(URL_STATIC_POPULAR_NEWS)

    const rawPostData = await z
      .promise(z.array(rawPopularPostSchema))
      .parse(resp.json())

    return rawPostData
      .map((item) => transformRawPopularPost(item, headerData))
      .slice(0, amount)
  } catch (e) {
    // TODO: send error log
    console.error(e)
    return []
  }
}

const fetchShortsForShortpage = async (
  type: SHORTS_TYPE,
  page: number = 1
): Promise<Shorts[]> => {
  const schema = z.promise(z.array(latestShortsSchema))

  const data = await createDataFetchingChain<
    z.infer<z.ZodArray<typeof latestShortsSchema>>
  >(console.error, [], async () => {
    const baseUrl =
      type === SHORTS_TYPE.NEWS
        ? URL_STATIC_NEWS_SHORTSPAGE
        : URL_STATIC_CREATIVTY_SHORTPAGE
    const jsonUrl = `${baseUrl}0${page}.json`
    const resp = await fetch(jsonUrl)

    const result = await schema.parse(resp.json())
    return result
  })

  return data.map(transformLatestShorts)
}

export { fetchLatestPost, fetchPopularPost, fetchShortsForShortpage }
