import { fetchPartnerInformation, fetchExternals } from '../actions'
import ArticleSection from '../_components/articles-section'
import PopularNewsSection from '@/shared-components/popular-news-section'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    slug: string
  }
}
export default async function Page({ params }: Props) {
  const { slug } = params
  const partnerName = await fetchPartnerInformation(slug)
  if (!partnerName) notFound()

  const externals = await fetchExternals(1, slug)
  if (!externals.length) notFound()

  return (
    <main className="flex flex-col items-center pl-[17px] pr-[18px] md:mb-[68px] md:pt-3 lg:flex-row lg:items-start lg:justify-center lg:gap-x-[100px] lg:pt-5">
      <ArticleSection
        partnerName={partnerName}
        initialList={externals}
        slug={slug}
      />
      <PopularNewsSection />
    </main>
  )
}
