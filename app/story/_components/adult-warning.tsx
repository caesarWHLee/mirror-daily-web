'use client'

import { useState } from 'react'

type Props = {
  isAdult: boolean
}

export default function AdultWarning({ isAdult }: Props) {
  const [isAgreed, setIsAgreed] = useState(false)

  const shouldShowAdultWarning = Boolean(isAdult && !isAgreed)

  if (!shouldShowAdultWarning) return null

  return (
    <div
      id="adult-warning-modal"
      className="fixed inset-0 z-warning-modal bg-[rgba(29,29,29,0.84)]"
    >
      <div className="mx-auto mt-[102px] flex h-[353px] w-[280px] flex-col items-center gap-4 rounded-xl bg-white px-4 py-6 shadow-modal md:mt-[130px] lg:mt-[210px]">
        <p className="text-center text-lg font-bold leading-[1.2] text-black/[.87]">
          您即將進入之內容
          <br />
          需滿十八歲方可瀏覽
        </p>
        <p className="text-sm font-normal leading-normal text-black/50">
          根據「電腦網路內容分級處理辦法」第六條第三款規定，
          本網站已於各限制級網頁依照台灣網站分級推廣基金會之規定標示。
          若您尚未年滿十八歲，請點選離開。若您已滿十八歲，
          亦不可將本區之內容派發、傳閱、出售、出租、交給或借予年齡未滿18歲的人士瀏覽，
          或將本網站內容向該人士出示、播放或放映。
        </p>
        <div className="flex w-full justify-between">
          <button
            className="rounded-lg bg-mirror-blue-700 px-2 py-[6px] text-base font-bold leading-[1.75] tracking-[0.5px] text-white hover-or-active:bg-mirror-blue-800"
            onClick={() => setIsAgreed(true)}
          >
            是，我已年滿十八歲
          </button>
          <a
            href="/"
            className="rounded-lg border border-solid border-[#68666D] bg-white px-5 py-[6px] hover-or-active:bg-[#F6F6FB]"
          >
            離開
          </a>
        </div>
      </div>
    </div>
  )
}
