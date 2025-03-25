'use client'
import { useEffect, useMemo, useState } from 'react'
import Selector from './selector'
import PostList from './post-list'
import type { HeaderData, ParameterOfComponent } from '@/types/common'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  selectIsInitialized,
  selectLiveEvent,
  selectLatestPosts,
  selectPopularNews,
} from '@/redux/homepage/selector'
import { initializeData } from '@/redux/homepage/slice'
import Loading from '../loading'

export const TAB = {
  Latest: '即時新聞',
  Hot: '熱門新聞',
} as const

type Props = {
  headerData: HeaderData[]
}

type PostData = Record<
  keyof typeof TAB,
  ParameterOfComponent<typeof PostList>['list']
>

export default function TopNewsSection({ headerData }: Props) {
  const dispatch = useAppDispatch()
  const isInitialized = useAppSelector(selectIsInitialized)
  const liveEvent = useAppSelector(selectLiveEvent)
  const latestPosts = useAppSelector(selectLatestPosts)
  const popularNews = useAppSelector(selectPopularNews)

  const [tab, setTab] = useState<keyof typeof TAB>('Latest')

  const postData: PostData = useMemo(() => {
    let latestList: PostData['Latest'] = [undefined]

    if (liveEvent) {
      latestList = [liveEvent, ...latestPosts.slice(0, 9)]
    } else {
      const first = latestPosts[0]

      if (first) {
        latestList = [
          {
            postName: first.postName,
            heroImage: first.heroImage,
            link: first.link,
          },
          ...latestPosts.slice(1, 10),
        ]
      }
    }

    let hotList: PostData['Hot'] = [undefined]

    {
      const first = popularNews[0]

      if (first) {
        hotList = [
          {
            postName: first.postName,
            heroImage: first.heroImage,
            link: first.link,
          },
          ...popularNews.slice(1, 10),
        ]
      }
    }

    return {
      Latest: latestList,
      Hot: hotList,
    }
  }, [liveEvent, latestPosts, popularNews])

  const posts = postData[tab]

  useEffect(() => {
    if (!isInitialized) {
      dispatch(initializeData(headerData))
    }
  }, [isInitialized, dispatch, headerData])

  if (!isInitialized)
    return (
      <div className="h-[80vh] w-full">
        <Loading />
      </div>
    )

  return (
    <section className="section-in-homepage mb-4 mt-[41px] md:mb-14 md:mt-6 lg:mb-9 lg:mt-[26px]">
      <Selector selectedTab={tab} setTab={setTab} />
      <PostList key={tab} list={posts} />
    </section>
  )
}
