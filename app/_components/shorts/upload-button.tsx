'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectIsModalOpened } from '@/redux/shorts-upload/selector'
import { shortsUploadActions } from '@/redux/shorts-upload/slice'
import useRecaptcha from '@/hooks/use-recaptcha'

export default function UploadButton() {
  const dispatch = useAppDispatch()
  const { handleRecaptchaVerification } = useRecaptcha()
  const isModalOpened = useAppSelector(selectIsModalOpened)

  const onUpload = async () => {
    if (isModalOpened) return
    const isVerified = await handleRecaptchaVerification('short_submit')
    if (!isVerified) return
    dispatch(shortsUploadActions.setIsModalOpened(true))
  }

  return (
    <button
      className="rounded-[29px] bg-[#D94141] px-[10px] py-[2.5px] text-[15px] font-normal leading-[23px] text-white"
      onClick={onUpload}
    >
      我要投稿
    </button>
  )
}
