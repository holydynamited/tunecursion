export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-tc-40 overflow-hidden bg-canvas px-tc-20 py-tc-48 sm:px-tc-32 lg:px-tc-64">
      <div className="grid w-full grid-cols-1 items-start gap-tc-40 lg:grid-cols-[minmax(0,288px)_1fr] xl:grid-cols-[288px_1fr_256px] xl:justify-between">

        <div className="flex w-full max-w-72 flex-col items-start gap-tc-16 overflow-hidden">
          <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
            TUNECURSION
          </div>

          <div className="w-full font-body text-tc-18 font-normal leading-tc-28 text-text-secondary">
            Music goes deeper when we describe it together.
          </div>

          <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
            ● Community-curated since 2026
          </div>
        </div>

        <div className="grid w-full grid-cols-2 items-start gap-x-tc-32 gap-y-tc-40 overflow-hidden sm:grid-cols-3 xl:justify-self-center">
          <div className="flex w-full flex-col items-start gap-tc-12 overflow-hidden sm:max-w-44">
            <div className="font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
              EXPLORE
            </div>

            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Artists
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Albums
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Tracks
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Genres
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Charts
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-tc-12 overflow-hidden sm:max-w-44">
            <div className="font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
              COMMUNITY
            </div>

            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Reviews
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Discussions
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Lists
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Contributors
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Guidelines
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-tc-12 overflow-hidden sm:max-w-44">
            <div className="font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
              ABOUT
            </div>

            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              About TuneCursion
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              How ratings work
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Data & methodology
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Contact
            </div>
            <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
              Support
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-64 flex-col items-start gap-tc-16 overflow-hidden lg:col-start-2 xl:col-start-auto">
          <div className="font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
            JOIN THE CONVERSATION
          </div>

          <button className="inline-flex items-center justify-center gap-tc-8 rounded-full bg-accent px-tc-20 py-tc-12">
            <span className="font-body text-tc-14 font-medium leading-tc-20 text-canvas">
              Create account
            </span>
          </button>

          <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
            Bluesky · Instagram · Discord
          </div>
        </div>

      </div>
    </footer>
  )
}
