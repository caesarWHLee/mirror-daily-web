import type { LatestPost } from './common'

export type ItemInTopNewsSection = Pick<
  LatestPost,
  | 'categoryName'
  | 'categoryColor'
  | 'postName'
  | 'postId'
  | 'publishedDate'
  | 'link'
>

export type PickupItemInTopNewsSection = Pick<
  LatestPost,
  'postName' | 'heroImage' | 'link'
>

export type FlashNews = Pick<LatestPost, 'postId' | 'postName' | 'link'>

export type EditorChoice = Pick<
  LatestPost,
  'postName' | 'postId' | 'link' | 'heroImage'
>

export type TopicPost = Pick<
  LatestPost,
  'postName' | 'postId' | 'link' | 'heroImage'
> & {
  topicLink: string
}

export type CityAndWeather = {
  [city: string]: {
    date: string
    maxTemp: number
    minTemp: number
    weatherDesc: string
    weatherCode: string
    weather: string
    fetchTime: string
  }
}
