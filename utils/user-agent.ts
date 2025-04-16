import 'server-only'

import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

export function parseUserAgentInfo() {
  const headersList = headers()
  const userAgent = headersList.get('user-agent') || ''
  const ipAddress =
    headersList.get('x-forwarded-for') || headersList.get('remote-addr') || ''
  const pathname = headersList.get('referer') || ''
  const ua = new UAParser(userAgent)
  const inAppPatterns = [
    'fbav',
    'instagram',
    'line',
    'wechat',
    'micromessenger',
    'tiktok',
    'snapchat',
  ]

  const webviewPatterns = ['wv', 'webview', '; wv', ';webview', 'mobile safari']

  const browser = {
    name: ua.getBrowser().name || '',
    version: ua.getBrowser().version || '',
  }

  const device = {
    model: ua.getDevice().model || '',
    vendor: ua.getDevice().vendor || '',
  }

  const os = {
    name: ua.getOS().name || '',
    version: ua.getOS().version || '',
  }

  const isInAppBrowser = inAppPatterns.some((pattern) =>
    userAgent.toLowerCase().includes(pattern)
  )

  const isWebview = webviewPatterns.some((pattern) =>
    userAgent.toLowerCase().includes(pattern)
  )

  return {
    ipAddress,
    pathname,
    browser,
    device,
    os,
    isInAppBrowser,
    isWebview,
  }
}
