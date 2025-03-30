import { fetchAuthorPosts, fetchAuthorInformation } from '../actions'
import { notFound } from 'next/navigation'
import PopularNewsSection from '@/shared-components/popular-news-section'
import type { Metadata } from 'next'
import { SITE_NAME } from '@/constants/misc'
import { getAuthorPageUrl } from '@/utils/site-urls'
import { getDefaultMetadata } from '@/utils/common'
import ArticleSection from '../_components/articles-section'

// add segment config to prevent data fetch during build
export const dynamic = 'force-dynamic'

type PageProps = { params: { id: string } }

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = params
  const authorInfo = await fetchAuthorInformation(id)

  if (!authorInfo) {
    notFound()
  }

  const defaultMetadata = getDefaultMetadata()

  const title = `${authorInfo.name} - ${SITE_NAME}`

  const metaData = Object.assign(
    {},
    {
      ...defaultMetadata,
      title,
      openGraph: {
        ...(defaultMetadata.openGraph ?? {}),
        title,
        url: getAuthorPageUrl(id),
      },
    }
  )

  return metaData
}

const PAGE_SIZE = 12

export default async function Home({ params }: PageProps) {
  const id = params.id

  const authorInfo = await fetchAuthorInformation(id)
  if (!authorInfo) notFound()
  const posts = await fetchAuthorPosts({ id, take: PAGE_SIZE, skip: 0 })
  if (posts.length === 0) notFound()

  const fetchMorePosts = async (page: number) => {
    'use server'
    return await fetchAuthorPosts({
      id,
      take: PAGE_SIZE,
      skip: PAGE_SIZE * (page - 1),
    })
  }

  return (
    <main className="flex flex-col items-center pl-[17px] pr-[18px] md:mb-[68px] md:pt-3 lg:flex-row lg:items-start lg:justify-center lg:gap-x-[100px] lg:pt-5">
      <ArticleSection
        info={authorInfo}
        initialList={posts}
        fetchMorePosts={fetchMorePosts}
      />
      <PopularNewsSection />
    </main>
  )
}
