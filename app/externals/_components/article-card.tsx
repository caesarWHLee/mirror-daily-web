import Link from 'next/link'
import NextImage from 'next/image'
import { formatTimestamp } from '@/utils/common'
import type { External } from '@/types/externals'

export default function ArticleCard({
  title,
  link,
  thumb,
  publishedDate,
  sectionName,
  sectionColor,
  textContent,
}: External) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex max-w-[340px] flex-col md:min-h-[291px] md:w-[280px] md:max-w-none lg:w-[240px]"
    >
      <figure className="relative mb-1 aspect-[340/188] overflow-hidden rounded md:h-[155px] lg:h-[133px]">
        <NextImage src={thumb} unoptimized fill alt={title} />
        <p
          style={{ backgroundColor: sectionColor }}
          className="absolute bottom-2 left-2 rounded-lg px-1 py-0 text-xs font-bold leading-4 tracking-[0.5px] text-[#ffffff]"
        >
          {sectionName}
        </p>
      </figure>
      <p
        style={{ color: sectionColor }}
        className="mb-[11px] text-sm font-normal leading-normal"
      >
        {formatTimestamp(publishedDate)}
      </p>
      <figcaption className="mb-[6px] line-clamp-2 text-lg font-bold leading-normal text-[#4A4A4A]">
        {title}
      </figcaption>
      <p className="line-clamp-2 text-sm font-normal leading-normal text-[#4A4A4A]">
        {textContent}
      </p>
    </Link>
  )
}
