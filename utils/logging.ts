'use server'

import { Logging } from '@google-cloud/logging'
import { GCP_PROJECT_ID, ENV } from '@/constants/config'
import { parseUserAgentInfo } from './user-agent'

const eventType = 'page-view'
const logName = `${GCP_PROJECT_ID}-${ENV}-web-${eventType}`
console.log(logName)

export async function logPageView({
  pathname,
  screenSize,
  extra = {},
}: {
  pathname: string
  screenSize: { width: number; height: number }
  extra?: Record<string, unknown>
}) {
  const logging = new Logging({ projectId: GCP_PROJECT_ID })
  const log = logging.log(logName)
  const userAgentInfo = parseUserAgentInfo()
  const pageType = parsePageType(pathname)
  const formattedDate = new Date().toLocaleDateString('zh-TW')
  const formattedTime = new Date().toLocaleTimeString('zh-TW', {
    timeZone: 'Asia/Taipei',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  const { browser, device, os, isInAppBrowser, isWebview, ipAddress, referer } =
    userAgentInfo
  const { name: browserName, version: browserVersion } = browser
  const { model: deviceModel, vendor: deviceVendor } = device
  const { name: osName, version: osVersion } = os

  const metadata = {
    resource: { type: 'global' },
    severity: 'INFO',
    labels: {
      eventType,
      date: formattedDate,
      time: formattedTime,
      browserName,
      browserVersion,
      deviceModel,
      deviceVendor,
      osName,
      osVersion,
      ipAddress,
      referer,
    },
  }

  const jsonPayload = {
    pageURL: pathname,
    pageType,
    screenSize,
    isInAppBrowser,
    isWebview,
    extra,
  }

  const entry = log.entry(metadata, jsonPayload)

  return log.write(entry)
}

function parsePageType(pathname: string) {
  const parsed = pathname.split('/')

  switch (parsed[1]) {
    case '':
      return 'index'
    case 'topic':
      return parsed[2] ? 'topic' : 'topic-listing'
    default:
      return parsed[1]
  }
}
