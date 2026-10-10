import type { Media } from "../../lib/types/media"
import MediaCard from "../MediaCard/MediaCard"

type Props = {
  items: Media[]
  title: string
  releasesCount: number
}

export default function MediaRow({
  items,
  title,
  releasesCount,
}: Props) {
  return (
    <div className="flex self-stretch flex-col gap-tc-16 overflow-hidden">
      
      <div className="inline-flex self-stretch items-center justify-between">
        <div className="font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
          {title}
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-accent">
          {releasesCount} releases
        </div>
      </div>

      <div className="inline-flex items-start justify-start gap-tc-32 overflow-hidden">
        {items.map((item) => (
          <MediaCard
            key={`${item.type}-${item.name}`}
            {...item}
          />
        ))}
      </div>
      
    </div>
  )
}