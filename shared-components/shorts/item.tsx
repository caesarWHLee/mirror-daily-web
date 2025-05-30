'use client'

import type { Shorts } from '@/types/common'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import SocialShareBar from '../social-share-bar'
import useVideoViewLogger from '@/hooks/use-video-logger'

type Props = Shorts & {
  isActive: boolean
  onPlay(): void
  onPause(): void
  readyToLoad: boolean
}

export default function ShortsItem({
  title,
  fileUrl,
  poster,
  contributor,
  link,
  isActive,
  readyToLoad,
  onPlay,
  onPause,
}: Props) {
  const [isClientSide, setIsClientSide] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
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

  useEffect(() => {
    if (readyToLoad && !hasLoaded) {
      setHasLoaded(true)
    }
  }, [readyToLoad, hasLoaded])

  return (
    <div className="relative h-full">
      <div className="shorts-container">
        {isClientSide && hasLoaded && (
          <ReactPlayer
            url={fileUrl}
            width="100%"
            height="100%"
            controls={true}
            loop={true}
            playing={isActive}
            playsinline={true}
            config={{
              file: {
                attributes: {
                  poster,
                },
              },
            }}
            onPlay={() => onPlay()}
            onPause={() => onPause()}
            onDuration={(duration) => setDuration(duration)}
            onProgress={({ playedSeconds }) => {
              setPlayedSeconds(playedSeconds)
            }}
            onEnded={async () => {
              await sendVideoLog(100, true)
            }}
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[135px]">
          <div className="absolute inset-x-6 bottom-5 text-sm leading-normal text-white md:text-base">
            {!!contributor && (
              <div className="mb-2 flex max-w-[min(273px,100%)] items-center md:max-w-[min(320px,100%)]">
                <p className="whitespace-nowrap font-bold">投稿人</p>
                &nbsp;
                <p className="line-clamp-1 break-all font-normal md:font-bold">
                  {contributor}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="absolute -right-4 bottom-0 hidden translate-x-full rounded-full md:inline-block">
          <SocialShareBar title={title} link={link} direction="vertical" />
        </div>
      </div>

      <div className="absolute bottom-6 right-[17px] inline-block rounded-full md:hidden">
        <SocialShareBar title={title} link={link} direction="vertical" />
      </div>
    </div>
  )
}
