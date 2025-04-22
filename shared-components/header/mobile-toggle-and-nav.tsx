'use client'

import type { HeaderData } from '@/types/common'
import NextImage from 'next/image'
import { useState } from 'react'
import { CONTACT_LINKS, SOCIAL_LINKS } from '@/constants/misc'
import MobileNavList from './mobile-nav-list'
import IconHamburger from '@/public/icons/hamburger.svg'
import IconClose from '@/public/icons/sidebar-close.svg'
import IconFacebook from '@/public/icons/logos/facebook-white.svg'
import IconInstagram from '@/public/icons/logos/instagram-white.svg'
import IconThreads from '@/public/icons/logos/threads-white.svg'
import IconYouTube from '@/public/icons/logos/youtube-white.svg'
import IconLine from '@/public/icons/logos/line-white.svg'
import { getTopicPageUrl } from '@/utils/site-urls'
import { isSectionItem } from '@/utils/common'

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
  data: HeaderData[]
}

export default function MobileToggleAndNav({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="ml-3 mt-[22px] max-w-screen-sm shrink-0 md:ml-[14.43px] md:mt-10 lg:hidden">
      <button
        className="relative flex h-6 w-[26px] md:size-5"
        onClick={toggleOpen}
      >
        <NextImage src={IconHamburger} fill={true} alt="導覽開關" />
      </button>
      {/* #id is used by layout style */}
      <input
        id="mobile-menu-toggle"
        type="checkbox"
        className="peer hidden"
        checked={isOpen}
        onChange={() => {
          /* prevent warning */
        }}
      />
      {isOpen && (
        <div className="fixed left-0 top-0 z-mobile-nav hidden h-screen w-screen flex-col bg-[#000928] peer-checked:flex md:bg-[rgba(12,12,12,0.7)] peer-checked:lg:hidden">
          <div className="relative flex h-full flex-col bg-[#2B2B2B] px-[46px] pb-[18px] pt-6 md:w-[375px]">
            <a
              className="inline-block self-start rounded-xl bg-[#FF5457] px-4 py-1 text-base font-bold text-white"
              href={CONTACT_LINKS[1]?.href}
            >
              我要爆料
            </a>
            <button
              className="absolute right-5 top-8 inline-block"
              onClick={toggleOpen}
            >
              <NextImage
                src={IconClose}
                alt="關閉導覽"
                width={20}
                height={20}
              />
            </button>
            <div className="mb-4 mt-[34px] flex w-full max-w-[calc(375px-46px*2)] flex-wrap gap-x-6 gap-y-4 self-center text-xl font-medium leading-[24px] text-[#E5E6E9]">
              {data
                .filter((item) => !isSectionItem(item))
                .map((item) => {
                  return (
                    <a
                      key={item.slug}
                      href={getTopicPageUrl(item.slug)}
                      className="inline-block max-w-full truncate"
                    >
                      {item.name}
                    </a>
                  )
                })}
            </div>
            <MobileNavList data={data} />
            <div className="mt-5 flex shrink-0 items-center gap-x-4 self-center">
              {ExtendedSocialLinks.map(({ name, href, icon }) => (
                <a key={name} href={href} target="_blank">
                  <NextImage src={icon} alt={name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
