import { fetchHeaderData, fetchLatestPost } from '@/app/actions-general'
import UiHeader from './header/ui-header'

export default async function Header() {
  const data = await fetchHeaderData()
  const latestPosts = (await fetchLatestPost()).slice(0, 6)

  return <UiHeader data={data} latestPosts={latestPosts} />
}
