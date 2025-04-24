import { ENV } from '@/constants/config'
import SearchComponent from './_components/search-component'
import { notFound } from 'next/navigation'

export default function GcseSearch() {
  if (ENV === 'staging' || ENV === 'prod') notFound()
  return (
    <div>
      <SearchComponent />
    </div>
  )
}
