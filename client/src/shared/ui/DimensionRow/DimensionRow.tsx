
type Props = {
    leftLabel:string;
    rightLabel:string;
    value:number
}
export default function DimensionRow({leftLabel,rightLabel, value}:Props){

    const position = Math.min(100, Math.max(0, value))

    return(
        <div className="inline-flex h-full w-full items-center justify-start gap-tc-16">

  <div className="w-[88px] font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
    {leftLabel}
  </div>

  <div className="relative h-[12px] flex-1 overflow-hidden">

    <div className="
      absolute left-0 top-[4px]
      h-[4px] w-full
      rounded-full bg-muted
    " />

    <div className="
      absolute left-0 top-[4px]
      h-[4px] 
      rounded-full bg-accent-dim

      
    " 
     style={{ width: `${position}%` }}/>

    <div className="
      absolute  top-0
      h-[12px] w-[12px]
      rounded-full bg-accent
      -translate-x-1/2
    " 
     style={{ left: `${position}%` }}
    />

  </div>

  <div className="w-[88px] font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
    {rightLabel}
  </div>

</div>
    )
}

