'use client'

import { useEffect, useMemo } from 'react'
import { logPageView } from '@/utils/logging'
import { usePathname } from 'next/navigation'

export default function PageLogger({
  extra,
}: {
  extra?: Record<string, unknown>
}) {
  const pathname = usePathname()
  const screenSize = useMemo(() => {
    if (typeof window === 'undefined') return null
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }, [])

  useEffect(() => {
    const log = async () => {
      if (!screenSize) return

      await logPageView({
        pathname,
        screenSize,
        extra,
      })
    }

    log()
  }, [extra, pathname, screenSize])

  return null
}
