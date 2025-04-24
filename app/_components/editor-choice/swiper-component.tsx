'use client'

import CustomImage from '@/shared-components/custom-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Keyboard } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import type { EditorChoice } from '@/types/homepage'

type Props = {
  list: EditorChoice[]
}

export default function SwiperComponent({ list }: Props) {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Keyboard]}
      pagination={{
        clickable: true,
        el: '.custom-swiper-pagination',
        bulletClass: 'homepage-editor-choice-bullet',
        bulletActiveClass: 'homepage-editor-choice-bullet-active',
        horizontalClass: 'homepage-editor-choice-pagination-horizontal',
        renderBullet(index, className) {
          return `<span class="${className}">${index + 1}</span>`
        },
      }}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
      }}
      keyboard={true}
      className="relative w-full md:rounded lg:rounded-none"
    >
      {list.map((item) => {
        const { postId, postName, heroImage, link } = item
        return (
          <SwiperSlide
            key={postId}
            className="relative w-full max-w-screen-sm md:max-w-none"
          >
            <a href={link} target="_blank" className="group/slide w-full">
              <div className="relative aspect-[330/200] w-full overflow-hidden md:aspect-[680/410] lg:aspect-[1128/655]">
                <CustomImage
                  images={heroImage.resized}
                  alt="編輯精選首圖"
                  className="w-full group-hover/slide:scale-110 md:aspect-[680/379] md:group-hover/slide:scale-100 md:group-active/slide:scale-100 lg:aspect-[1127/628]"
                />
                <div className="absolute inset-0 md:bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_6.69%,rgba(110,110,110,0.24)_17.20%,rgba(217,217,217,0.00)_20.52%,rgba(255,255,255,0)_23.25%,rgba(255,255,255,0)_74.52%,rgba(217,217,217,0.00)_74.52%,rgba(43,43,43,0.64)_83.44%,rgba(0,0,0,0.80)_96.18%)]" />
              </div>
              <p className="mt-5 line-clamp-3 h-[84px] text-xl font-bold leading-normal text-[#000928] group-hover/slide:text-[#575D71] group-active/slide:text-[#575D71] md:absolute md:bottom-3 md:left-5 md:m-0 md:line-clamp-2 md:h-auto md:max-h-[58px] md:w-[440px] md:text-white md:group-hover/slide:text-white md:group-hover/slide:underline md:group-active/slide:text-white md:group-active/slide:underline lg:bottom-7 lg:left-7 lg:max-h-[69px] lg:w-[654px] lg:text-2xl lg:font-black">
                {postName}
              </p>
            </a>
          </SwiperSlide>
        )
      })}
      <div className="custom-swiper-pagination" />
    </Swiper>
  )
}
