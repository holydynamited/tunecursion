import CollectionCard from "../../../shared/ui/CollectionCard/CollectionCard"

import wlr from '../../../assets/wlr.jpg'

const CommunityLists = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-9 bg-canvas px-tc-20 py-tc-48 sm:px-tc-32 lg:px-tc-64 xl:px-28 xl:py-tc-64">
  <div className="flex w-full flex-col items-start gap-tc-8 sm:flex-row sm:items-center sm:justify-between">
    <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
      Community Lists & Collections
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
      Browse all lists
    </div>
  </div>

  <div className="w-full font-body text-tc-16 font-normal leading-tc-24 text-text-secondary">
    Curated arguments, scenes and listening paths—not automated playlists.
  </div>

  <div className="grid w-full grid-cols-1 items-stretch gap-tc-24 md:grid-cols-2 lg:grid-cols-3">
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

export default CommunityLists
