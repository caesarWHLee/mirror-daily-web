import Script from 'next/script'
import SearchComponent from './_components/search-component'

export default function GcseSearch() {
  return (
    <div>
      <SearchComponent />
      <Script
        src="https://cse.google.com/cse?cx=e066f4a8bda3647c4"
        async={true}
      />
    </div>
  )
}
