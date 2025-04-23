'use client'

import { useEffect, useRef } from 'react'
import { ENV } from '@/constants/config'
import { ENVIRONMENT } from '@/constants/misc'
import { adSlots } from '@/constants/ad'
import { twMerge } from 'tailwind-merge'

export type AdSlotKey = keyof typeof adSlots

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    googletag?: any
  }
}

const isDebugMode = ENV === ENVIRONMENT.LOCAL || ENV === ENVIRONMENT.DEVELOPMENT

export default function BaseGptAd({
  slotKey,
  customClasses,
}: {
  slotKey: AdSlotKey
  customClasses: string
}) {
  const isInitialed = useRef(false)
  const { slotId, size, adDivId, collapseEmptyDivs } = adSlots[slotKey]

  useEffect(() => {
    if (typeof window === 'undefined' || isInitialed.current) return

    window.googletag = window.googletag || { cmd: [] }

    window.googletag.cmd.push(function () {
      if (isDebugMode) {
        console.log(
          `[GPT-AD DEBUG] Registering ad slot: ${slotId}, divId: ${adDivId}`
        )
      }

      window.googletag
        .defineSlot(slotId, size, adDivId)
        .addService(window.googletag.pubads())

      window.googletag.pubads().enableSingleRequest()

      if (collapseEmptyDivs && !isDebugMode) {
        window.googletag.pubads().collapseEmptyDivs()
      }

      window.googletag.enableServices()
      window.googletag.display(adDivId)
    })
    isInitialed.current = true
  }, [slotId, adDivId, size, collapseEmptyDivs])

  return (
    <>
      <div
        id={adDivId}
        style={{
          width: size[0],
          height: size[1],
        }}
        className={twMerge(
          `${isDebugMode ? `relative border-2 border-dashed border-red-500` : ''}`,
          customClasses
        )}
      >
        {isDebugMode && (
          <span className="absolute left-0 top-0 z-[9999] bg-red-500 px-1 py-0.5 text-[12px] text-white">
            {slotId}
          </span>
        )}
      </div>
    </>
  )
}
