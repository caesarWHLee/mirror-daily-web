import NextLink from 'next/link'
import NextImage from 'next/image'
import IconHomepage from '@/public/icons/homepage.svg'
import IconNews from '@/public/icons/shorts/news.svg'
import IconCreatity from '@/public/icons/shorts/creativity.svg'
import { SHORTS_TYPE } from '@/types/common'
import MobileUploadButton from './mobile-upload-button'

type Props = {
  tabs: Record<SHORTS_TYPE, string>
  activeTab: SHORTS_TYPE
}

export default function MobileNavbar({ tabs, activeTab }: Props) {
  return (
    <nav className="grid h-[var(--shorts-header-height)] shrink-0 grid-cols-4 text-sm font-normal leading-normal text-black md:hidden [&>*:active]:bg-[#F0F0F1] [&>*:hover]:bg-[#F6F6FB]">
      <NextLink
        prefetch={false}
        href="/"
        className="flex flex-col items-center justify-center gap-y-1"
      >
        <NextImage src={IconHomepage} alt="首頁" />
        <p>首頁</p>
      </NextLink>
      <NextLink
        href={tabs.news}
        className={`flex flex-col items-center justify-center gap-y-1 ${
          activeTab === SHORTS_TYPE.NEWS ? 'bg-[#F0F0F1]' : ''
        }`}
      >
        <NextImage src={IconNews} alt="新聞" />
        <p>新聞</p>
      </NextLink>
      <NextLink
        href={tabs.creativity}
        className={`flex flex-col items-center justify-center gap-y-1 ${
          activeTab === SHORTS_TYPE.DERIVATIVE ? 'bg-[#F0F0F1]' : ''
        }`}
      >
        <NextImage src={IconCreatity} alt="投稿" />
        <p>投稿</p>
      </NextLink>
      <MobileUploadButton />
    </nav>
  )
}
