'use client'

import { fetchFlashNews } from '@/app/actions'
import { fetchHeaderData } from '@/app/actions-general'
import { useState, useEffect } from 'react'
import type { HeaderData } from '@/types/common'
import type { FlashNews } from '@/types/homepage'
import UiHeader from './header/ui-header'

export default function Header() {
  const [data, setData] = useState<HeaderData[]>([])
  const [flashNews, setFlashNews] = useState<FlashNews[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchHeaderData()
        setData(result)
      } catch (err) {
        console.error(err)
      }
    }

    const getFlashNews = async () => {
      try {
        const posts = await fetchFlashNews()
        setFlashNews(posts)
      } catch (err) {
        console.error(err)
      }
    }

    getData()
    getFlashNews()
  }, [])

  return <UiHeader data={data} flashNews={flashNews} />
}
