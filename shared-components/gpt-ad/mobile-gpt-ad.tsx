'use client'

import { useEffect, useState } from 'react'
import type { AdSlotKey } from './base-gpt-ad'
import BaseGptAd from './base-gpt-ad'
import { getTailwindConfigBreakpointNumber } from '@/utils/tailwind'
import TempAdImage from './temp-ad-image'

export function MobileGptAd({
  slotKey,
  customClasses = '',
}: {
  slotKey: AdSlotKey
  customClasses?: string
}) {
  const [show, setShow] = useState(false)
  const isAdScriptsReady = false

  useEffect(() => {
    const check = () =>
      setShow(window.innerWidth < getTailwindConfigBreakpointNumber('md'))

    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return show && isAdScriptsReady ? (
    <BaseGptAd slotKey={slotKey} customClasses={customClasses} />
  ) : (
    <TempAdImage
      slotKey={slotKey}
      customClasses={`md:hidden ${customClasses}`}
    />
  )
}
