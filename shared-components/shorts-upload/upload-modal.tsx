'use client'

import { useDispatch } from 'react-redux'
import { shortsUploadActions } from '@/redux/shorts-upload/slice'
import { useEffect } from 'react'
import { useAppSelector } from '@/redux/hooks'
import {
  selectIsModalOpened,
  selectShorts,
} from '@/redux/shorts-upload/selector'
import { usePathname } from 'next/navigation'
import ModalBody from './modal-body'
import { isEqual } from 'lodash-es'

export const useModalClose = () => {
  const dispatch = useDispatch()
  return () => dispatch(shortsUploadActions.resetAllState())
}

export default function UploadModal() {
  const isModalOpened = useAppSelector(selectIsModalOpened)
  const { blobURL } = useAppSelector(selectShorts, isEqual)
  const pathname = usePathname()
  const isShortsPage = pathname.startsWith('/shorts')

  const closeHandler = useModalClose()

  useEffect(() => {
    closeHandler()
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [pathname])

  if (!isModalOpened) return null

  return (
    <div
      className={`fixed inset-x-0 ${
        isShortsPage ? 'bottom-[var(--shorts-header-height)]' : 'bottom-0'
      } top-0 z-upload-modal flex flex-col items-center bg-[#7F8493]/80 md:bottom-0`}
      onClick={closeHandler}
    >
      <input
        id="upload-modal-toggle"
        type="checkbox"
        className="hidden"
        checked={isModalOpened}
      />
      {/* use key to reset form state */}
      <ModalBody key={`${String(isModalOpened)}-${blobURL}`} />
    </div>
  )
}
