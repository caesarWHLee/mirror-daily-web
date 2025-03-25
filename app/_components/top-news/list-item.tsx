import type { ItemInTopNewsSection } from '@/types/homepage'
import dayjs from 'dayjs'
import NextLink from 'next/link'
import type { CSSProperties } from 'react'

type Props = Pick<
  ItemInTopNewsSection,
  | 'categoryColor'
  | 'categoryName'
  | 'postId'
  | 'postName'
  | 'publishedDate'
  | 'link'
>

export default function ListItem({
  categoryColor,
  categoryName,
  publishedDate,
  postName,
  link,
}: Props) {
  const timeStr = dayjs(publishedDate).format('YYYY/MM/DD HH:mm:ss')

  return (
    <div className="[&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#CCCED4] [&:not(:last-child)]:pb-3 md:[&:not(:last-child)]:pb-2">
      <div className={`flex items-center`}>
        <span
          style={{ backgroundColor: categoryColor || '#FF5A36' }}
          className="inline-block h-5 rounded-xl px-2 py-1 text-xs font-bold leading-[12px] tracking-[0.5px] text-[#F6F6FB]"
        >
          {categoryName || 'Video'}
        </span>
        <time
          style={{ color: categoryColor }}
          className="ml-2 text-sm font-light leading-normal tracking-[0.5px] md:ml-3"
        >
          {timeStr}
        </time>
      </div>
      <NextLink
        prefetch={false}
        href={link}
        target="_blank"
        className="mt-[6px] line-clamp-2 h-[42px] break-all text-base font-medium leading-[21px] text-[#575D71] hover-or-active:text-[color:var(--custom-active-color)] md:h-10 md:text-sm md:font-normal md:leading-[20px] lg:line-clamp-1 lg:h-auto lg:text-base lg:font-medium lg:leading-normal"
        style={
          {
            '--custom-active-color': categoryColor,
          } as CSSProperties
        }
      >
        {postName}
      </NextLink>
    </div>
  )
}
