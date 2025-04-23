import { notFound } from 'next/navigation'
import { fetchExternal, fetchRelatedPosts } from '../action'
import ArticleIntro from './components/article-intro'
import Article from './components/article'
import RelatedNewsList from './components/related-news-list'
import { fetchPopularPost, fetchLatestPost } from '@/app/actions-general'
import FeatureNewsList from './components/feature-news-list'
import type { Metadata } from 'next'
import { SITE_NAME } from '@/constants/misc'
import { IMAGE_PATH } from '@/constants/default-path'
import { getDefaultMetadata } from '@/utils/common'
import { DesktopGptAd } from '@/shared-components/gpt-ad/desktop-gpt-ad'
import { MobileGptAd } from '@/shared-components/gpt-ad/mobile-gpt-ad'
import MisoPageView from '@/app/_components/miso-pageview'

type PageProps = { params: { id: string } }

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = params
  const externalPost = await fetchExternal(id)

  if (!externalPost) {
    notFound()
  }

  const defaultMetadata = getDefaultMetadata()

  const title = `${externalPost.title} - ${SITE_NAME}`
  const description = externalPost.brief
  const image = externalPost.thumb || IMAGE_PATH

  const metaData = Object.assign(
    {},
    {
      ...defaultMetadata,
      title,
      description,
      openGraph: {
        ...(defaultMetadata.openGraph ?? {}),
        title,
        description,
        url: externalPost.link,
        images: image,
        type: 'website',
      },
    }
  )

  return metaData
}

export default async function Page({ params }: PageProps) {
  const id = params.id
  const externalPost = await fetchExternal(id)
  const relatedPosts = await fetchRelatedPosts(id)
  const popularPosts = await fetchPopularPost(6)
  const latestPosts = (await fetchLatestPost(1)).slice(0, 6)

  if (!externalPost) notFound()

  const { brief, content, ...intro } = externalPost

  return (
    <main className="flex flex-col items-center">
      <MisoPageView productIds={`story_${id}`} />
      <div className="hidden min-h-[306px] lg:block">
        <DesktopGptAd
          slotKey="mirrordaily_home_PC_970x250_1"
          customClasses="mt-5 mb-9"
        />
      </div>
      <div className="block min-h-[352px] md:hidden">
        <MobileGptAd
          slotKey="mirrordaily_list_MW_336x280_HD"
          customClasses="my-9"
        />
      </div>
      <hr className="hidden w-[680px] border border-[#000000] md:mb-9 md:block lg:mb-12 lg:mt-4 lg:w-[1128px]" />
      <section className="mb-[72px] mt-5 flex flex-col items-center md:mb-[76px] md:mt-9 lg:mb-[92px] lg:mt-[6px] lg:flex-row lg:items-start lg:justify-center lg:gap-x-[104px]">
        <div>
          <ArticleIntro {...intro} />
          <Article brief={brief} content={content} />
          <RelatedNewsList posts={relatedPosts} />
        </div>
        <hr className="hidden h-px w-full bg-[#CCCED4] md:my-12 md:block md:w-[588px] lg:hidden" />
        <div className="flex flex-col gap-y-[46px] md:gap-y-12 lg:gap-y-[60px]">
          <DesktopGptAd
            slotKey="mirrordaily_article_300x600_1"
            customClasses="mb-[-20px]"
          />
          <FeatureNewsList title="最新新聞" posts={latestPosts} />
          <DesktopGptAd
            slotKey="mirrordaily_article_PC_300x600_R2"
            customClasses="mt-[-28px]"
          />
          <FeatureNewsList title="熱門新聞" posts={popularPosts} />
        </div>
      </section>
      {/* <MobileGptAd
        slotKey="mirrordaily_article_MW_320x100_ST"
        customClasses="fixed bottom-0 z-10"
      /> */}
    </main>
  )
}
