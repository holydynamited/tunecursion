
export default function Header(){
return(
   <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-col gap-tc-20 bg-canvas px-tc-20 py-tc-16 md:flex-row md:items-center md:justify-between md:px-tc-32 xl:h-20 xl:justify-start xl:gap-tc-32 xl:px-tc-64 xl:py-tc-24">
  <div className="flex shrink-0 items-center justify-start gap-tc-12 overflow-hidden">
    <div className="h-8 w-[4px] bg-accent" />

    <div className="font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
      TUNECURSION
    </div>
  </div>

  <div className="flex w-full flex-wrap items-center justify-start gap-x-tc-20 gap-y-tc-12 md:w-auto md:flex-nowrap md:gap-tc-24 xl:gap-tc-32">
    <div className="font-body text-tc-14 font-medium leading-tc-20 text-text-secondary">
      Discover
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-text-secondary">
      Charts
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-text-secondary">
      Reviews
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-text-secondary">
      Lists
    </div>

    <div className="relative hidden h-5 w-24 lg:block">
   <div className="w-32 font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
  Search music…
</div>
    </div>

    <div className="ml-auto flex items-center justify-center gap-tc-8 rounded-full bg-canvas px-tc-20 py-tc-12 outline outline-1 outline-offset-[-1px] outline-accent md:ml-0">
      <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
        Sign in
      </div>
    </div>
  </div>
</div>
)
}
