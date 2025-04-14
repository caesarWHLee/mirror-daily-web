import type { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { useIsClient } from 'usehooks-ts'

type Props = {
  isActive: boolean
}

export default function Popup({
  isActive,
  children = '已複製連結',
}: PropsWithChildren<Props>) {
  const isClient = useIsClient()

  if (!isClient) return null

  return (
    <>
      {createPortal(
        <div
          className={`fixed left-1/2 top-0 w-[100px] -translate-x-1/2 -translate-y-full rounded-[40px] bg-[rgba(0,0,0,0.87)] px-3 py-1 text-center text-sm font-medium leading-loose text-white ${isActive ? 'animate-popup' : ''}`}
        >
          {children}
        </div>,
        document.body
      )}
    </>
  )
}
