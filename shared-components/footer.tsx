import NextImage from 'next/image'
import {
  SOCIAL_LINKS,
  PAGE_LINKS,
  CONTACT_LINKS,
  SITE_LINKS,
} from '@/constants/misc'
import IconMirrorDaily from '@/public/icons/logos/mirror-daily.svg'
import IconFacebook from '@/public/icons/logos/facebook-white.svg'
import IconInstagram from '@/public/icons/logos/instagram-white.svg'
import IconThreads from '@/public/icons/logos/threads-white.svg'
import IconYouTube from '@/public/icons/logos/youtube-white.svg'
import IconLine from '@/public/icons/logos/line-white.svg'
import { Fragment, type ReactElement } from 'react'
import IconMirrorMedia from '@/public/icons/logos/mirror-media-white.svg'
import IconMirrorFiction from '@/public/icons/logos/mirror-fiction-white.svg'
import IconMirrorNews from '@/public/icons/logos/mirror-news-white.svg'

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

export default function Footer(): ReactElement {
  return (
    <footer className="flex w-full flex-col bg-mirror-blue-800">
      <div className="flex w-full max-w-screen-lg flex-col items-center self-center lg:flex-row">
        <a href="/" className="mt-5 md:mt-7 lg:ml-5 lg:mt-0">
          <NextImage
            src={IconMirrorDaily}
            alt="Mirror Daily"
            width={120}
            height={32}
          />
        </a>
        <section className="mb-9 mt-4 tracking-[0.5px] md:mb-12 md:mt-[14px] lg:my-0 lg:ml-8 lg:mr-auto">
          <div className="text-center text-sm font-normal leading-[20px] lg:space-x-2">
            {CONTACT_LINKS.map(({ name, href, text }) => (
              <Fragment key={name}>
                <p className="text-[#a6a6a6] lg:inline-block">{name}</p>
                <a href={href} className="text-white lg:inline-block">
                  {text}
                </a>
              </Fragment>
            ))}
          </div>
          <div className="hidden flex-row items-center gap-x-3 lg:mt-2 lg:flex">
            {ExtendedSocialLinks.map(({ name, href, icon }) => (
              <a key={name} href={href} target="_blank">
                <NextImage src={icon} alt={name} />
              </a>
            ))}
          </div>
        </section>
        <section className="flex shrink-0 gap-x-[18px]">
          <a target="_blank" href={SITE_LINKS[0].href}>
            <NextImage
              src={IconMirrorMedia}
              width={57.5}
              height={24.4}
              alt={SITE_LINKS[0].name}
            />
          </a>
          <a target="_blank" href={SITE_LINKS[1].href}>
            <NextImage
              src={IconMirrorFiction}
              width={56}
              height={24}
              alt={SITE_LINKS[1].name}
            />
          </a>
          <a target="_blank" href={SITE_LINKS[2].href}>
            <NextImage
              src={IconMirrorNews}
              width={76}
              height={24}
              alt={SITE_LINKS[2].name}
            />
          </a>
        </section>
        <hr className="mb-4 mt-7 block h-px w-[200px] bg-[#a6a6a6] lg:ml-6 lg:h-[76px] lg:w-px lg:bg-white" />
        <section
          className={`relative text-center text-sm font-normal leading-[20px] text-white lg:my-[38px] lg:ml-[10.5px] lg:mr-[27.5px]`}
        >
          {PAGE_LINKS.map(({ name, href, isExternal }) => (
            <a
              className="block"
              key={name}
              href={href}
              target={isExternal ? '_blank' : '_self'}
            >
              {name}
            </a>
          ))}
        </section>
        <section className="my-5 flex flex-row items-center gap-x-4 md:mb-7 md:mt-4 lg:hidden">
          {ExtendedSocialLinks.map(({ name, href, icon }) => (
            <a key={name} href={href} target="_blank">
              <NextImage src={icon} alt={name} />
            </a>
          ))}
        </section>
      </div>
    </footer>
  )
}
