
import { type ReleaseType } from "../../lib/types/release"

type Props ={
 
    type:ReleaseType;
    name:string;
    trackCount:number;
    releaseYear:number;
    rating:number;
    imageStr:string



}


const ReleaseVariant:Record<ReleaseType, string> ={
    album:"Album",
    ep:"EP",
    mixtape:"Mixtape",
    single:"Single",
    compilation:"Compilation",
    live:"Live"
}


export default function ReleaseRow({type, name, trackCount, releaseYear, rating, imageStr}:Props){

    return(
        <div className="inline-flex h-full w-full items-start gap-tc-48 overflow-hidden">

  <div className="
    flex h-[96px] w-[1028px]
    items-center gap-tc-16
    border-b border-border
    py-tc-12
  ">

    <div className="h-[72px] w-[72px] bg-muted" >
        <img className='w-full h-full pointer-events-none select-none object-cover' src={imageStr} draggable={false}alt="" />
    </div>



    <div className="
      inline-flex flex-1
      flex-col items-start
      gap-tc-4 overflow-hidden
    ">
      <div className="
        font-body
        text-tc-18 font-normal
        leading-tc-28
        text-text-primary
      ">
       {name}
      </div>

      <div className="
        font-body
        text-tc-14 font-normal
        leading-tc-20
        text-text-secondary
      ">
        {ReleaseVariant[type]} · {trackCount} {trackCount>1?"tracks":"track"}
      </div>
    </div>

    <div className="
      w-[72px] text-right
      font-body
      text-tc-14 font-normal
      leading-tc-20
      text-text-muted
    ">
      {releaseYear}
    </div>

    <div className="
      w-[88px] text-right
      font-body
      text-tc-14 font-normal
      leading-tc-20
      text-text-secondary
    ">
      {ReleaseVariant[type]}
    </div>

    <div className="
      w-[88px] text-right
      font-body
      text-tc-14 font-normal
      leading-tc-20
      text-accent
    ">
      ★ {rating}
    </div>

  </div>

</div>
    )
}