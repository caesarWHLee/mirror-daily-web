'use client'
import { MISO_API_KEY } from '../../constants/config'
import { useEffect } from 'react'

export default function MisoPageView({ productIds }: { productIds: string }) {
  // @@ts-expect-error: Property 'misocmd' does not exist on type 'Window & typeof globalThis'.
  const misocmd = window.misocmd || (window.misocmd = [])
  useEffect(() => {
    misocmd.push(() => {
      const MisoClient = window.MisoClient
      const client = new MisoClient(MISO_API_KEY)
      client.api.interactions.upload({
        type: 'product_detail_page_view',
        product_ids: [`mirrordaily_${productIds}`],
      })
    })
  }, [])

  return <></>
}
