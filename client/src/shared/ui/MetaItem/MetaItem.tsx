type Props = {
  label: string
  value: string
}

export default function MetaItem({ label, value }: Props) {
  return (
    <div className="inline-flex w-64 flex-col items-start gap-tc-4 overflow-hidden">
      <div className="font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
        {label}
      </div>

      <div className="font-body text-tc-16 font-normal leading-tc-24 text-text-primary">
        {value}
      </div>
    </div>
  )
}