import ActivityRow from "../../../shared/ui/ActivityRow/ActivityRow"

const CommunityPulse = () => {
  return (
    <div className="inline-flex w-[1440px] flex-col items-start gap-9 bg-canvas px-28 py-tc-64">
  <div className="inline-flex w-[1216px] items-center justify-between">
    <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
      Community Pulse
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
      View all activity
    </div>
  </div>

  <div className="inline-flex w-[1216px] items-center justify-start gap-tc-48">
    <div className="inline-flex w-[744px] flex-col items-start gap-tc-24">
      <div className="flex w-[744px] flex-col items-start gap-tc-16 bg-surface p-7">
        <div className="w-[688px] font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-accent">
          REVIEW OF THE DAY
        </div>

        <div className="w-[688px] font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
          “The record’s real hook is the way it makes uncertainty feel architectural.”
        </div>

        <div className="w-[688px] font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          framebyframe on Nocturne Static · 9.1 · 312 helpful
        </div>
      </div>

      <div className="w-[744px] font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
        RECENT ACTIVITY
      </div>

      <ActivityRow
        userName="Mina K."
        actionText="rated Signal Fires 9.2"
        time="2m"
      />

      <ActivityRow
        userName="tapeghost"
        actionText="added Vast Interface to Mechanical tenderness"
        time="18m"
      />

      <ActivityRow
        userName="oxide"
        actionText="reviewed Echo Chamber"
        time="41m"
      />

      <ActivityRow
        userName="iris.scan"
        actionText="started a discussion in Kairo Veil"
        time="1h"
      />
    </div>

    <div className="inline-flex w-96 flex-col items-start">
      <div className="w-96 font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
        POPULAR DISCUSSIONS
      </div>

      <div className="inline-flex h-16 self-stretch items-center justify-start gap-tc-24 border-t border-border px-tc-12">
        <div className="flex-1 font-body text-tc-16 font-normal leading-tc-24 text-text-primary">
          What makes a “grower” actually grow?
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          148 replies
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          perception
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          12m
        </div>
      </div>

      <div className="inline-flex h-16 self-stretch items-center justify-start gap-tc-24 border-t border-border px-tc-12">
        <div className="flex-1 font-body text-tc-16 font-normal leading-tc-24 text-text-primary">
          Albums whose sequencing changes the rating
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          93 replies
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          albums
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          1h
        </div>
      </div>

      <div className="inline-flex h-16 self-stretch items-center justify-start gap-tc-24 border-t border-border px-tc-12">
        <div className="flex-1 font-body text-tc-16 font-normal leading-tc-24 text-text-primary">
          Is cohesion overrated?
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          76 replies
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          dimensions
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          3h
        </div>
      </div>

      <div className="inline-flex h-16 self-stretch items-center justify-start gap-tc-24 border-t border-border px-tc-12">
        <div className="flex-1 font-body text-tc-16 font-normal leading-tc-24 text-text-primary">
          Best community lists for minimal wave
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          52 replies
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          lists
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          6h
        </div>
      </div>

      <div className="inline-flex h-16 self-stretch items-center justify-start gap-tc-24 border-t border-border px-tc-12">
        <div className="flex-1 font-body text-tc-16 font-normal leading-tc-24 text-text-primary">
          The case for rating tracks separately
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          39 replies
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          product
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          9h
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CommunityPulse
