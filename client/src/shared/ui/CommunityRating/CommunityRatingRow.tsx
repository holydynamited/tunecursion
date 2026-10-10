type Props = {
  label: number
  value: number
  variant?: 'default' | 'community'
}

export default function CommunityRatingRow({
  label,
  value,
  variant = 'default',
}: Props) {
  const position = Math.min(100, Math.max(0, value))
  const isCommunity = variant === 'community'

  return (
    <div className="inline-flex h-[20px] w-full items-center gap-tc-8 overflow-hidden">
      <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
        {label}{isCommunity && ' ★'}
      </div>

      <div
        className={`
          relative
          overflow-hidden
          rounded-full
          bg-muted
          ${isCommunity ? 'h-[4px] w-56' : 'h-[6px] flex-1'}
        `}
      >
        <div
          className={`
            absolute
            left-0
            top-0
            rounded-full
            ${isCommunity ? 'h-[4px]' : 'h-[6px]'}
            ${label === 5 && isCommunity ? 'bg-accent' : isCommunity ? 'bg-text-muted' : 'bg-accent'}
          `}
          style={{ width: `${position}%` }}
        />
      </div>

      {!isCommunity && (
        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          {value}%
        </div>
      )}
    </div>
  )
}