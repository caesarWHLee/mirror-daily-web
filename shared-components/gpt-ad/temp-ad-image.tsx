import Image from 'next/image'

export default function TempAdImage({
  slotKey,
  customClasses = '',
}: {
  slotKey: string
  customClasses?: string
}) {
  const { url: adImageUrl, width, height } = getAdImageInfo(slotKey)

  return (
    <a
      href="https://www.mirrordaily.news/story/16"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center ${customClasses}`}
    >
      <Image src={adImageUrl} alt={slotKey} width={width} height={height} />
    </a>
  )
}

const getAdImageInfo = (slotKey: string) => {
  const adKey = slotKey.split('_')
  const baseUrl =
    'https://storage.googleapis.com/statics-dev.mirrordaily.news/ads_image/'
  const adImagePrefix = '0414-BN'
  switch (true) {
    case adKey.includes('970x250'):
      return {
        url: `${baseUrl}${adImagePrefix}-970x250.jpg`,
        width: 970,
        height: 250,
      }
    case adKey.includes('728x90'):
      return {
        url: `${baseUrl}${adImagePrefix}-728x90.jpg`,
        width: 728,
        height: 90,
      }
    case adKey.includes('640x390'):
      return {
        url: `${baseUrl}${adImagePrefix}-640x390.jpg`,
        width: 640,
        height: 390,
      }
    case adKey.includes('336x280'):
      return {
        url: `${baseUrl}${adImagePrefix}-336x280.jpg`,
        width: 336,
        height: 280,
      }
    case adKey.includes('320x100'):
      return {
        url: `${baseUrl}${adImagePrefix}-320x100.jpg`,
        width: 320,
        height: 100,
      }
    case adKey.includes('300x600'):
      return {
        url: `${baseUrl}${adImagePrefix}-300x600.jpg`,
        width: 300,
        height: 600,
      }
    default:
      return {
        url: '',
        width: 0,
        height: 0,
      }
  }
}
