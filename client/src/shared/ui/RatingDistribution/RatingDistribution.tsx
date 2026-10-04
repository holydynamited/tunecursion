import RatingDistributionRow from "./RatingDistributionRow"

type sizes = 'sm'|'st'|'wide'
// type densities = 'def'|'wide'
type RatingItem = {
  label: number
  value: number
}

type Props = {
    size?:sizes
    // density?:densities
    text:string
    ratings: RatingItem[]


}


const RatingDistributionSizes:Record<sizes, string> = {
    sm:'w-[320px] h-[320px] gap-tc-16',
    st:'w-[360px] h-[312px] gap-tc-16',
    wide:'w-[500px] h-[316px] gap-tc-20'
}

export default function RatingDistribution({size = 'st',  text, ratings}:Props){
    return(
        <div
  className={`
    inline-flex
    ${RatingDistributionSizes[size]}
    
    flex-col
    items-start
    rounded-sm
    overflow-hidden
    bg-surface
    p-tc-24


    `
  }
>
  <div className="font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
    Rating distribution
  </div>

  <div className="w-[272px] font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
   {text}
  </div>

  <div className="flex w-full flex-col items-start gap-tc-8 overflow-hidden">
    {ratings.map((item) => (
        <RatingDistributionRow
          key={item.label}
          label={item.label}
          value={item.value}
        />
      ))}
  </div>
</div>
    )
}