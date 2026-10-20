type Props = {
  title: string
  replies: number
  category: string
  time: string
}

export default function DiscussionRow({
  title,
  replies,
  category,
  time,
}: Props) {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-tc-8 border-t border-border py-tc-16 sm:flex-row sm:items-center sm:gap-tc-24">
      <div className="min-w-0 flex-1">
        <div className="font-body text-tc-16 font-normal leading-tc-24 text-text-primary">
          {title}
        </div>
      </div>

      <div className="flex max-w-full flex-wrap items-center gap-x-tc-20 gap-y-tc-4 sm:shrink-0">
        <div className="whitespace-nowrap font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          {replies} replies
        </div>

        <div className="whitespace-nowrap font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          {category}
        </div>

        <div className="w-8 whitespace-nowrap text-right font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          {time}
        </div>
      </div>
    </div>
  )
}
