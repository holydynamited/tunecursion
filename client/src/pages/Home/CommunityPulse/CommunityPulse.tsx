import ActivityRow from "../../../shared/ui/ActivityRow/ActivityRow"

import DiscussionRow from "../../../shared/ui/DiscussionRow/DiscussionRow"

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

    <div className="inline-flex flex-1 flex-col items-start">
      <div className="inline-flex w-full flex-col items-start">
  <div className="w-full font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted mb-2">
    POPULAR DISCUSSIONS
  </div>

  <DiscussionRow
    title="What makes a “grower” actually grow?"
    replies={148}
    category="perception"
    time="12m"
  />

  <DiscussionRow
    title="Albums whose sequencing changes the rating"
    replies={93}
    category="albums"
    time="1h"
  />

  <DiscussionRow
    title="Is cohesion overrated?"
    replies={76}
    category="dimensions"
    time="3h"
  />

  <DiscussionRow
    title="Best community lists for minimal wave"
    replies={52}
    category="lists"
    time="6h"
  />

  <DiscussionRow
    title="The case for rating tracks separately"
    replies={39}
    category="product"
    time="9h"
  />
</div>
    </div>
  </div>
</div>
  )
}

export default CommunityPulse
