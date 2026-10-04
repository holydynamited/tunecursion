type Props = {
  label: number
  value: number
}

export default function RatingDistributionRow({ label, value }: Props) {
  const position = Math.min(100, Math.max(0, value))

  return (
    <div className="inline-flex h-[20px] w-full items-center gap-tc-8 overflow-hidden">
      <div className="font-body text-tc-14 font-medium leading-tc-20 text-text-secondary">
        {label}
      </div>

      <div className="relative h-[6px] flex-1 overflow-hidden rounded-full bg-muted">
        <div
          className="absolute left-0 top-0 h-[6px] rounded-full bg-accent"
          style={{ width: `${position}%` }}
        />
      </div>

      <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
        {value}%
      </div>
    </div>
  )
}