import CollectionCard from "../CollectionCard/CollectionCard"

import wlr from '../../../assets/wlr.jpg'

const ForYou = () => {
  return (
<div className="inline-flex w-[1440px] flex-col items-start gap-9 bg-canvas px-28 py-tc-64">
  <div className="inline-flex w-[1216px] items-center justify-between">
    <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
      Community Lists & Collections
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
      Browse all lists
    </div>
  </div>

  <div className="w-[1216px] font-body text-tc-16 font-normal leading-tc-24 text-text-secondary">
    Curated arguments, scenes and listening paths—not automated playlists.
  </div>

  <div className="inline-flex w-[1216px] items-center justify-start gap-tc-24">
    <CollectionCard
      mainImage={wlr}
      sideImageTop={wlr}
      sideImageBottom={wlr}
      title="MACHINES LEARNING TO GRIEVE"
      releaseCount={24}
      author="lowlight"
    />

    <CollectionCard
      mainImage={wlr}
      sideImageTop={wlr}
      sideImageBottom={wlr}
      title="ALBUMS FOR THE LAST TRAIN HOME"
      releaseCount={31}
      author="Mina K."
    />

    <CollectionCard
      mainImage={wlr}
      sideImageTop={wlr}
      sideImageBottom={wlr}
      title="WHEN THE MIX IS PART OF THE STORY"
      releaseCount={18}
      author="tapeghost"
    />
  </div>
</div>
  )
}

export default ForYou
