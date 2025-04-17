'use client'

import type { Shorts } from '@/types/common'
import type { ChangeEvent, CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import NextImage from 'next/image'
import ReactPlayer from 'react-player/lazy'
import IconPlay from '@/public/icons/shorts/play.svg'
import IconPause from '@/public/icons/shorts/pause.svg'
import IconVolume from '@/public/icons/shorts/volume.svg'
import IconMute from '@/public/icons/shorts/mute.svg'
import SocialShareBar from '../social-share-bar'

type Props = Shorts & {
  isActive: boolean
  volume: number
  onPlay(): void
  onPause(): void
  setVolume(volume: number): void
}

export default function ShortsItem({
  title,
  fileUrl,
  poster,
  contributor,
  link,
  isActive,
  volume,
  onPlay,
  onPause,
  setVolume,
}: Props) {
  const [isClientSide, setIsClientSide] = useState(false)
  const volumeSliderRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsClientSide(true)
  }, [])

  const volumeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10) / 100
    setVolume(newVolume)
  }

  return (
    <div className="relative h-full">
      <div className="shorts-container">
        {isClientSide && (
          <ReactPlayer
            url={fileUrl}
            width="100%"
            height="100%"
            controls={false}
            loop={true}
            volume={volume}
            playing={isActive}
            playsinline={true}
            config={{
              file: {
                attributes: {
                  poster,
                },
              },
            }}
          />
        )}
        <section
          className="absolute inset-x-7 top-4 flex gap-x-3"
          ref={volumeSliderRef}
        >
          {isActive ? (
            <button className="control shrink-0" onClick={onPause}>
              <NextImage src={IconPause} width={8} height={10} alt="暫停" />
            </button>
          ) : (
            <button className="control shrink-0" onClick={onPlay}>
              <NextImage src={IconPlay} width={10} height={10} alt="播放" />
            </button>
          )}

          <div className="flex items-center gap-x-3">
            <button
              className="control"
              onClick={() => {
                if (volume === 0.0) {
                  setVolume(1.0)
                } else {
                  setVolume(0.0)
                }
              }}
            >
              {volume === 0.0 ? (
                <NextImage
                  src={IconMute}
                  width={11.25}
                  height={11.25}
                  alt="靜音"
                />
              ) : (
                <NextImage
                  src={IconVolume}
                  width={11.25}
                  height={11.25}
                  alt="音量控制"
                />
              )}
            </button>

            <input
              className="volume-slider"
              type="range"
              min={0}
              max={100}
              step={1}
              value={Math.floor(volume * 100)}
              onChange={volumeChangeHandler}
              style={
                {
                  '--shorts-volume': `${volume * 100}%`,
                } as CSSProperties
              }
            />
          </div>
        </section>
        <div className="absolute inset-x-0 bottom-0 h-[135px]">
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
