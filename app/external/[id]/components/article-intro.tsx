import type { PostIntro } from '@/types/external'
import Image from 'next/image'
import SocialShareBar from '@/shared-components/social-share-bar'
import Link from 'next/link'
import { IMAGE_PATH } from '@/constants/default-path'
import { getTagPageUrl } from '@/utils/site-urls'

export default function ArticleIntro({
  title,
  thumb,
  writer,
  publishedTime,
  tags,
  link,
  sectionName,
}: PostIntro) {
  return (
    <section className="flex max-w-screen-sm flex-col items-center md:w-[600px] md:max-w-none lg:w-[720px]">
      <figure className="relative order-1 mb-6 aspect-[2/1] w-full lg:order-2">
        <Image
          src={thumb || IMAGE_PATH}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
      </figure>
      <div className="order-2 w-full px-5 md:px-0 lg:order-1">
        <p className="mb-1 text-[#ff800A] lg:mb-4">{`｜${sectionName}`}</p>
        <h1 className="mb-3 text-2xl font-black leading-[1.2] text-[#212944] lg:mb-4">
          {title}
        </h1>
        <div className="mb-4 flex flex-col gap-y-1 text-[13px] font-normal leading-normal text-[#7F8493] md:mb-3 lg:mb-4">
          <p>{publishedTime}</p>
          {writer && <p>記者：{writer}</p>}
        </div>
        <div className="mb-4 md:mb-3 lg:mb-4">
          <SocialShareBar title={title} link={link} />
        </div>
        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-x-2 gap-y-4 md:mb-6 md:grid-cols-6 md:gap-x-3 lg:mb-4">
            {tags.map((tag) => (
              <Link
                href={getTagPageUrl(tag.slug)}
                target="_blank"
                key={tag.slug}
              >
                <div className="flex justify-center rounded bg-[#CCCED4] py-1 pl-[10px] pr-3 text-sm font-normal leading-[24px]">
                  {tag.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
