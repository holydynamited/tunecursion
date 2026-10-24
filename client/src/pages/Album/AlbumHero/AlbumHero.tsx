
import ArtworkGlow from "../../../shared/ui/ArtworkGlow/ArtworkGlow"
import Button from "../../../shared/ui/Button/Button"
import Tag from "../../../shared/ui/Tag/Tag"
import CommunityRating from "../../../shared/ui/CommunityRating/CommunityRating"
import { mockRatings } from "../../../shared/lib/mocks/mockRatings"

const genres = ["Rage", "Cloud Rap", "Experimental"]

const perception = [
  "dark",
  "nocturnal",
  "atmospheric",
  "melancholic",
  "distorted",
]

export default function AlbumHero() {
  return (
    <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-canvas px-tc-20 py-tc-40 sm:px-tc-32 lg:min-h-[648px] lg:p-tc-64">

      <ArtworkGlow
        variant="double"
        className="[&>div:first-child]:!left-[-180px] [&>div:first-child]:!top-[-250px] [&>div:last-child]:!left-[420px] [&>div:last-child]:!right-auto [&>div:last-child]:!top-[-220px]"
      />

      <div className="pointer-events-none absolute inset-x-0 top-[338px] h-80 bg-gradient-to-r from-neutral-950/0 via-neutral-950/70 via-[72%] to-neutral-950" />

      <div className="relative z-10 flex flex-col items-start gap-tc-40 lg:flex-row lg:gap-tc-64">

        <img
          className="aspect-square w-full max-w-[520px] shrink-0 object-cover lg:w-[40%] xl:w-[520px]"
          src="https://placehold.co/520x520"
          alt="Nocturne Static"
        />

        <div className="flex min-w-0 flex-1 flex-col items-start gap-tc-16">

         -
          <div className="flex w-full flex-col items-start gap-tc-8">

            <div className="font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-accent">
              ALBUM · 2024
            </div>

            <h1 className="font-display text-[40px] font-bold leading-[44px] text-text-primary sm:text-5xl xl:text-6xl xl:leading-tc-60">
              NOCTURNE STATIC
            </h1>

            <h2 className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
              Kairo Veil
            </h2>

            <div className="font-body text-tc-16 leading-tc-24 text-text-secondary">
              14 tracks · 43 min · Null Wave Records
            </div>

            <div className="font-body text-tc-14 font-medium leading-tc-20 text-text-primary">
              Hip-Hop / Experimental Hip-Hop
            </div>
          </div>

          -
          <div className="flex flex-wrap items-center gap-tc-12">
            <Button variant="primary">Rate</Button>
            <Button variant="secondary">Save</Button>
            <Button variant="secondary">Add to collection</Button>
          </div>

          {/* Community */}
          <div className="flex w-full flex-col items-start gap-tc-40 md:flex-row">

            <CommunityRating
              averageRating={4.2}
              ratingCount={18429}
              type="community"
              ratings={mockRatings}
            />

            <div className="flex min-w-0 flex-1 flex-col items-start gap-tc-16">

              <div className="font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
                COMMUNITY PROFILE
              </div>

              <div className="flex flex-col items-start gap-tc-8">
                <div className="font-body text-tc-14 font-medium leading-tc-20 text-text-primary">
                  Genres
                </div>

                <div className="flex flex-wrap gap-tc-8">
                  {genres.map((genre) => (
                    <Tag key={genre}>{genre}</Tag>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-tc-8">
                <div className="font-body text-tc-14 font-medium leading-tc-20 text-text-primary">
                  Perception
                </div>

                <div className="flex flex-wrap gap-tc-8">
                  {perception.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
