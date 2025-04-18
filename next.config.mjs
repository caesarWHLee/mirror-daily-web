import * as tsImport from 'ts-import'

const { SITE_BASE_PATH, IS_PREVIEW_MODE } = await tsImport.load(
  './constants/preview-mode.ts'
)

/** @typedef {import('next/dist/lib/load-custom-routes').Header['headers'][number]} Header  */

const SECOND = 1
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

/** @type {Header} */
const cacheControl3Min = {
  key: 'cache-control',
  value: `public, s-maxage=${MINUTE * 3}, stale-while-revalidate=60`,
}

/** @type {Header} */
// const cacheControl10Min = {
//   key: 'cache-control',
//   value: `public, s-maxage=${MINUTE * 10}, stale-while-revalidate=60`,
// }

/** @type {Header} */
const cacheControl30Min = {
  key: 'cache-control',
  value: `public, s-maxage=${MINUTE * 30}, stale-while-revalidate=60`,
}

/** @type {Header} */
const cacheControl7Day = {
  key: 'cache-control',
  value: `public, s-maxage=${DAY * 7}, stale-while-revalidate=60`,
}

/** @type {Header} */
const cacheControlAssets = {
  key: 'cache-control',
  value: `public, s-maxage=${DAY * 7}, stale-while-revalidate=60`,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: SITE_BASE_PATH,
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    serverActions: {
      /** @see maximum HTTP/1 request size, @see https://cloud.google.com/run/quotas#networking_limits */
      bodySizeLimit: '31MB',
    },
  },
  async headers() {
    if (IS_PREVIEW_MODE) {
      return []
    }

    /** @see https://paper.dropbox.com/doc/CDN-cache---CicA78_qhXGqWFqc4NC99FkAAg-9oJDty7PW69K9YuC40aic */
    return [
      // default
      {
        source: '/:path*',
        headers: [
          {
            key: 'ETag',
            value: `"${process.env.GIT_HASH}"`,
          },
        ],
      },
      // 3 minutes
      {
        source: '/',
        headers: [cacheControl3Min],
      },
      {
        source: '/shorts/:path*',
        headers: [cacheControl3Min],
      },
      {
        source: '/topic/:path*',
        headers: [cacheControl3Min],
      },
      // 30 minutes
      {
        source: '/author/:path*',
        headers: [cacheControl30Min],
      },
      {
        source: '/tag/:path*',
        headers: [cacheControl30Min],
      },
      {
        source: '/section/:path*',
        headers: [cacheControl30Min],
      },
      {
        source: '/category/:path*',
        headers: [cacheControl30Min],
      },
      {
        source: '/topic',
        headers: [cacheControl30Min],
      },
      // 7 days
      {
        source: '/story/:path*',
        headers: [cacheControl7Day],
      },
      {
        source: '/external/:path*',
        headers: [cacheControl7Day],
      },
      // public assets
      {
        source: '/icons/:path*',
        headers: [cacheControlAssets],
      },
      {
        source: '/images-next/:path*',
        headers: [cacheControlAssets],
      },
    ]
  },
  poweredByHeader: false,
}

export default nextConfig
