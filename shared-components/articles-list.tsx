'use client'
import type { ReactElement } from 'react'
import MainArticleCard from './main-article-card'
import SecondaryArticleCard from './secondary-article-card'
import InfiniteScrollList from '@readr-media/react-infinite-scroll-list'
import { notFound } from 'next/navigation'
import type { PostData } from '@/utils/data-process'

type Props<T> = {
  initialPosts: T[]
  slug: string
  color: string
  name: string
  fetchPosts(page: number, slug: string): Promise<T[]>
}

export default function ArticlesList<T extends PostData>({
  initialPosts,
  slug,
  color,
  name,
  fetchPosts,
}: Props<T>): ReactElement {
  const PAGE_SIZE = 12
  const [firstPost, ...otherPosts] = initialPosts ?? []

  const fetchMorePosts = async (page: number) => {
    const posts = await fetchPosts(page, slug)
    return posts
  }

  if (!firstPost) notFound()

  return (
    <div className="flex w-full max-w-screen-sm flex-col items-center md:max-w-[670px] lg:max-w-[740px]">
      <div className="mb-5 w-full pl-[23px] pr-[22px] md:mb-7 md:px-0">
        <h1
          style={{ color: color }}
          className="mb-3 text-xl font-bold leading-[1.3] lg:text-2xl"
        >
          {name}
        </h1>
        <hr
          style={{ borderColor: color }}
          className="max-w-[342px] border-2 md:max-w-[670px] lg:max-w-[740px]"
        />
      </div>
      <div className="flex w-full flex-col items-start">
        <div className="mb-10 w-full md:mb-[50px]">
          <MainArticleCard color={color} postItem={firstPost} />
        </div>
        <div className="pl-[23px] pr-[22px] md:px-0">
          <div className="flex max-w-[330px] flex-col gap-y-5 md:max-w-[670px] md:gap-y-8 lg:max-w-[725px]">
            {otherPosts.length !== 0 && (
              <InfiniteScrollList
                initialList={otherPosts}
                pageSize={PAGE_SIZE}
                fetchListInPage={fetchMorePosts}
                isAutoFetch={false}
                loader={
                  <div className="mt-4 flex justify-center md:mt-12">
                    <button className="h-9 rounded border-[1.5px] px-[33px] py-[4.5px] text-lg font-bold leading-[1.3] text-[#7F8493] hover-or-active:border-[#119CC7] hover-or-active:text-[#119CC7]">
                      看更多
                    </button>
                  </div>
                }
              >
                {(posts) =>
                  posts.map((post) => (
                    <SecondaryArticleCard
                      key={post.title}
                      color={color}
                      postItem={post}
                    />
                  ))
                }
              </InfiniteScrollList>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
