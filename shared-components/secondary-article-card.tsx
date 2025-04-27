import Link from 'next/link'
import CustomImage from '@/shared-components/custom-image'
import type { PostData } from '@/utils/data-process'

type Props = {
  postItem: PostData
  color: string
}

export default function SecondaryArticleCard({ postItem, color }: Props) {
  return (
    <Link
      prefetch={false}
      href={postItem.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row gap-x-3 md:gap-x-6 lg:gap-x-8"
    >
      <figure className="relative aspect-[132/88] max-h-[88px] w-full max-w-[132px] shrink-0 overflow-hidden rounded md:aspect-auto md:h-[134px] md:max-h-none md:w-[200px] md:max-w-none">
        <CustomImage
          images={postItem.postMainImage.resized}
          imagesWebP={postItem.postMainImage.resizedWebp}
          alt={postItem.title}
        />
      </figure>
      <div className="leading-[1.3]">
        <p
          style={{ color: color }}
          className={`$md:mb-[17px] mb-[5px] text-sm font-normal`}
        >
          {postItem.publishedDate}
        </p>
        <figcaption className="line-clamp-3 text-sm font-bold text-[#4A4A4A] md:mb-[6px] md:line-clamp-2 md:text-lg">
          {postItem.title}
        </figcaption>
        <p className="hidden text-sm font-normal text-[#4A4A4A] md:visible md:line-clamp-2">
          {postItem.textContent}
        </p>
      </div>
    </Link>
  )
}
