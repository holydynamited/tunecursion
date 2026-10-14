import React from 'react'

const Hero = () => {
  return (
<div className="relative h-[680px] w-[1440px] overflow-hidden bg-canvas">
  <div className="absolute left-[480px] top-[-430px] size-[760px] rounded-full bg-artwork-nocturne-rust opacity-70 blur-[90px]" />

  <div className="absolute left-[112px] top-[112px] inline-flex w-[520px] flex-col items-start gap-tc-20">
    <div className="w-[520px] font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-accent">
      TUNECURSION / DISCOVER
    </div>

    <div className="w-[520px] font-display text-6xl font-bold leading-tc-60 text-text-primary">
      Hear what the community is hearing.
    </div>

    <div className="w-[500px] font-body text-tc-18 font-normal leading-tc-28 text-text-secondary">
      Rate records. Read the room. Follow the arguments that make music worth
      returning to.
    </div>

    <div className="inline-flex w-[520px] items-center justify-start gap-tc-12">
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

  <div className="absolute left-[824px] top-[112px] inline-flex w-[504px] flex-col items-start gap-tc-16 bg-surface p-tc-24">
    <div className="w-[456px] font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-accent">
      TODAY&apos;S SIGNAL
    </div>

    <div className="inline-flex w-[456px] items-center justify-start gap-tc-20">
      <img
        className="size-48 object-cover"
        src="https://placehold.co/192x192"
        alt=""
        draggable={false}
      />

      <div className="inline-flex w-60 flex-col items-start gap-2.5">
        <div className="w-60 font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
          Nocturne Static
        </div>

        <div className="w-60 font-body text-tc-16 font-normal leading-tc-24 text-text-secondary">
          Kairo Veil · 2024
        </div>

        <div className="w-60 font-display text-tc-48 font-medium leading-tc-52 text-accent">
          8.6
        </div>

        <div className="w-60 font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          ↑ most discussed today
        </div>
      </div>
    </div>

    <div className="w-[456px] font-body text-tc-16 font-normal leading-tc-24 text-text-secondary">
      The community keeps returning to its tension between mechanical restraint
      and emotional release.
    </div>

    <div className="inline-flex w-[456px] items-center justify-start gap-tc-8">
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
