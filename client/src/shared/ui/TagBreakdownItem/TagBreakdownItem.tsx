type Props = {
  label: string
  value: number
}

export default function TagBreakdownItem({
  label,
  value,
}: Props) {
  const position = Math.min(100, Math.max(0, value))

  return (
    <div className="inline-flex w-60 flex-col items-start gap-tc-8 overflow-hidden">
      <div className="inline-flex h-5 w-full items-start justify-between overflow-hidden">
        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-primary">
          {label}
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          {value}%
        </div>
      </div>

      <div className="relative h-[6px] w-full overflow-hidden rounded-full bg-muted">
        <div
          className="absolute left-0 top-0 h-[6px] rounded-full bg-accent"
          style={{ width: `${position}%` }}
        />
      </div>
    </div>
  )
}