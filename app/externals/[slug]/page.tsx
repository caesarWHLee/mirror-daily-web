import { fetchPartnerInformation, fetchExternals } from '../actions'
import ArticleSection from '../_components/articles-section'
import PopularNewsSection from '@/shared-components/popular-news-section'
import { notFound } from 'next/navigation'

const PAGE_SIZE = 12

type Props = {
  params: {
    slug: string
  }
}
export default async function Page({ params }: Props) {
  const { slug } = params
  const partnerName = await fetchPartnerInformation(slug)
  if (!partnerName) notFound()

  const externals = await fetchExternals({ take: PAGE_SIZE, slug, skip: 0 })
  if (!externals.length) notFound()

  const fetchMoreExternals = async (page: number) => {
    'use server'
    return await fetchExternals({
      slug,
      take: PAGE_SIZE,
      skip: PAGE_SIZE * (page - 1),
    })
  }

  return (
    <main className="flex flex-col items-center pl-[17px] pr-[18px] md:mb-[68px] md:pt-3 lg:flex-row lg:items-start lg:justify-center lg:gap-x-[100px] lg:pt-5">
      <ArticleSection
        partnerName={partnerName}
        initialList={externals}
        fetchMorePosts={fetchMoreExternals}
      />
      <PopularNewsSection />
    </main>
  )
}
