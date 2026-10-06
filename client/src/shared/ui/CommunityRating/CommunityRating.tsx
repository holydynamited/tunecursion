import CommunityRatingRow from './CommunityRatingRow'
import { type RatingItem } from '../../lib/types/rating'

type RatingType = 'default'|'community'


type Props ={
    averageRating:number,
    ratingCount:number,
    type?:RatingType,
    ratings:RatingItem[]

}

export default function CommunityRating({averageRating,ratingCount, type='default', ratings}:Props){
    return(
        <div className="inline-flex w-72 flex-col items-start gap-tc-8 overflow-hidden">
      <div className="font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
        COMMUNITY RATING
      </div>

      <div className="inline-flex items-baseline gap-tc-8 overflow-hidden">
        <div className="font-display text-tc-48 font-medium leading-tc-52 text-accent">
          {averageRating}
        </div>

        <div className="font-display text-tc-20 font-medium leading-tc-28 text-text-secondary">
          / 5
        </div>
      </div>

      <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
        {ratingCount} ratings
      </div>

      <div className="flex w-full flex-col items-start gap-tc-4 overflow-hidden">

      {ratings.map((item) => (
          <CommunityRatingRow
            key={item.label}
            label={item.label}
            value={item.value}
            variant={type}
          />
        ))}
</div>

    </div>
    )
}