import Link from 'next/link'
import CustomImage from './custom-image'
import type { PopularNews } from '@/types/common'
import type { ReactElement } from 'react'

export default function FeaturedNewsCard({
  sectionName,
  sectionColor,
  postName,
  link,
  heroImage,
}: PopularNews): ReactElement {
  return (
    <Link
      prefetch={false}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure className="flex max-w-[280px] flex-col gap-y-2 lg:w-[240px] lg:gap-y-3">
        <div className="relative aspect-[280/188] overflow-hidden rounded lg:h-[160px]">
          <CustomImage
            images={heroImage.resized}
            imagesWebP={heroImage.resizedWebp}
            alt={postName}
          />
          <span
            className={`absolute bottom-2 left-2 rounded-lg px-1 py-0 text-xs font-bold leading-4 tracking-[0.5px] text-[#ffffff]`}
            style={{
              backgroundColor: sectionColor,
            }}
          >
            {sectionName}
          </span>
        </div>

        <figcaption className="line-clamp-2 text-lg font-normal text-[#000928] lg:line-clamp-3">
          {postName}
        </figcaption>
      </figure>
    </Link>
  )
}
