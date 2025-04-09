'use client'
import type { ReactNode } from 'react'
import CustomImage from '@/shared-components/custom-image'
import NextLink from 'next/link'
import type { PickupItemInTopNewsSection } from '@/types/homepage'

export default function HighlightItem({
  heroImage,
  postName,
  link,
}: PickupItemInTopNewsSection): ReactNode {
  return (
    <NextLink
      prefetch={false}
      className="group/highlight-item w-full shrink-0 md:w-[312px] lg:w-[560px]"
      href={link}
      target="_blank"
    >
      <div className="aspect-[330/200] overflow-hidden rounded group-hover/highlight-item:*:scale-110 group-active/highlight-item:*:scale-110 md:aspect-auto md:h-[187px] lg:h-[336px]">
        <CustomImage
          images={heroImage.resized}
          imagesWebP={heroImage.resizedWebp}
          alt="文章圖片"
          objectFit="cover"
          rwd={{
            mobile: '100%',
            tablet: '100%',
            default: '100%',
          }}
        />
      </div>
      <p className="mt-4 line-clamp-3 text-base font-medium leading-none text-[#000928] group-hover/highlight-item:text-[#575D71] group-active/highlight-item:text-[#575D71] md:mt-2 md:line-clamp-2 lg:mt-2 lg:text-xl lg:font-bold">
        {postName}
      </p>
    </NextLink>
  )
}
