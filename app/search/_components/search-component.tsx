'use client'
import { useEffect } from 'react'

export default function SearchPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cse.google.com/cse.js?cx=e066f4a8bda3647c4'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="space-y-4 p-4">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="gcse-search"></div>
    </div>
  )
}
