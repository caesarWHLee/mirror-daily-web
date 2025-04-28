'use client'

import type { ReactNode } from 'react'
import CustomImage from '@/shared-components/custom-image'
import type { LatestPost } from '@/types/common'

type Props = Pick<
  LatestPost,
  'sectionName' | 'sectionColor' | 'postName' | 'heroImage' | 'link'
>

export default function LatestNewsCard({
  sectionName,
  sectionColor,
  postName,
  heroImage,
  link,
}: Props): ReactNode {
  return (
    <div className="flex w-full max-w-[330px] flex-col md:w-[200px] lg:w-[255px] [&:nth-last-child(2)]:mr-auto">
      <span
        className={`mb-1 inline-block h-1 w-3 ${!sectionName ? 'invisible' : ''}`}
        style={{ backgroundColor: sectionColor }}
      ></span>
      <p
        className="mb-[7px] h-6 text-base font-black leading-normal md:mb-[11px]"
        style={{ color: sectionColor }}
      >
        {sectionName}
      </p>
      <a href={link} target="_blank" className="group/card">
        <div className="relative aspect-[330/220] w-full overflow-hidden rounded group-hover/card:*:scale-110 group-active/card:*:scale-110 md:aspect-auto md:h-[134px] lg:h-[170px]">
          <CustomImage
            images={heroImage.resized}
            imagesWebP={heroImage.resizedWebp}
            objectFit="cover"
            alt="最新文章首圖"
            rwd={{
              mobile: '100%',
              tablet: '100%',
              default: '100%',
            }}
          />
        </div>
        <p className="mt-2 line-clamp-2 h-[48px] text-ellipsis text-base font-normal leading-normal text-[#000928] group-hover/card:text-[#575D71] group-active/card:text-[#575D71] md:mt-3 md:line-clamp-3 md:h-[69px]">
          {postName}
        </p>
      </a>
    </div>
  )
}
