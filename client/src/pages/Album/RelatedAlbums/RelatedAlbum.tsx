
import MediaCard from "../../../shared/ui/MediaCard/MediaCard"
import wlr from '../../../assets/wlr.jpg'



export default function RelatedAlbums(){
    return(
        <div className="flex w-full flex-col items-start gap-tc-32 overflow-hidden bg-canvas px-tc-64 py-tc-48">
  <div className="flex w-full items-center justify-between">
    <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
      People may also like
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
      View all →
    </div>
  </div>

  <div className="font-body text-tc-16 font-normal leading-tc-24 text-text-secondary">
    Albums frequently saved by the same listeners
  </div>

  <div className="flex w-full items-start gap-tc-32 overflow-hidden">
    <MediaCard
      type="album"
      name="Vast Interface"
      artistName="Marlowe"
      photoSrc={wlr}
      rating={4.3}
      ratingCount={6217}
    />

    <MediaCard
      type="album"
      name="Chromatic Decay"
      artistName="Sewerperson"
      photoSrc={wlr}
      rating={4.1}
      ratingCount={9482}
    />

    <MediaCard
      type="album"
      name="Echo Chamber"
      artistName="BONES"
      photoSrc={wlr}
      rating={4.4}
      ratingCount={12306}
    />

    <MediaCard
      type="album"
      name="Signal Loss"
      artistName="Zeloperz"
      photoSrc={wlr}
      rating={4.0}
      ratingCount={7915}
    />

    <MediaCard
      type="album"
      name="Empty Frequency"
      artistName="Quadeca"
      photoSrc={wlr}
      rating={4.2}
      ratingCount={11893}
    />
  </div>
</div>
    )
}