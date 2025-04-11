'use client'
import type { HeaderData } from '@/types/common'
import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { getCategoryPageUrl, getSectionPageUrl } from '@/utils/site-urls'
import { FIXED_KEY_FOR_SECTION_SHORTS } from '@/constants/config'

type Props = {
  data: HeaderData
}

export default function DesktopNavList({ data }: Props) {
  const [activeItem, setActiveItem] = useState('')
  const section = data.sections.find((section) => section.slug === activeItem)

  useEffect(() => {
    if (section) {
      document.documentElement.style.setProperty(
        '--active-section-color',
        section.color
      )
    }
  }, [section])

  return (
    <nav
      className="relative flex w-full flex-col"
      onMouseLeave={() => setActiveItem('')}
      onBlur={() => setActiveItem('')}
    >
      <ul className="flex h-[28px] w-full items-center text-base font-bold tracking-[0.5px]">
        {data.sections.map((section) => {
          const { name, slug } = section
          const shouldShowCategories = activeItem === slug
          const color = section.color
          const link = getSectionPageUrl(slug)
          const categories = section.categories
          const isShortsCategory = slug === FIXED_KEY_FOR_SECTION_SHORTS

          return (
            <li
              key={slug}
              className="whitespace-nowrap border-r border-[#B2B5BE] px-[5.5px] leading-none first:pl-0 first:pr-[5.5px] last:border-r-0 last:pl-[5.5px] last:pr-0"
              onMouseEnter={() => setActiveItem(slug)}
              onFocus={() => setActiveItem(slug)}
            >
              <NextLink prefetch={false} href={link} style={{ color }}>
                {name}
              </NextLink>
              <ul
                className={`absolute bottom-0 left-0 flex gap-x-4 text-sm font-bold leading-normal text-[#7F8493] ${shouldShowCategories ? 'w-auto' : 'size-px overflow-hidden'}`}
              >
                {categories.map((category) => {
                  const { name, slug } = category

                  return (
                    <li
                      key={slug}
                      className="whitespace-nowrap focus-within:text-[color:var(--active-section-color)] hover-or-active:text-[color:var(--active-section-color)]"
                    >
                      <NextLink
                        prefetch={false}
                        href={getCategoryPageUrl(slug, isShortsCategory)}
                      >
                        {name}
                      </NextLink>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
