'use client'
import type { HeaderData, HeaderSection } from '@/types/common'
import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import {
  getCategoryPageUrl,
  getSectionPageUrl,
  getTopicPageUrl,
} from '@/utils/site-urls'
import { isSectionItem } from '@/utils/common'
import { FIXED_KEY_FOR_SECTION_SHORTS } from '@/constants/config'

type Props = {
  data: HeaderData[]
}

export default function DesktopNavList({ data }: Props) {
  const [activeItem, setActiveItem] = useState('')
  const section = data
    .filter(isSectionItem)
    .find((section) => section.slug === activeItem)

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
        {data.map((section) => {
          const { name, slug } = section
          let shouldShowCategories: boolean
          let color: string
          let link: string
          let categories: HeaderSection['categories'] = []
          let isShortsCategory: boolean

          if (isSectionItem(section)) {
            shouldShowCategories = activeItem === slug
            color = section.color
            link = getSectionPageUrl(slug)
            categories = section.categories
            isShortsCategory = slug === FIXED_KEY_FOR_SECTION_SHORTS
          } else {
            shouldShowCategories = false
            color = '#2b2b2b'
            link = getTopicPageUrl(slug)
            isShortsCategory = false
          }

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
