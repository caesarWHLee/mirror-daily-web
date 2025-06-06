import { fetchHeaderData } from './actions-general'

import Header from '@/shared-components/header'
import NewsletterSubscription from '@/shared-components/newsletter-subscription'
import Footer from '@/shared-components/footer'
import SectionDivider from './_components/divider'
import EditorChoiceSection from './_components/editor-choice/section'
import TopNewsSection from './_components/top-news/section'
import ShortsNewsSection from './_components/shorts/news-section'
import TopicSection from './_components/topic/section'
import ShortsDerivativeSection from './_components/shorts/derivative-section'
import LatestNewsSection from './_components/latest-news/section'
import Loading from './_components/loading'
import { Suspense } from 'react'
import PageLogger from './_components/page-logger'
import { DesktopGptAd } from '@/shared-components/gpt-ad/desktop-gpt-ad'
import { MobileGptAd } from '@/shared-components/gpt-ad/mobile-gpt-ad'

// add segment config to prevent data fetch during build
export const dynamic = 'force-dynamic'

export default async function Home() {
  const headerData = await fetchHeaderData()

  return (
    <>
      <Suspense>
        <PageLogger />
      </Suspense>
      <Header />
      <div className="flex w-full max-w-screen-lg shrink-0 grow flex-col">
        <main className="flex w-full grow flex-col items-center justify-center">
          <div className="hidden min-h-[306px] lg:block">
            <DesktopGptAd
              slotKey="mirrordaily_home_PC_970x250_1"
              customClasses="mt-5 mb-9"
            />
          </div>
          <div className="block min-h-[352px] md:hidden">
            <MobileGptAd
              slotKey="mirrordaily_list_MW_336x280_HD"
              customClasses="my-9 mx-auto"
            />
          </div>
          <SectionDivider customClasses="hidden md:block lg:hidden" />
          {/* 編輯精選 */}
          <Suspense
            fallback={
              <div className="h-[80vh] w-full">
                <Loading />
              </div>
            }
          >
            <EditorChoiceSection />
          </Suspense>
          <DesktopGptAd
            slotKey="mirrordaily_home_PC_728x90_1"
            customClasses="my-7"
          />
          <SectionDivider customClasses="lg:hidden" />
          {/* 即時新聞/熱門新聞（10則） */}
          <TopNewsSection headerData={headerData} />
          <SectionDivider />
          {/* 短影音新聞 */}
          <Suspense
            fallback={
              <div className="h-[80vh] w-full">
                <Loading />
              </div>
            }
          >
            <ShortsNewsSection />
          </Suspense>
          <SectionDivider />
          {/* Topic（4則）+ 天氣 */}
          <Suspense
            fallback={
              <div className="h-[80vh] w-full">
                <Loading />
              </div>
            }
          >
            <TopicSection />
          </Suspense>
          <SectionDivider />
          {/* 短影音．投稿 */}
          <Suspense
            fallback={
              <div className="h-[80vh] w-full">
                <Loading />
              </div>
            }
          >
            <ShortsDerivativeSection />
          </Suspense>
          <SectionDivider />
          {/* 最新新聞 */}
          <LatestNewsSection />
        </main>
      </div>
      <NewsletterSubscription />
      <Footer />
    </>
  )
}
