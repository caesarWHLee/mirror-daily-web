'use client'

import type { Shorts } from '@/types/common'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import NextLink from 'next/link'

type Props = Shorts & {
  isActive: boolean
  onPlay(): void
  onPause(): void
}

export default function ShortsItem({
  fileUrl,
  poster,
  title,
  link,
  isActive,
  onPlay,
  onPause,
}: Props) {
  const [isClientSide, setIsClientSide] = useState(false)

  useEffect(() => {
    setIsClientSide(true)
  }, [])

  return (
    <NextLink prefetch={false} className="w-full select-none" href={link}>
      <div className="relative h-[400px] w-full lg:h-[400px]">
        {isClientSide && (
          <ReactPlayer
            url={fileUrl}
            width="100%"
            height="100%"
            muted={true}
            playing={isActive}
            playsinline={true}
            config={{
              file: {
                attributes: {
                  poster,
                  preload: 'none',
                },
              },
            }}
            onPause={() => onPause()}
            onEnded={() => onPause()}
          />
        )}
        <div
          className="absolute inset-0"
          onMouseEnter={() => onPlay()}
          onMouseLeave={() => onPause()}
        />
      </div>
      <p className="mt-4 line-clamp-2 text-base font-normal leading-normal">
        {title}
      </p>
    </NextLink>
  )
}
