import NextImage from 'next/image'
import NextLink from 'next/link'
import { SOCIAL_LINKS } from '@/constants/misc'
import MobileToggleAndNav from './mobile-toggle-and-nav'
import DesktopNavList from './desktop-nav-list'
import FlashNewsList from './flash-news-list'
import IconSearch from '@/public/icons/search.svg'
import IconLogo from '@/public/icons/logos/mirror-daily.svg'
import IconFacebook from '@/public/icons/logos/facebook-black.svg'
import IconInstagram from '@/public/icons/logos/instagram-black.svg'
import IconThreads from '@/public/icons/logos/threads-black.svg'
import IconYouTube from '@/public/icons/logos/youtube-black.svg'
import IconLine from '@/public/icons/logos/line-black.svg'
import type { HeaderData } from '@/types/common'
import type { FlashNews } from '@/types/homepage'
import { getTagPageUrl } from '@/utils/site-urls'

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

const iconSizes: Record<(typeof ExtendedSocialLinks)[number]['name'], number> =
  {
    Facebook: 24,
    Threads: 22,
    Instagram: 24,
    YouTube: 32,
    LINE: 24,
  }

export default function UiHeader({
  data,
  flashNews,
}: {
  data: HeaderData
  flashNews: FlashNews[]
}) {
  return (
    <header className="flex h-[150px] w-full shrink-0 flex-col items-center md:h-[134px] lg:h-[202px]">
      <div className="flex h-[68px] w-full justify-center bg-mirror-blue-700 md:h-[95px] lg:h-[80px]">
        <div className="flex w-full max-w-screen-sm pl-4 pr-6 md:max-w-screen-md md:pl-5 lg:max-w-screen-lg lg:px-9">
          <NextLink
            prefetch={false}
            href="/"
            className="relative mt-4 h-[42px] w-[150px] md:mt-5 md:h-[55.74px] md:w-[200px] lg:mt-3 lg:h-[56px] lg:w-[200px] lg:shrink-0"
          >
            <NextImage
              src={IconLogo}
              fill={true}
              alt="Logo"
              className="aspect-[150/42] md:aspect-auto"
            />
          </NextLink>
          <div className="ml-auto mt-[23px] flex shrink-0 md:mt-10 md:gap-x-[5px] lg:mt-8 lg:gap-x-[7px]">
            {/* TODO: form submit handler, expanded search bar on mobile device */}
            <input
              type="text"
              name="search"
              placeholder="請輸入關鍵字"
              className="hidden h-5 w-[104px] rounded-[7px] border-[0.5px] border-[#000928] bg-[#F6F6FB] px-4 py-px text-xs font-normal leading-normal outline-none placeholder:text-[#7F8493] md:inline-block lg:h-6 lg:w-[180px] lg:px-[13px] lg:text-sm"
            />
            <button className="relative inline-block h-[22.15px] w-[22.29px] md:h-5 md:w-[18.57px] lg:mt-[3px] lg:h-[16.7px] lg:w-[14.86px]">
              <NextImage src={IconSearch} fill={true} alt="搜尋" />
            </button>
          </div>
          <button className="ml-[11.71px] mt-5 hidden h-7 shrink-0 rounded-[29px] bg-[#FF5457] px-[10px] py-[3px] text-[15px] font-normal leading-none text-white md:ml-[18px] md:mt-10 md:h-5 md:px-[6px] md:py-[0.5px] md:text-[13px] lg:ml-[11.14px] lg:mt-[32px] lg:inline-block lg:h-6 lg:px-[10px] lg:py-px lg:text-[15px]">
            {/* TODO: click handler */}
            我要爆料
          </button>
          <MobileToggleAndNav data={data} />
        </div>
      </div>
      <hr className="h-px w-full bg-[#ccced4] md:hidden" />
      <div className="flex w-full max-w-screen-sm grow pb-[3px] pl-[17px] pr-[23px] pt-4 md:max-w-screen-md md:pb-[9px] md:pl-5 md:pr-6 md:pt-2 lg:max-w-screen-lg lg:flex-col lg:px-9 lg:pb-[17px] lg:pt-[13px]">
        <div className="flex">
          <div className="hidden gap-x-4 overflow-hidden text-xl font-bold leading-tight text-[#2B2B2B] lg:flex lg:grow">
            {data.popularTags.map((item) => {
              return (
                <a
                  key={item.id}
                  href={getTagPageUrl(item.choices.slug)}
                  className=""
                >
                  {item.choices.name}
                </a>
              )
            })}
          </div>
          <div className="hidden lg:flex lg:shrink-0 lg:grow-0 lg:gap-x-2">
            {ExtendedSocialLinks.map(({ name, href, icon }) => {
              const width = iconSizes[name] || 24
              return (
                <a key={name} href={href} target="_blank">
                  <NextImage src={icon} alt={name} width={width} height={24} />
                </a>
              )
            })}
          </div>
        </div>
        <div className="mt-[14px] hidden lg:flex">
          <DesktopNavList sections={data.sections} />
        </div>
        <div className="flex w-full grow items-start text-sm lg:mt-[9px] lg:text-base">
          <p className="mr-[18px] mt-1 shrink-0 font-bold leading-none text-[#FF5457] md:mr-[7px] lg:mr-3">
            快訊
          </p>
          <FlashNewsList items={flashNews} />
        </div>
      </div>
    </header>
  )
}
