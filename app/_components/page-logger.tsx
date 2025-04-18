'use client'

import { useEffect, useMemo } from 'react'
import { logPageView } from '@/app/actions-logging'
import { useReferrerTracker } from '@/hooks/use-referrer-tracker'

export default function PageLogger({
  extra,
}: {
  extra?: Record<string, unknown>
}) {
  const { currentURL, referrer: clientReferrer } = useReferrerTracker()

  const initialReferrer =
    typeof document !== 'undefined' ? document.referrer : ''

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
        referrer: clientReferrer || initialReferrer || '',
        screenSize,
        extra,
      })
    }

    log()
  }, [clientReferrer, currentURL, extra, initialReferrer, screenSize])

  return null
}
