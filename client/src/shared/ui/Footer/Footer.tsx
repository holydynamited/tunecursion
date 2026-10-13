export default function Footer() {
  return (
    <footer className="inline-flex self-stretch flex-col items-start gap-tc-40 overflow-hidden bg-canvas p-tc-64">
      <div className="inline-flex self-stretch items-start justify-between overflow-hidden">

        <div className="inline-flex w-72 flex-col items-start gap-tc-16 overflow-hidden">
          <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
            TUNECURSION
          </div>

          <div className="w-72 font-body text-tc-18 font-normal leading-tc-28 text-text-secondary">
            Music goes deeper when we describe it together.
          </div>

          <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
            ● Community-curated since 2026
          </div>
        </div>

        <div className="flex items-start justify-start gap-tc-40 overflow-hidden">
          <div className="inline-flex w-44 flex-col items-start gap-tc-12 overflow-hidden">
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

          <div className="inline-flex w-44 flex-col items-start gap-tc-12 overflow-hidden">
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

          <div className="inline-flex w-44 flex-col items-start gap-tc-12 overflow-hidden">
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

        <div className="inline-flex w-64 flex-col items-start gap-tc-16 overflow-hidden">
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