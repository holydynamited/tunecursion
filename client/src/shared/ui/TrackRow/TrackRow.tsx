
type Props = {
   number: number
  title: string
  duration: string
  rating: number
}


export default function TrackRow({number, title, duration, rating}:Props){
return(
<div className="inline-flex h-full w-full items-center gap-tc-16 border-t border-border px-tc-12">
  <div className="w-[32px] font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
    {String(number).padStart(2, "0")}
  </div>

  <div className="flex-1 font-body text-tc-16 font-normal leading-tc-24 text-text-primary">
    {title}
  </div>

  <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
    {duration}
  </div>

  <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
    ★ {rating}
  </div>
</div>

)
}