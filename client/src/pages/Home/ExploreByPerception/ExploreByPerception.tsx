

import PerceptionPath from '../../../shared/ui/PerceptionPath/PerceptionPath'

const ExploreByPerception = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-9 bg-canvas px-tc-20 py-tc-48 sm:px-tc-32 lg:px-tc-64 xl:px-28 xl:py-tc-64">
  <div className="flex w-full flex-col items-start gap-tc-8 sm:flex-row sm:items-center sm:justify-between">
    <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
      Explore by Perception
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
      Open discovery filters
    </div>
  </div>

  <div className="w-full font-body text-tc-18 font-normal leading-tc-28 text-text-secondary">
    Start with a feeling, a listening mode or a kind of friction—not a genre shelf.
  </div>

  <div className="grid w-full grid-cols-1 items-stretch md:grid-cols-3">
    <PerceptionPath
      index={1}
      title="DARK & IMMERSIVE"
      description="Records that reward headphones and disappear into their own weather."
      tags={["immersive", "nocturnal", "dense"]}
      releaseCount={164}
    />

    <div className="outline outline-1 outline-offset-[-1px] outline-border">
      <PerceptionPath
        index={2}
        title="IMMEDIATE & ADDICTIVE"
        description="Hooks, movement and replay value without collapsing into easy listening."
        tags={["instant", "addictive", "kinetic"]}
        releaseCount={238}
      />
    </div>

    <div className="outline outline-1 outline-offset-[-1px] outline-border">
      <PerceptionPath
        index={3}
        title="STRANGE BUT COHESIVE"
        description="Experimental choices that still feel like a complete statement."
        tags={["experimental", "cohesive", "detailed"]}
        releaseCount={119}
      />
    </div>
  </div>
</div>
  )
}

export default ExploreByPerception
