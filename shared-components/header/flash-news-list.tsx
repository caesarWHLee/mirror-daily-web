'use client'
import type { FlashNews } from '@/types/homepage'
import { useEffect, useState } from 'react'
import { SECOND } from '@/constants/time-unit'

const DISPLAY_TIMING = SECOND * 3

type Props = {
  items: FlashNews[]
}

export default function FlashNewsList({ items }: Props) {
  const amountOfItems = items.length

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const task = setInterval(
      () => setCurrentIndex((i) => (i + 1) % amountOfItems),
      DISPLAY_TIMING
    )

    return () => {
      clearInterval(task)
    }
  }, [amountOfItems])

  const baseStyles =
    'absolute left-0 top-0 h-full line-clamp-3 [transition:transform_0.7s,opacity_0.25s_0.25s] md:line-clamp-1'

  const getClassesByIndex = (itemIndex: number, activeIndex: number) => {
    if (activeIndex === itemIndex) {
      return 'translate-y-0 opacity-100'
    } else if ((activeIndex + 1) % amountOfItems === itemIndex) {
      return 'translate-y-full opacity-0'
    } else {
      return '-translate-y-full opacity-0'
    }
  }

  return (
    <div className="relative h-[60px] grow overflow-hidden font-normal leading-normal text-[#FF5457] md:h-5 lg:h-[23px] lg:font-medium">
      {items.map((item, index) => {
        const { postName, link } = item

        return (
          <a
            key={index}
            href={link}
            className={`${baseStyles} ${getClassesByIndex(index, currentIndex)}`}
          >
            {postName}
          </a>
        )
      })}
    </div>
  )
}
