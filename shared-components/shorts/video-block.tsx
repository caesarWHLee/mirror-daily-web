'use client'

import type { Shorts } from '@/types/common'
import { useState } from 'react'
import ShortsItem from './item'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import { useAppSelector } from '@/redux/hooks'
import { selectIsModalOpened } from '@/redux/shorts-upload/selector'
import { updateMetadataOnClientSide } from '@/utils/common'
import InfiniteScrollList from '@readr-media/react-infinite-scroll-list'

type Props = {
  items: Shorts[]
  shouldChangePathOnSlideChange?: boolean
  fetchMore(page: number): Promise<Shorts[]>
}

export default function VideoBlock({
  items,
  shouldChangePathOnSlideChange,
  fetchMore,
}: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const isModalOpened = useAppSelector(selectIsModalOpened)

  if (items.length === 1) {
    const item = items?.[0] as Shorts
    return (
      <div className="shorts-swiper-in-shorts-page">
        <ShortsItem
          {...item}
          readyToLoad={true}
          isActive={!isModalOpened}
          onPause={() => setActiveIndex(null)}
          onPlay={() => setActiveIndex(0)}
        />
      </div>
    )
  }

  return (
    <InfiniteScrollList
      initialList={items}
      pageSize={10}
      isAutoFetch={true}
      fetchListInPage={fetchMore}
    >
      {(shortsItems) => {
        return (
          <Swiper
            slidesPerView={'auto'}
            grabCursor={true}
            direction="vertical"
            modules={[Keyboard, Mousewheel]}
            mousewheel={true}
            keyboard={true}
            onInit={(swiper) => {
              setActiveIndex(swiper.realIndex)
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex)
              if (shouldChangePathOnSlideChange) {
                const url = items[swiper.realIndex]?.link
                window.history.replaceState(null, '', url)

                updateMetadataOnClientSide({
                  title: items[swiper.realIndex]?.title,
                  url,
                })
              }
            }}
            className="shorts-swiper-in-shorts-page"
            breakpoints={{
              720: {
                spaceBetween: 60,
              },
            }}
          >
            {shortsItems.map((item, index) => (
              <SwiperSlide key={index}>
                <ShortsItem
                  {...item}
                  readyToLoad={
                    activeIndex !== null &&
                    (index === activeIndex ||
                      index === activeIndex + 1 ||
                      index === activeIndex - 1)
                  }
                  isActive={activeIndex === index && !isModalOpened}
                  onPause={() => setActiveIndex(null)}
                  onPlay={() => setActiveIndex(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      }}
    </InfiniteScrollList>
  )
}
