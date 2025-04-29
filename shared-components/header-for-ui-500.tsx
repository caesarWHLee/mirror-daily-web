'use client'

import { fetchLatestPost } from '@/app/actions-general'
import { fetchHeaderData } from '@/app/actions-general'
import { useState, useEffect } from 'react'
import type { HeaderData, LatestPost } from '@/types/common'
import UiHeader from './header/ui-header'

export default function Header() {
  const [data, setData] = useState<HeaderData[]>([])
  const [latestPosts, setLatestPosts] = useState<LatestPost[]>([])

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
        const posts = (await fetchLatestPost()).slice(0, 8)
        setLatestPosts(posts)
      } catch (err) {
        console.error(err)
      }
    }

    getData()
    getFlashNews()
  }, [])

  return <UiHeader data={data} latestPosts={latestPosts} />
}
