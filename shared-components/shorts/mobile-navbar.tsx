import type { TAB } from '@/types/shorts'
import NextLink from 'next/link'
import NextImage from 'next/image'
import IconHomepage from '@/public/icons/homepage.svg'
import IconNews from '@/public/icons/shorts/news.svg'
import IconCreatity from '@/public/icons/shorts/creativity.svg'
import IconSubmission from '@/public/icons/shorts/submission.svg'

type Props = {
  tabs: Record<TAB, string>
  activeTab: TAB
}

export default function MobileNavbar({ tabs, activeTab }: Props) {
  return (
    <nav className="grid h-[var(--shorts-header-height)] shrink-0 grid-cols-4 text-sm font-normal leading-normal text-black md:hidden [&>*:active]:bg-[#F0F0F1] [&>*:hover]:bg-[#F6F6FB]">
      <NextLink
        href="/"
        className="flex flex-col items-center justify-center gap-y-1"
      >
        <NextImage src={IconHomepage} alt="首頁" />
        <p>首頁</p>
      </NextLink>
      <NextLink
        href={tabs.NEWS}
        className={`flex flex-col items-center justify-center gap-y-1 ${activeTab === 'NEWS' ? 'bg-[#F0F0F1]' : ''}`}
      >
        <NextImage src={IconNews} alt="新聞" />
        <p>新聞</p>
      </NextLink>
      <NextLink
        href={tabs.CREATIVITY}
        className={`flex flex-col items-center justify-center gap-y-1 ${activeTab === 'CREATIVITY' ? 'bg-[#F0F0F1]' : ''}`}
      >
        <NextImage src={IconCreatity} alt="二創" />
        <p>二創</p>
      </NextLink>
      <button className="flex flex-col items-center justify-center gap-y-1 text-[#FF5A36]">
        {/* TODO: show submission modal after clicking */}
        <NextImage src={IconSubmission} alt="投稿" />
        <p>我要投稿</p>
      </button>
    </nav>
  )
}
