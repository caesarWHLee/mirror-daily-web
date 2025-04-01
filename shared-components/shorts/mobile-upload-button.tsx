'use client'
import NextImage from 'next/image'
import IconSubmission from '@/public/icons/shorts/submission.svg'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectIsModalOpened } from '@/redux/shorts-upload/selector'
import { shortsUploadActions } from '@/redux/shorts-upload/slice'
import useRecaptcha from '@/hooks/use-recaptcha'

export default function MobileUploadButton() {
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
      className={`flex flex-col items-center justify-center gap-y-1 text-[#FF5A36] ${isModalOpened ? 'bg-[#F0F0F1]' : ''}`}
      onClick={onUpload}
    >
      <NextImage src={IconSubmission} alt="投稿" />
      <p>我要投稿</p>
    </button>
  )
}
