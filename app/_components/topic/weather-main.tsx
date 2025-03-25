'use client'
import NextImage from 'next/image'
import arrowUp from '@/public/icons/weather/arrow-up.svg'
import arrowDown from '@/public/icons/weather/arrow-down.svg'
import { useState } from 'react'
import IconSunny from '@/public/icons/weather/sunny.svg'
import IconCloudy from '@/public/icons/weather/cloudy.svg'
import IconOvercast from '@/public/icons/weather/overcast.svg'
import IconShower from '@/public/icons/weather/shower.svg'
import IconThunderStorm from '@/public/icons/weather/thunderstorm.svg'
import IconRain from '@/public/icons/weather/rain.svg'
import IconSnow from '@/public/icons/weather/snow.svg'
import IconWeatherUnknown from '@/public/icons/weather/unknown.svg'
import type { CityAndWeather } from '@/types/homepage'

const weatherToImage = {
  晴: IconSunny,
  多雲: IconCloudy,
  陰: IconOvercast,
  陣雨: IconShower,
  雷陣雨: IconThunderStorm,
  雨: IconRain,
  雪: IconSnow,
  未知: IconWeatherUnknown,
} as const

type Props = {
  data: CityAndWeather
}
export default function WeatherMain({ data }: Props) {
  const cities = Object.keys(data)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState(cities?.[0] ?? '')

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleCitySelect = (city: string) => {
    setSelectedCity(city)
    setIsDropdownOpen(false)
  }

  const info = data[selectedCity]

  if (!info) return null

  return (
    <div className="flex w-full justify-center">
      <div className="relative flex h-[50px] w-full max-w-[304px] items-center bg-[#f6f6fb] leading-none shadow-[0_2px_2px_0_rgba(0,0,0,0.1)] md:max-w-[680px]">
        <p className="ml-[7px] mr-5 text-base font-medium text-[#7f8493] md:ml-5 md:mr-[318px]">
          今日天氣
        </p>
        <button
          className={`group mr-4 flex gap-x-4 text-base font-bold hover-or-active:text-[#674ab1] md:mr-[33px] md:gap-x-3 lg:mr-10 ${
            isDropdownOpen ? 'text-[#674ab1]' : 'text-[#2b2b2b]'
          }`}
          onClick={toggleDropdown}
        >
          <p>{selectedCity}</p>
          <NextImage
            src={arrowUp}
            width={16}
            height={16}
            className={`block ${isDropdownOpen ? 'hidden' : ''} group-hover:hidden`}
            alt="箭頭"
          />
          <NextImage
            src={arrowDown}
            width={16}
            height={16}
            alt="箭頭"
            className={`block ${isDropdownOpen ? '' : 'hidden'} group-hover:block`}
          />
        </button>
        {/* mobile */}
        <NextImage
          src={
            weatherToImage[info.weather as keyof typeof weatherToImage] ||
            IconWeatherUnknown
          }
          width={18}
          height={18}
          alt="天氣圖示"
          className="mr-4 md:hidden"
        />
        {/* tablet and desktop */}
        <NextImage
          src={
            weatherToImage[info.weather as keyof typeof weatherToImage] ||
            IconWeatherUnknown
          }
          width={34}
          height={34}
          alt="天氣圖示"
          className="hidden md:mr-[33px] md:block lg:mr-[25px]"
        />
        <p className="mr-4 text-2xl font-bold text-[#2b2b2b] md:mr-5">
          {info.maxTemp}º
        </p>
        <p className="text-base font-bold text-[#7f8493]">{info.minTemp}º</p>
        {isDropdownOpen && (
          <ul className="absolute left-[68px] top-full z-city-selection-box h-[91px] w-[100px] cursor-pointer overflow-y-auto bg-[#f6f6fb] px-[26px] pt-[11px] md:left-[378px] md:h-[196px]">
            {cities.map((city) => (
              <li
                className="whitespace-nowrap pb-4 text-base font-medium hover-or-active:text-[#674ab1]"
                key={city}
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
