import RatingDistribution from "../../../shared/ui/RatingDistribution/RatingDistribution"
import DimensionRow from "../../../shared/ui/DimensionRow/DimensionRow"
import Tag from "../../../shared/ui/Tag/Tag"

export default function CommunityPerception(){

    return(
        <div className="flex w-full flex-col items-start gap-tc-32 overflow-hidden bg-canvas px-tc-64 py-tc-48">
  <div className="flex w-full items-center justify-between">
    <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
      Community perception
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
      Based on 18,429 ratings
    </div>
  </div>

  <div className="flex w-full items-start gap-tc-48 overflow-hidden">
    <div className="w-96 shrink-0">
     <RatingDistribution
  text="Community scores lean strongly positive, with a narrow disagreement band."
  ratings={[
    { label: 5, value: 48 },
    { label: 4, value: 31 },
    { label: 3, value: 13 },
    { label: 2, value: 6 },
    { label: 1, value: 2 },
  ]}
/>
    </div>

    <div className="flex flex-1 flex-col items-start gap-tc-16 overflow-hidden">
      <div className="font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
        Album dimensions
      </div>

      <div className="grid w-full grid-cols-2 gap-x-tc-24">
        <DimensionRow
          leftLabel="Instant"
          rightLabel="Grower"
          value={62}
        />

        <DimensionRow
          leftLabel="Occasional"
          rightLabel="Addictive"
          value={62}
        />

        <DimensionRow
          leftLabel="Familiar"
          rightLabel="Experimental"
          value={62}
        />

        <DimensionRow
          leftLabel="Detached"
          rightLabel="Emotional"
          value={62}
        />

        <DimensionRow
          leftLabel="Uneven"
          rightLabel="Consistent"
          value={62}
        />

        <DimensionRow
          leftLabel="Uniform"
          rightLabel="Diverse"
          value={62}
        />

        <DimensionRow
          leftLabel="Loose"
          rightLabel="Cohesive"
          value={62}
        />

        <DimensionRow
          leftLabel="Casual"
          rightLabel="Immersive"
          value={62}
        />
      </div>
    </div>
  </div>

  <div className="flex items-center gap-tc-12 overflow-hidden">
    <div className="font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
      MOST ASSOCIATED WITH
    </div>

    <Tag>dark</Tag>
    <Tag>experimental</Tag>
    <Tag>atmospheric</Tag>
  </div>
</div>
    )
}