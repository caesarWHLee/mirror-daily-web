import { notFound } from 'next/navigation'
import { fetchPost } from '../actions'
import ArticleSection from '../_components/article-section'
import type { Metadata } from 'next'
import { SITE_NAME } from '@/constants/misc'
import { getFirstParagraphFromApiData } from '@/utils/data-process'
import { IMAGE_PATH } from '@/constants/default-path'
import { getDefaultMetadata } from '@/utils/common'
import { Suspense } from 'react'
import PageLogger from '@/app/_components/page-logger'
import AdultWarning from '../_components/adult-warning'

type PageProps = { params: { id: string } }

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = params
  const postData = await fetchPost(id)

  if (!postData) {
    notFound()
  }

  const defaultMetadata = getDefaultMetadata()

  const title = `${postData.title} - ${SITE_NAME}`
  const description = getFirstParagraphFromApiData(postData.apiDataBrief) || ''
  const image = postData.postMainImage?.resized?.original || IMAGE_PATH

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
        url: postData.link,
        images: image,
        type: 'website',
      },
    }
  )

  return metaData
}

export default async function Page({ params }: PageProps) {
  const id = params.id

  const postData = await fetchPost(id)
  if (!postData) notFound()

  const extra = {
    storyId: postData.id,
    storyTitle: postData.title,
    authorNames: postData.writers.map((w) => w.name),
    sectionName: postData.sectionName,
    tags: postData.tags.map((t) => t.name),
    algoTags: postData.algoTags.map((t) => t.name),
  }

  return (
    <>
      <Suspense>
        <PageLogger extra={extra} />
      </Suspense>
      <main className="flex flex-col items-center">
        <hr className="hidden w-[680px] border border-[#000000] md:mb-9 md:block lg:mb-12 lg:mt-4 lg:w-[1128px]" />
        <ArticleSection {...postData} id={id} />
        <AdultWarning isAdult={postData.isAdult} />
      </main>
    </>
  )
}
