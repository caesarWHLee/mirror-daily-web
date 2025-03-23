import TopicMain from './topic-main'
import WeatherMain from './weather-main'
import { fetchTopics, fetchWeather } from '@/app/actions'

export default async function TopicSection() {
  const topicData = await fetchTopics()
  const weatherData = await fetchWeather()

  return (
    <section className="section-in-homepage mb-9 mt-6 flex flex-col gap-y-6 md:my-9 md:gap-y-9 lg:my-10 lg:gap-y-[50px]">
      {weatherData && <WeatherMain data={weatherData} />}
      {topicData && <TopicMain data={topicData} />}
    </section>
  )
}
