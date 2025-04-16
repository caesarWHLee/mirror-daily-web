'use server'

import { Logging } from '@google-cloud/logging'
import { GCP_PROJECT_ID, ENV } from '@/constants/config'
import { parseUserAgentInfo } from '@/utils/user-agent'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

const eventType = 'page-view'
const logName = `${GCP_PROJECT_ID}-${ENV}-web-${eventType}`

export async function logPageView({
  referrer,
  screenSize,
  extra = {},
}: {
  referrer: string
  screenSize: { width: number; height: number }
  extra?: Record<string, unknown>
}) {
  const logging = new Logging({ projectId: GCP_PROJECT_ID })
  const log = logging.log(logName)
  const userAgentInfo = parseUserAgentInfo()
  const taipeiNow = dayjs().tz('Asia/Taipei')
  const formattedDate = taipeiNow.format('YYYY/MM/DD')
  const formattedTime = taipeiNow.format('HH:mm')
  const {
    browser,
    device,
    os,
    isInAppBrowser,
    isWebview,
    ipAddress,
    pathname,
  } = userAgentInfo
  const { name: browserName, version: browserVersion } = browser
  const { model: deviceModel, vendor: deviceVendor } = device
  const { name: osName, version: osVersion } = os
  const pageType = parsePageType(pathname)

  const metadata = {
    resource: { type: 'global' },
    severity: 'DEFAULT',
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
      referrer,
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

function parsePageType(url: string) {
  const { pathname } = new URL(url)
  const parsed = pathname.split('/')

  switch (parsed[1]) {
    case '':
      return 'index'
    case 'topic':
      return parsed[2] ? 'topic' : 'topic-listing'
    default:
      return parsed[1] ?? ''
  }
}
