'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppState } from '@/redux/store'
import { updateURL } from '@/redux/referrer/slice'

export function useReferrerTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const search = searchParams.toString()
  const currentURL = search ? `${pathname}?${search}` : pathname

  const referrer = useSelector((state: AppState) => state.referrer.previousURL)

  useEffect(() => {
    dispatch(updateURL(currentURL))
  }, [currentURL, dispatch])

  return { currentURL, referrer }
}
