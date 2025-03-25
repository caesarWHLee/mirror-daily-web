'use client'

import { twMerge } from 'tailwind-merge'
import NextImage from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ShortsItem from './item'
import type { SwiperRef } from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Keyboard, Mousewheel } from 'swiper/modules'
import IconPrev from '@/public/icons/slide-prev.svg'
import IconNext from '@/public/icons/slide-next.svg'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import type { Shorts } from '@/types/common'
import { useIntersectionObserver } from 'usehooks-ts'

type Props = {
  items: Shorts[]
  customClass?: string
}

export default function ShortsList({ items, customClass = '' }: Props) {
  const swiperRef = useRef<SwiperRef>(null)
  const slideNextRef = useRef<HTMLButtonElement>(null)
  const slidePrevRef = useRef<HTMLButtonElement>(null)
  const [swiperIsBeginning, setSwiperIsBeginning] = useState(true)
  const [swiperIsEnd, setSwiperIsEnd] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { isIntersecting, ref } = useIntersectionObserver({ threshold: 0.75 })
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current === false && swiperRef.current) {
      setActiveIndex(swiperRef.current?.swiper.realIndex)
      initialized.current = true
    }
  }, [isIntersecting])

  return (
    <div
      ref={ref}
      className={twMerge(
        'relative w-screen max-w-[1440px] overflow-x-scroll sm:translate-x-[calc(theme(screens.sm)/2-50%)] md:translate-x-[calc(theme(screens.md)/2-50%)] lg:translate-x-[calc(theme(screens.lg)/2-50%)]',
        customClass
      )}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={'auto'}
        modules={[FreeMode, Navigation, Keyboard, Mousewheel]}
        keyboard={true}
        mousewheel={true}
        grabCursor={true}
        breakpoints={{
          320: {
            spaceBetween: 36,
            freeMode: {
              enabled: true,
              sticky: true,
            },
          },
          1200: {
            spaceBetween: 36,
            freeMode: false,
          },
        }}
        navigation={{
          nextEl: slideNextRef.current,
          prevEl: slidePrevRef.current,
        }}
        onSlideChange={(swiper) => {
          setSwiperIsBeginning(swiper.isBeginning)
          setSwiperIsEnd(swiper.isEnd)
          setActiveIndex(swiper.realIndex)
        }}
        className="shorts-swiper-in-homepage"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <ShortsItem
              {...item}
              key={index}
              isActive={isIntersecting && activeIndex === index}
              onPlay={() => {
                swiperRef.current?.swiper.slideTo(index)
                setActiveIndex(index)
              }}
              onPause={() => {
                if (activeIndex === index && isIntersecting)
                  setActiveIndex(null)
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`shorts-swiper-button right-4 ${swiperIsEnd ? 'hidden' : ''}`}
        ref={slideNextRef}
      >
        <NextImage src={IconNext} width={40} height={40} alt="下一筆" />
      </button>
      <button
        className={`shorts-swiper-button left-4 ${swiperIsBeginning ? 'hidden' : ''}`}
        ref={slidePrevRef}
      >
        <NextImage src={IconPrev} width={40} height={40} alt="上一筆" />
      </button>
    </div>
  )
}
