import Link from 'next/link'
import CustomImage from '@/shared-components/custom-image'
import type { PostData } from '@/utils/data-process'

type Props = {
  postItem: PostData
  color: string
}

export default function MainArticleCard({ postItem, color }: Props) {
  return (
    <Link
      prefetch={false}
      href={postItem.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-y-5 md:gap-y-[30px] lg:gap-y-7"
    >
      <figure className="aspect-[375/208] max-h-[208px] overflow-hidden md:h-[375px] md:max-h-none md:w-[670px] md:rounded lg:h-[412px] lg:w-[740px]">
        <CustomImage
          images={postItem.postMainImage.resized}
          imagesWebP={postItem.postMainImage.resizedWebp}
          alt={postItem.title}
        />
      </figure>
      <div className="flex flex-row justify-center gap-x-2 pl-[23px] pr-[22px] md:justify-start md:gap-x-3 md:px-0">
        <div
          style={{ backgroundColor: color }}
          className={`h-20 w-7 shrink-0 md:h-12`}
        />
        <figcaption className="line-clamp-3 max-w-[294px] text-xl font-bold leading-[1.3] text-[#000928] md:line-clamp-2 md:max-w-[506px]">
          {postItem.title}
        </figcaption>
      </div>
    </Link>
  )
}
