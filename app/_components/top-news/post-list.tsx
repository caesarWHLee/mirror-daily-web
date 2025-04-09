import type {
  ItemInTopNewsSection,
  PickupItemInTopNewsSection,
} from '@/types/homepage'
import HighlightItem from './highlight-item'
import ListItem from './list-item'

type Props = {
  list: [PickupItemInTopNewsSection | undefined, ...ItemInTopNewsSection[]]
}

export default function PostList({ list }: Props) {
  const [highlight, ...others] = list

  if (!highlight) return null

  return (
    <div className="mt-4 flex w-full flex-col gap-y-[34px] md:flex-row lg:mt-3">
      <HighlightItem {...highlight} />
      <div className="flex flex-col gap-y-3 md:ml-6 md:gap-y-2 lg:ml-5 lg:mt-[3px] lg:border-l-[0.5px] lg:border-l-[#000928] lg:pl-[21px]">
        {others.map((post) => (
          <ListItem key={post.postId} {...post} />
        ))}
      </div>
    </div>
  )
}
