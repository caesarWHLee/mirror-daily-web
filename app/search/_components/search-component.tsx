'use client'
// import { useSearchParams } from 'next/navigation'
// import { useState } from 'react'

export default function SearchComponent() {
  // const searchParams = useSearchParams()
  // const query = searchParams.get('q') || ''
  // const [inputValue, setInputValue] = useState(query)

  return (
    <div>
      {/* <input
        placeholder="搜尋"
        defaultValue={q}
        onChange={(e) => {
          // @ts-ignore
          const newInput = e.currentTarget.value
          setInputValue(newInput)
        }}
      /> */}
      {/* <SearchIcon onClick={handleSubmit} /> */}
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="gcse-searchresults-only"></div>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="gcse-search"></div>
    </div>
  )
}
