'use client'

import { useEffect, useState } from 'react'
import type { AdSlotKey } from './base-gpt-ad'
import BaseGptAd from './base-gpt-ad'
import { getTailwindConfigBreakpointNumber } from '@/utils/tailwind'

export function DesktopGptAd({
  slotKey,
  customClasses = '',
}: {
  slotKey: AdSlotKey
  customClasses?: string
}) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const check = () =>
      setShow(window.innerWidth >= getTailwindConfigBreakpointNumber('lg'))

    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return show ? (
    <BaseGptAd slotKey={slotKey} customClasses={customClasses} />
  ) : null
}
