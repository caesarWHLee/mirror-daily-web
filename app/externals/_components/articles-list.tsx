'use client'

import ArticleCard from './article-card'
import InfiniteScrollList from '@readr-media/react-infinite-scroll-list'
import type { External } from '@/types/externals'

type Props = {
  initialList: External[]
  fetchMorePosts(page: number): Promise<External[]>
}

const PAGE_SIZE = 12

export default function ArticlesList({ initialList, fetchMorePosts }: Props) {
  return (
    <InfiniteScrollList
      initialList={initialList}
      pageSize={PAGE_SIZE}
      fetchListInPage={fetchMorePosts}
      isAutoFetch={false}
      loader={
        <button className="h-9 rounded border-[1.5px] px-[33px] py-[4.5px] text-lg font-bold leading-[1.3] text-[#7F8493] hover-or-active:border-[#119CC7] hover-or-active:text-[#119CC7]">
          看更多
        </button>
      }
    >
      {(posts) =>
        posts.map((post) => <ArticleCard {...post} key={post.title} />)
      }
    </InfiniteScrollList>
  )
}
