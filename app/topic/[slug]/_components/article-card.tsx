'use client'

import Link from 'next/link'
import CustomImage from '@/shared-components/custom-image'
import type { PostData } from '@/utils/data-process'

export default function ArticleCard({
  title,
  link,
  textContent,
  postMainImage,
}: PostData) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="article-container"
    >
      <figure className="image">
        <CustomImage
          images={postMainImage.resized}
          imagesWebP={postMainImage.resizedWebp}
          alt={title}
        />
      </figure>
      <figcaption className="title">{title}</figcaption>
      <p className="brief">{textContent}</p>
    </Link>
  )
}
