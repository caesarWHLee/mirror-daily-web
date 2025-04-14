'use client'
import { SHARE_URL_FACEBOOK, SHARE_URL_LINE } from '@/constants/misc'
import IconFacebook from '@/public/icons/logos/facebook-blue.svg'
import IconLine from '@/public/icons/logos/line-green.svg'
import IconShare from '@/public/icons/share-gray.svg'
import NextImage from 'next/image'
import { useShareHandler } from '@/hooks/use-share-handler'
import { useEffect, useState } from 'react'

type Props = {
  title: string
  link?: string
  direction?: 'vertical' | 'horizontal'
}

export default function SocialShareBar({
  title,
  link,
  direction = 'horizontal',
}: Props) {
  const { write, getPopupJsx } = useShareHandler()
  const [url, setUrl] = useState('')
  useEffect(() => {
    if (!link) setUrl(window.location.href)
    else setUrl(window.location.origin + link)
  }, [link])

  return (
    <>
      <div
        className={
          direction === 'horizontal'
            ? `flex flex-row items-start gap-x-2`
            : `flex flex-col items-center gap-y-2`
        }
      >
        <a target="_blank" href={`${SHARE_URL_FACEBOOK}${url}`}>
          <button>
            <NextImage
              src={IconFacebook}
              width={35}
              height={35}
              alt="Facebook 分享"
            />
          </button>
        </a>

        <a target="_blank" href={`${SHARE_URL_LINE}${url}`}>
          <button>
            <NextImage src={IconLine} width={35} height={35} alt="Line 分享" />
          </button>
        </a>

        <button
          onClick={() => {
            write({
              title,
              url,
            })
          }}
        >
          <NextImage src={IconShare} width={35} height={35} alt="分享連結" />
        </button>
      </div>
      {getPopupJsx({ children: undefined })}
    </>
  )
}
