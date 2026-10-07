
export default function Header(){
return(
    <div className="inline-flex h-20 self-stretch items-center justify-start gap-tc-32 overflow-hidden bg-canvas px-tc-64 py-tc-24">
  <div className="flex items-center justify-start gap-tc-12 overflow-hidden">
    <div className="h-8 w-[4px] bg-accent" />

    <div className="font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
      TUNECURSION
    </div>
  </div>

  <div className="flex items-center justify-start gap-tc-32 overflow-hidden">
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

    <div className="relative h-5 w-24">
      <div className="absolute left-0 top-0 font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
        Search music…
      </div>
    </div>

    <div className="flex items-center justify-center gap-tc-8 rounded-full bg-canvas px-tc-20 py-tc-12 outline outline-1 outline-offset-[-1px] outline-accent">
      <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
        Sign in
      </div>
    </div>
  </div>
</div>
)
}