import PopularNewsSection from '@/shared-components/popular-news-section'
import ArticlesList from '../../../shared-components/articles-list'
import { fetchSectionPosts, fetchSectionInformation } from '../actions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SITE_NAME } from '@/constants/misc'
import { getSectionPageUrl } from '@/utils/site-urls'
import { getDefaultMetadata } from '@/utils/common'
import { DesktopGptAd } from '@/shared-components/gpt-ad/desktop-gpt-ad'
import { MobileGptAd } from '@/shared-components/gpt-ad/mobile-gpt-ad'

type PageProps = { params: { slug: string } }

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params
  const sectionInfo = await fetchSectionInformation(slug)

  if (!sectionInfo) {
    notFound()
  }

  const defaultMetadata = getDefaultMetadata()

  const title = `${sectionInfo.name} - ${SITE_NAME}`

  const metaData = Object.assign(
    {},
    {
      ...defaultMetadata,
      title,
      openGraph: {
        ...(defaultMetadata.openGraph ?? {}),
        title,
        url: getSectionPageUrl(slug),
      },
    }
  )

  return metaData
}

const PAGE_SIZE = 12

export default async function Page({
  params,
}: PageProps): Promise<JSX.Element> {
  const slug = params.slug

  const sectionInfo = await fetchSectionInformation(slug)
  const posts = await fetchSectionPosts({ take: PAGE_SIZE, skip: 0, slug })

  if (!sectionInfo) notFound()

  const color = sectionInfo.color
  const name = sectionInfo.name

  const fetchMorePosts = async (page: number) => {
    'use server'
    return await fetchSectionPosts({
      slug,
      take: PAGE_SIZE,
      skip: PAGE_SIZE * (page - 1),
    })
  }

  return (
    <>
      <div className="hidden min-h-[306px] lg:block">
        <DesktopGptAd
          slotKey="mirrordaily_home_PC_970x250_1"
          customClasses="mt-5 mb-9 mx-auto"
        />
      </div>
      <div className="block min-h-[352px] md:hidden">
        <MobileGptAd
          slotKey="mirrordaily_list_MW_336x280_HD"
          customClasses="my-9 mx-auto"
        />
      </div>
      <main className="mb-10 flex w-full flex-col items-center md:mb-[72px] md:pt-5 lg:mb-[100px] lg:flex-row lg:items-start lg:gap-x-[128px] lg:px-9">
        <ArticlesList
          initialPosts={posts}
          color={color}
          name={name}
          fetchMorePosts={fetchMorePosts}
        />
        <hr className="my-10 hidden w-[670px] border border-[#000928] md:block lg:hidden" />
        <PopularNewsSection />
        {/* <MobileGptAd
          slotKey="mirrordaily_list_MW_320x100_FIX"
          customClasses="fixed bottom-0 auto z-[9999]"
        /> */}
      </main>
      <DesktopGptAd
        slotKey="mirrordaily_list_970x250"
        customClasses="my-[80px] mx-auto"
      />
      <MobileGptAd
        slotKey="mirrordaily_list_MW_336x280_FT"
        customClasses="mt-8 mb-9 mx-auto z-[5]"
      />
    </>
  )
}
