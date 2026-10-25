import RankedMediaRow from "../../../shared/ui/RankedMediaRow/RankedMediaRow"
import wlr from '../../../assets/wlr.jpg'

const TrendingInCommunity = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-9 bg-canvas px-tc-20 py-tc-48 sm:px-tc-32 lg:px-tc-64 xl:px-28 xl:py-tc-64">
  <div className="flex w-full flex-col items-start gap-tc-8 sm:flex-row sm:items-center sm:justify-between">
    <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
      Trending in the Community
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
      See the full chart
    </div>
  </div>

  <div className="grid w-full grid-cols-1 items-start gap-tc-48 lg:grid-cols-[minmax(0,488px)_minmax(0,680px)]">
    <div className="flex w-full flex-col items-start gap-tc-16">
      <img
        className="aspect-[488/278] w-full object-cover"
        src="https://placehold.co/488x278"
        alt=""
        draggable={false}
      />

      <div className="w-full font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-accent">
        THE ALBUM MOVING UP WITHOUT A VIRAL SINGLE
      </div>

      <div className="w-full font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
        Vast Interface
      </div>

      <div className="w-full font-body text-tc-16 font-normal leading-tc-24 text-text-secondary">
        Signal Arc · 8.4 community rating
      </div>

      <div className="w-full font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
        A patient rise driven by long reviews, late-night lists and word of
        mouth.
      </div>
    </div>

    <div className="flex min-w-0 w-full flex-col items-start">
      <div className="w-full font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
        THIS WEEK / COMMUNITY MOMENTUM
      </div>

      <RankedMediaRow
        type="album"
        rank={1}
        imageSrc={wlr}
        title="Vast Interface"
        artistName="Signal Arc"
        score={8.4}
        change={11}
      />

      <RankedMediaRow
        type="album"
        rank={2}
        imageSrc={wlr}
        title="Vast Interface"
        artistName="Signal Arc"
        score={8.4}
        change={11}
      />

      <RankedMediaRow
        type="album"
        rank={3}
        imageSrc={wlr}
        title="Echo Chamber"
        artistName="Mara Senn"
        score={8.3}
        change={0}
      />

      <RankedMediaRow
        type="track"
        rank={4}
        imageSrc={wlr}
        title="Signal Fires"
        artistName="Kairo Veil"
        score={8.7}
        change={7}
      />

      <RankedMediaRow
        type="track"
        rank={5}
        imageSrc={wlr}
        title="Red Corridor"
        artistName="Low Relay"
        score={8.1}
        change={2}
      />

      <RankedMediaRow
        type="album"
        rank={6}
        imageSrc={wlr}
        title="Public Memory"
        artistName="Narrowcast"
        score={8.0}
        change={-1}
      />
    </div>
  </div>
</div>
  )
}

export default TrendingInCommunity
