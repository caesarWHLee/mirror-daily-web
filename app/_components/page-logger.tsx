'use client'

import { useEffect, useMemo } from 'react'
import { logPageView } from '@/utils/logging'

export default function PageLogger({
  extra,
}: {
  extra?: Record<string, unknown>
}) {
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
        screenSize,
        extra,
      })
    }

    log()
  }, [extra, screenSize])

  return null
}
