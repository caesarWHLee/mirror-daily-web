import FeaturedNewsCard from './featured-news-card'
import { fetchPopularPost } from '@/app/actions-general'

export default async function PopularNewsSection(): Promise<JSX.Element | null> {
  const articles = await fetchPopularPost()
  if (!articles.length) return null

  return (
    <section className="hidden md:flex md:w-[588px] md:flex-col md:items-center md:gap-y-[31px] lg:w-[240px] lg:gap-y-[19px]">
      <p className="text-lg font-bold leading-normal text-[#674ab1]">
        熱門新聞
      </p>
      <div className="grid md:grid-cols-2 md:gap-7 lg:grid-cols-1 lg:gap-y-5">
        {articles &&
          articles.map((item) => (
            <FeaturedNewsCard {...item} key={item.postId} />
          ))}
      </div>
    </section>
  )
}
