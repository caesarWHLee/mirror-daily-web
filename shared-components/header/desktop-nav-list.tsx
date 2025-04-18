'use client'
import type { HeaderData } from '@/types/common'
import { useEffect, useState } from 'react'
import { getCategoryPageUrl, getSectionPageUrl } from '@/utils/site-urls'
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
        {data.filter(isSectionItem).map((section) => {
          const { name, slug } = section
          const color = section.color
          const link = getSectionPageUrl(slug)
          const categories = section.categories
          const isShortsCategory = slug === FIXED_KEY_FOR_SECTION_SHORTS
          const shouldShowCategories =
            activeItem === slug && categories.length > 0

          return (
            <li
              key={slug}
              className="relative whitespace-nowrap border-r border-[#7F8493] px-[13.5px] first:pl-0 last:border-r-0 last:pr-0"
              onMouseEnter={() => setActiveItem(slug)}
              onFocus={() => setActiveItem(slug)}
            >
              <a href={link} style={{ color }}>
                {name}
              </a>
              <div
                className={`absolute left-0 top-full z-over-flashnews flex text-base font-medium leading-[19px] text-[#CCCED4] ${shouldShowCategories ? 'w-auto' : 'size-px overflow-hidden'}`}
                onMouseEnter={() => setActiveItem(slug)}
              >
                <ul
                  className={
                    'mt-3 flex gap-x-[10px] rounded bg-[rgba(6,6,6,0.8)] px-3 py-1'
                  }
                >
                  {categories.map((category) => {
                    const { name, slug } = category

                    return (
                      <li
                        key={slug}
                        className="whitespace-nowrap focus-within:text-[color:var(--active-section-color)] hover-or-active:text-[color:var(--active-section-color)]"
                      >
                        <a href={getCategoryPageUrl(slug, isShortsCategory)}>
                          {name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
