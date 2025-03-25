import { Fragment } from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import IconHomepage from '@/public/icons/homepage.svg'
import IconNews from '@/public/icons/shorts/news.svg'
import IconCreatity from '@/public/icons/shorts/creativity.svg'
import {
  CONTACT_LINKS,
  PAGE_LINKS,
  SOCIAL_LINKS,
  SITE_LINKS,
} from '@/constants/misc'
import IconFacebook from '@/public/icons/logos/facebook-gray.svg'
import IconInstagram from '@/public/icons/logos/instagram-gray.svg'
import IconThreads from '@/public/icons/logos/threads-gray.svg'
import IconYouTube from '@/public/icons/logos/youtube-gray.svg'
import IconLine from '@/public/icons/logos/line-gray.svg'
import IconMirrorMedia from '@/public/icons/logos/mirror-media-shorts.svg'
import IconMirrorFiction from '@/public/icons/logos/mirror-fiction-shorts.png'
import IconMirrorNews from '@/public/icons/logos/mirror-news-shorts.svg'
import { SHORTS_TYPE } from '@/types/common'

const ExtendedSocialLinks = [
  {
    ...SOCIAL_LINKS[0],
    icon: IconFacebook,
  },
  {
    ...SOCIAL_LINKS[1],
    icon: IconInstagram,
  },
  {
    ...SOCIAL_LINKS[2],
    icon: IconThreads,
  },
  {
    ...SOCIAL_LINKS[3],
    icon: IconYouTube,
  },
  {
    ...SOCIAL_LINKS[4],
    icon: IconLine,
  },
] as const

type Props = {
  tabs: Record<SHORTS_TYPE, string>
  activeTab: SHORTS_TYPE
}

export default function Navbar({ tabs, activeTab }: Props) {
  return (
    <div className="hidden shrink-0 flex-col md:mr-[49px] md:flex lg:mr-[200px]">
      <nav className="grid w-[80px] shrink-0 grid-rows-[80px_33px_80px_80px] place-items-center text-sm font-normal leading-normal text-black *:rounded-lg [&>*:active]:bg-[#F0F0F1] [&>*:hover]:bg-[#F6F6FB]">
        <NextLink
          prefetch={false}
          href="/"
          className="flex size-full flex-col items-center justify-center gap-y-2"
        >
          <NextImage src={IconHomepage} alt="首頁" />
          <p>首頁</p>
        </NextLink>
        <hr className="my-4 h-px w-[54px] bg-[#000000]" />
        <NextLink
          prefetch={false}
          href={tabs.news}
          className={`flex size-full flex-col items-center justify-center gap-y-1 ${
            activeTab === SHORTS_TYPE.NEWS ? 'bg-[#F0F0F1]' : ''
          }`}
        >
          <NextImage src={IconNews} alt="新聞" />
          <p>新聞</p>
        </NextLink>
        <NextLink
          prefetch={false}
          href={tabs.creativity}
          className={`flex size-full flex-col items-center justify-center gap-y-1 ${
            activeTab === SHORTS_TYPE.DERIVATIVE ? 'bg-[#F0F0F1]' : ''
          }`}
        >
          <NextImage src={IconCreatity} alt="投稿" />
          <p>投稿</p>
        </NextLink>
      </nav>
      <section className="mt-auto shrink-0 text-sm font-normal leading-[20px] tracking-[0.5px]">
        {CONTACT_LINKS.map(({ name, href, text }) => (
          <Fragment key={name}>
            <p className="text-[#212944]">{name}</p>
            <a href={href} className="text-[#575D71]">
              {text}
            </a>
          </Fragment>
        ))}
      </section>
      <section className="mt-4 shrink-0 text-sm font-normal leading-[20px] text-[#575D71]">
        {PAGE_LINKS.map(({ name, href, isExternal }) => (
          <NextLink
            prefetch={false}
            className="block"
            key={name}
            href={href}
            target={isExternal ? '_blank' : '_self'}
          >
            {name}
          </NextLink>
        ))}
      </section>
      <section className="mt-6 flex shrink-0 flex-row items-center gap-x-3">
        {ExtendedSocialLinks.map(({ name, href, icon }) => (
          <a key={name} href={href} target="_blank">
            <NextImage src={icon} alt={name} />
          </a>
        ))}
      </section>
      <section className="mb-[52px] mt-5 flex shrink-0 gap-x-3">
        <a
          target="_blank"
          href={SITE_LINKS[0].href}
          className="relative inline-block h-7 w-[66px]"
        >
          <NextImage
            src={IconMirrorMedia}
            fill={true}
            alt={SITE_LINKS[0].name}
          />
        </a>
        <a
          target="_blank"
          href={SITE_LINKS[1].href}
          className="relative mt-[9px] inline-block h-4 w-[66px]"
        >
          <NextImage
            src={IconMirrorFiction}
            fill={true}
            alt={SITE_LINKS[1].name}
          />
        </a>
        <a
          target="_blank"
          href={SITE_LINKS[2].href}
          className="relative mt-[9px] inline-block h-4 w-[52px]"
        >
          <NextImage
            src={IconMirrorNews}
            fill={true}
            alt={SITE_LINKS[2].name}
          />
        </a>
      </section>
    </div>
  )
}
