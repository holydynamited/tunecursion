
import {type Media } from "../../lib/types/media"

type Props = Media


export default function MediaCard(props:Props) {
    const { type, name, photoSrc, rating, ratingCount } = props

if (type === 'artist') {

  return (
    <button className="
    inline-flex
    w-[268px]
    flex-col
    items-start
    gap-tc-8
    rounded-sm
    hover:bg-muted
    p-4

    hover:cursor-pointer

    focus-visible:outline-2
    focus-visible:outline-accent
  ">
      <div className="h-[236px] w-[236px] bg-muted relative " >
        <img draggable={false} className="pointer-events-none select-none object-cover" src={photoSrc} alt="" />
      </div>

       <div className="font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
        {name}
      </div> 

      <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
       Artist
      </div>


      <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
        ★ {rating} · {ratingCount}
      </div>
    </button>
  )
}
const {artistName} = props
return(
    <button className="
    inline-flex
    w-[268px]
    flex-col
    items-start
    gap-tc-8
    rounded-sm
    hover:bg-muted
    p-4

    hover:cursor-pointer

    focus-visible:outline-2
    focus-visible:outline-accent
  ">
      <div className="h-[236px] w-[236px] bg-muted relative mx-auto" >
        <img draggable={false} className="pointer-events-none select-none object-cover" src={photoSrc} />
      </div>

       <div className="font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
       {name}
      </div>   

      <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
        {artistName}
      </div>

      <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
        ★ {rating} · {ratingCount} ratings
      </div>
    </button>
)
}
