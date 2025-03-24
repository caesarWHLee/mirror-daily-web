import CustomImage from '@/shared-components/custom-image'
import type { Topic } from '@/types/topic'
import { getTopicPageUrl } from '@/utils/site-urls'
import Link from 'next/link'

export default function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Link
      prefetch={false}
      href={getTopicPageUrl(topic.slug)}
      target="_blank"
      className="mx-auto w-[319px] md:w-[280px] lg:w-[466px]"
    >
      <figure className="relative h-[126px] w-[319px] md:h-[111px] md:w-[280px] lg:h-[186px] lg:w-[466px]">
        <CustomImage
          images={topic.heroImage.resized}
          imagesWebP={topic.heroImage.resizedWebp}
          alt={topic.name}
        />
      </figure>
      <div>
        <p className="mt-3 line-clamp-1 text-[20px] font-bold leading-[100%] text-[rgb(74,74,74)] md:mt-4">
          {topic.name}
        </p>
        <p className="mt-3 line-clamp-3 h-[72px] lg:mt-[17px] lg:line-clamp-2 lg:h-12">
          {topic.brief}
        </p>
      </div>
    </Link>
  )
}
