export type ExternalPost = {
  title: string
  thumb: string
  partner: string
  externalsLink: string
  publishedTime: string
  brief: string
  content: string
  tags: {
    name: string
    slug: string
  }[]
  link: string
  sectionName: string
}

export type PostIntro = Omit<ExternalPost, 'brief' | 'content'>
