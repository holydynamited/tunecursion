import MediaCard from '../../../shared/ui/MediaCard/MediaCard'
import Tag from "../../../shared/ui/Tag/Tag"

import wlr from '../../../assets/wlr.jpg'



const ForYou = () => {
  return (
<div className="inline-flex w-[1440px] flex-col items-start gap-9 bg-canvas px-28 py-tc-64 mb-tc-32">
  <div className="inline-flex w-[1216px] items-center justify-between">
    <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
      For You
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
      Tune recommendations
    </div>
  </div>

  <div className="inline-flex w-[1216px] items-center justify-start gap-tc-48">
    <div className="inline-flex w-96 flex-col items-start gap-tc-16">
      <div className="w-96 font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-accent">
        BASED ON YOUR RATINGS
      </div>

      <div className="w-96 font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
        More tension, less polish.
      </div>

      <div className="w-96 font-body text-tc-18 font-normal leading-tc-28 text-text-secondary">
        You rate immersive, cohesive records higher—but tend to avoid work the
        community calls overly uniform.
      </div>

      <div className="inline-flex w-96 flex-wrap content-center items-center justify-start gap-tc-8">
        <Tag>immersive</Tag>
        <Tag>cohesive</Tag>
        <Tag>grower</Tag>
        <Tag>textural</Tag>
      </div>

      <div className="w-96 font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
        No Taste Match percentages yet—just transparent reasons you can edit.
      </div>
    </div>

    <div className="flex w-[808px] items-center justify-start gap-tc-20">
      <MediaCard
        type="album"
        name="Vast Interface"
        artistName="Signal Arc"
        photoSrc={wlr}
        rating={8.4}
        ratingCount={0}
      />

      <MediaCard
        type="album"
        name="Echo Chamber"
        artistName="Mara Senn"
        photoSrc={wlr}
        rating={8.3}
        ratingCount={0}
      />

      <MediaCard
        type="album"
        name="Public Memory"
        artistName="Narrowcast"
        photoSrc={wlr}
        rating={8.2}
        ratingCount={0}
      />
    </div>
  </div>
</div>
  )
}

export default ForYou
