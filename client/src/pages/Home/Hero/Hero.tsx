import React from 'react'

import ArtworkGlow from '../../../shared/ui/ArtworkGlow/ArtworkGlow'

const Hero = () => {
  return (
<div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-tc-40 overflow-hidden bg-canvas px-tc-20 py-tc-64 sm:px-tc-32 lg:grid lg:grid-cols-2 lg:items-start lg:gap-tc-48 xl:block xl:h-[680px] xl:px-0 xl:py-0">
  <div className="absolute left-1/2 top-[-240px] size-[520px] -translate-x-1/2 rounded-full bg-artwork-nocturne-rust opacity-70 blur-[90px] xl:left-[480px] xl:top-[-430px] xl:size-[760px] xl:translate-x-0" />
    <ArtworkGlow className="absolute left-1/2 top-[-240px] size-[520px] -translate-x-1/2 xl:left-[480px] xl:top-[-430px] xl:size-[760px] xl:translate-x-0" />
  <div className="relative z-10 flex w-full max-w-[520px] flex-col items-start gap-tc-20 xl:absolute xl:left-[112px] xl:top-[112px]">
    <div className="w-full font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-accent">
      TUNECURSION / DISCOVER
    </div>

    <div className="w-full font-display text-[40px] font-bold leading-[44px] text-text-primary sm:text-5xl sm:leading-[52px] xl:text-6xl xl:leading-tc-60">
      Hear what the community is hearing.
    </div>

    <div className="w-full max-w-[500px] font-body text-tc-18 font-normal leading-tc-28 text-text-secondary">
      Rate records. Read the room. Follow the arguments that make music worth
      returning to.
    </div>

    <div className="flex w-full flex-wrap items-center justify-start gap-tc-12">
      <button className="flex cursor-pointer items-center justify-center gap-tc-8 rounded-full bg-accent px-tc-20 py-tc-12">
        <span className="font-body text-tc-14 font-medium leading-tc-20 text-canvas">
          Start exploring
        </span>
      </button>

      <button className="flex cursor-pointer items-center justify-center gap-tc-8 rounded-full bg-canvas px-tc-20 py-tc-12 outline outline-1 outline-offset-[-1px] outline-accent">
        <span className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
          Build your profile
        </span>
      </button>
    </div>
  </div>

  <div className="relative z-10 flex w-full max-w-[504px] flex-col items-start gap-tc-16 bg-surface p-tc-20 sm:p-tc-24 lg:justify-self-end xl:absolute xl:left-[824px] xl:top-[112px]">
    <div className="w-full font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-accent">
      TODAY&apos;S SIGNAL
    </div>

    <div className="flex w-full flex-col items-start gap-tc-20 sm:flex-row sm:items-center">
      <img
        className="aspect-square w-full max-w-48 object-cover"
        src="https://placehold.co/192x192"
        alt=""
        draggable={false}
      />

      <div className="flex min-w-0 flex-1 flex-col items-start gap-2.5">
        <div className="w-full font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
          Nocturne Static
        </div>

        <div className="w-full font-body text-tc-16 font-normal leading-tc-24 text-text-secondary">
          Kairo Veil · 2024
        </div>

        <div className="w-full font-display text-tc-48 font-medium leading-tc-52 text-accent">
          8.6
        </div>

        <div className="w-full font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          ↑ most discussed today
        </div>
      </div>
    </div>

    <div className="w-full font-body text-tc-16 font-normal leading-tc-24 text-text-secondary">
      The community keeps returning to its tension between mechanical restraint
      and emotional release.
    </div>

    <div className="flex w-full flex-wrap items-center justify-start gap-tc-8">
      <div className="flex items-center rounded-sm bg-muted px-tc-12 py-tc-8">
        <span className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          dark
        </span>
      </div>

      <div className="flex items-center rounded-sm bg-muted px-tc-12 py-tc-8">
        <span className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          immersive
        </span>
      </div>

      <div className="flex items-center rounded-sm bg-muted px-tc-12 py-tc-8">
        <span className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
          grower
        </span>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero
