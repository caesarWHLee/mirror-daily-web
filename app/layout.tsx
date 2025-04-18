import { GTM_ID } from '@/constants/config'
import StoreProvider from '@/redux/store-provider'
import UploadModal from '@/shared-components/shorts-upload/upload-modal'
import '@/shared-styles/global.css'
import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
import { getDefaultMetadata } from '@/utils/common'

const notoSans = Noto_Sans_TC({
  preload: true,
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = getDefaultMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hant" className={notoSans.className}>
      <head>
        <GoogleTagManager gtmId={GTM_ID} />
        <Script
          id="comscore"
          dangerouslySetInnerHTML={{
            __html: `var _comscore = _comscore || [];
                _comscore.push({ c1: "2", c2: "24318560" ,  options: { enableFirstPartyCookie: "true" } });
                (function() {
                  var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
                  s.src = "https://sb.scorecardresearch.com/cs/24318560/beacon.js";
                  el.parentNode.insertBefore(s, el);
                })();`,
          }}
        />
        <Script
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          async
          crossOrigin="anonymous"
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img src="https://sb.scorecardresearch.com/p?c1=2&amp;c2=24318560&amp;cv=3.9.1&amp;cj=1">`,
          }}
        />
      </head>
      <body className="app-layout">
        <Script
          async
          strategy="beforeInteractive"
          src="https://cdn.jsdelivr.net/npm/@miso.ai/client-sdk@1.11.4/dist/umd/miso.min.js"
        />
        <StoreProvider>
          {children}
          <UploadModal />
        </StoreProvider>
      </body>
    </html>
  )
}
