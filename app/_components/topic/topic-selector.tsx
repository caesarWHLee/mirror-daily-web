'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { getTailwindConfig } from '@/utils/tailwind'
import { getTopicListingPage } from '@/utils/site-urls'
import { isServer } from '@/utils/common'

function getWidthOfText(text: string, styles: unknown): number {
  const isObjectJSON = function (obj: unknown): obj is CSSStyleDeclaration {
    return !!obj && typeof obj === 'object' && !Array.isArray(obj)
  }

  const element = document.createElement('div')

  if (isObjectJSON(styles)) {
    const styleKeys = Object.keys(styles)
    for (let i = 0, n = styleKeys.length; i < n; ++i) {
      const key = styleKeys[i]! as keyof CSSStyleDeclaration
      // @ts-expect-error: length, parentRule
      element.style[key] = styles[key]
    }
  }
  element.style.display = 'inline-block'
  element.innerHTML = text
  document.body.appendChild(element)
  const width = element.offsetWidth
  document.body.removeChild(element)
  return width
}

function getMaxmimumDisplayTopics(
  topics: string[],
  areaWidth: number,
  itemGap: number,
  style: Partial<CSSStyleDeclaration>
): string[] {
  const amount = topics.length

  let i = 1
  for (; i <= amount; i++) {
    const text = topics.slice(0, i).join('')
    const width = getWidthOfText(text, style) + (i - 1) * itemGap

    if (width > areaWidth) {
      i -= 1
      break
    }
  }
  return topics.slice(0, i)
}

type Props = {
  topics: string[]
  activeTopic: string
  setTopic(value: string): void
}

export default function TopicSelector({
  topics,
  activeTopic,
  setTopic,
}: Props) {
  const config = getTailwindConfig()
  const tabletLowerBound = Number(config.theme.screens.md.split('px')[0])
  const desktopLowerBound = Number(config.theme.screens.lg.split('px')[0])

  const itemGap = useRef(0)
  const [areaWidth, setAreaWidth] = useState(0)
  const customStyle = useRef<Partial<CSSStyleDeclaration>>({})

  const { width } = useWindowSize()

  const displayTopics = useMemo(
    () =>
      isServer()
        ? []
        : getMaxmimumDisplayTopics(
            topics,
            areaWidth,
            itemGap.current,
            customStyle.current
          ),
    [topics, areaWidth]
  )

  useEffect(() => {
    let areaWidth: number
    switch (true) {
      case width >= desktopLowerBound: {
        itemGap.current = 20
        areaWidth = 760 - 36 - itemGap.current
        customStyle.current = {
          fontSize: '18px',
          fontWeight: '500',
        }
        break
      }
      case width >= tabletLowerBound: {
        itemGap.current = 12
        areaWidth = 680 - 39 - itemGap.current
        customStyle.current = {
          fontSize: '18px',
          fontWeight: '500',
        }
        break
      }
      default: {
        itemGap.current = 12
        areaWidth = Math.min(width - 23 * 2, 329) - 32 - itemGap.current
        customStyle.current = {
          fontSize: '16px',
          fontWeight: '500',
        }
        break
      }
    }
    setAreaWidth(areaWidth)
  }, [desktopLowerBound, tabletLowerBound, width, topics])

  // change to first item if active item doesn't exist in valid item list
  useEffect(() => {
    if (displayTopics.length > 0 && !displayTopics.includes(activeTopic)) {
      setTopic(displayTopics[0]!)
    }
  }, [activeTopic, displayTopics, setTopic])

  return (
    <div className="flex w-full flex-row items-center gap-x-2 text-lg font-bold leading-none md:gap-x-3 lg:max-w-[846px] lg:gap-x-5 lg:text-xl lg:font-normal">
      {displayTopics.map((topic) => {
        const isActive = activeTopic === topic
        return (
          <button
            key={topic}
            onClick={() => setTopic(topic)}
            className={`${
              isActive
                ? 'text-[#896fcc] lg:bg-[#674ab1] lg:text-white'
                : 'text-[#68666d] lg:bg-[#ccced4]'
            } whitespace-nowrap hover-or-active:text-[#896FCC] lg:rounded-lg lg:px-2 lg:py-1 lg:hover-or-active:bg-mirror-blue-700 lg:hover-or-active:text-white`}
          >
            {topic}
          </button>
        )
      })}
      <a
        href={getTopicListingPage()}
        target="_blank"
        className="whitespace-nowrap font-medium text-[#000928] hover-or-active:text-[#575D71]"
      >
        更多
      </a>
    </div>
  )
}
