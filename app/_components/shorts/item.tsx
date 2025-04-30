'use client'

import useVideoViewLogger from '@/hooks/use-video-logger'
import type { Shorts } from '@/types/common'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'

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
  const [duration, setDuration] = useState<number | null>(null)
  const [playedSeconds, setPlayedSeconds] = useState(0)
  const { sendVideoLog } = useVideoViewLogger({
    isActive,
    title,
    link,
    duration,
    playedSeconds,
  })

  useEffect(() => {
    setIsClientSide(true)
  }, [])

  return (
    <a className="w-full select-none" href={link}>
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
            onEnded={async () => {
              onPause()
              await sendVideoLog(100, true)
            }}
            onDuration={(duration) => setDuration(duration)}
            onProgress={({ playedSeconds }) => {
              setPlayedSeconds(playedSeconds)
            }}
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
    </a>
  )
}
