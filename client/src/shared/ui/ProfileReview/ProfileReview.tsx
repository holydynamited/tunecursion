import type { MediaType } from "../../lib/types/media"


type Props = {
  type:MediaType
  mediaName: string
  artistName: string
  photoSrc: string
  rating: number
  reviewText: string
  helpfulCount: number
  createdAt: string
}



export default function ProfileReview(
    {
        type,
        mediaName,
        artistName,
        photoSrc,
        rating,
        reviewText,
        helpfulCount,
        createdAt,
    }
    :
    Props
    )
    {

    return(
    <div
  className="
    inline-flex
    w-full
    items-center
    gap-tc-20
    border-b
    border-border
    py-tc-16
    px-tc-12
    hover:bg-muted
    rounded-sm
    
  "
>
  <img
    src={photoSrc}
    alt=""
    draggable={false}
    className="h-[112px] w-[112px] shrink-0 object-cover pointer-events-none select-none"
  />

  <div className="inline-flex min-w-0 flex-1 flex-col items-start gap-tc-8 overflow-hidden ">
    <div className="flex w-full items-start justify-between overflow-hidden">
      <div className="font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
        {type==='artist'?artistName:mediaName}
      </div>

      <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
        {rating} / 5
      </div>
    </div>

    <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
      {type==='artist'?'':artistName+'·'} {type[0].toUpperCase() + type.slice(1)}
    </div>

    <div className="max-w-[1060px] font-body text-tc-16 font-normal leading-tc-24 text-text-secondary">
      {reviewText}
    </div>

    <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
      {helpfulCount} helpful · {createdAt}
    </div>
  </div>
</div>)
}
