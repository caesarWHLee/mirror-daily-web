import { useDebounceCallback, useCopyToClipboard } from 'usehooks-ts'
import Popup from '@/shared-components/popup'
import type { PropsWithChildren } from 'react'
import { useState } from 'react'

type ShareData = NonNullable<Parameters<typeof navigator.share>[0]>

export const useShareHandler = () => {
  const [, copy] = useCopyToClipboard()
  const [isActive, setIsActive] = useState(false)

  const write = useDebounceCallback((data: ShareData) => {
    if (isActive) return

    copy(data.url ?? '').then(() => {
      setIsActive(true)

      return new Promise((resolve) => {
        setTimeout(() => {
          setIsActive(false)
          resolve(true)
        }, 1000)
      })
    })
  }, 500)

  return {
    write,
    getPopupJsx: ({ children }: PropsWithChildren) =>
      Popup({ isActive, children }),
  }
}
