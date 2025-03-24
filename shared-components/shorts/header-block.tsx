'use client'

import type { ChangeEvent } from 'react'
import { useState } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import IconLogo from '@/public/icons/logos/mirror-daily-shorts-header.svg'
import IconSearchGray from '@/public/icons/search-gray.svg'
import IconSearchWhite from '@/public/icons/search-white.svg'
import IconClose from '@/public/icons/shorts/close.svg'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectIsModalOpened } from '@/redux/shorts-upload/selector'
import { shortsUploadActions } from '@/redux/shorts-upload/slice'

type Props = {
  inputValue: string
  setInputValue(value: string): void
}

export default function HeaderBlock({ inputValue, setInputValue }: Props) {
  const dispatch = useAppDispatch()
  const isModalOpened = useAppSelector(selectIsModalOpened)
  const [isOpened, setIsOpened] = useState(false)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="relative hidden w-full md:flex">
      <NextLink
        prefetch={false}
        href="/"
        className="relative my-5 ml-5 h-[58px] w-[200px] lg:my-6 lg:h-[60px] lg:w-[208px]"
      >
        <NextImage src={IconLogo} fill={true} alt="Logo" />
      </NextLink>
      <p className="my-[30px] ml-3 whitespace-nowrap text-2xl font-black leading-normal text-[#FF5A36] lg:my-[35px] lg:ml-[26px]">
        短影音
      </p>
      {/* tablet */}
      <button
        className="my-[34px] ml-auto shrink-0 lg:hidden"
        onClick={() => setIsOpened(true)}
      >
        <NextImage src={IconSearchGray} width={28} height={28} alt="搜尋" />
      </button>
      {isOpened && (
        <form
          className="absolute inset-x-0 top-0 flex items-center overflow-hidden bg-[#B2B5BE] px-7 py-[30px] lg:hidden"
          onSubmit={() => {
            /* TODO: redirect to Search Result page while submit */
          }}
        >
          <button
            onClick={() => setIsOpened(false)}
            className="shrink-0"
            type="button"
          >
            <NextImage
              src={IconClose}
              width={20}
              height={20}
              alt="關閉搜尋框"
            />
          </button>
          <div className="shrink grow pl-9 pr-5">
            <input
              name="search"
              type="text"
              placeholder="請輸入關鍵字"
              className="w-full rounded-[7px] bg-[#F6F6FB] px-3 py-[6px] text-base font-normal leading-[150%] text-[#000928] outline-none placeholder:text-[#000928]"
              value={inputValue}
              onChange={onChangeHandler}
            />
          </div>
          <button className="shrink-0" type="submit">
            <NextImage
              src={IconSearchWhite}
              width={24}
              height={24}
              alt="搜尋"
            />
          </button>
        </form>
      )}
      {/* desktop */}
      <form
        className="my-[33px] ml-[128px] mr-[222px] hidden shrink grow items-center lg:flex"
        onSubmit={() => {
          /* TODO: redirect to Search Result page while submit */
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="請輸入關鍵字"
          className="h-10 rounded-[7px] border-[0.5px] border-solid border-[#000928] bg-[#F6F6FB] px-4 py-[9px] text-base font-medium leading-normal text-[#7F8493] outline-none placeholder:text-[#7F8493]"
          value={inputValue}
          onChange={onChangeHandler}
        />
        <button className="ml-3" type="submit">
          <NextImage src={IconSearchGray} width={28} height={28} alt="搜尋" />
        </button>
      </form>
      <button
        className={`my-[34px] ml-3 mr-7 h-7 shrink-0 rounded-[29px] bg-[#FF5A36] px-[10px] py-[3px] text-[15px] font-normal leading-[22px] text-white shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#FF9078] active:bg-[#E54B29] ${
          isModalOpened ? 'bg-[#E54B29]' : ''
        }`}
        onClick={() => {
          if (isModalOpened) return
          dispatch(shortsUploadActions.setIsModalOpened(true))
        }}
      >
        我要投稿
      </button>
    </div>
  )
}
