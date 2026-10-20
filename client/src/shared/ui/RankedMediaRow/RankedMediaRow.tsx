type BaseProps = {
  rank: number
  imageSrc: string
  score: number
  change: number
}

type ArtistProps = BaseProps & {
  type: "artist"
  artistName: string
}

type TrackProps = BaseProps & {
  type: "track"
  title: string
  artistName: string
}

type AlbumProps = BaseProps & {
  type: "album"
  title: string
  artistName: string
}

type Props = ArtistProps | TrackProps | AlbumProps

export default function RankedMediaRow(props: Props) {
  const {
    rank,
    imageSrc,
    type,
    score,
    change,
  } = props

  const title =
    type === "artist"
      ? props.artistName
      : props.title

  const subtitle =
    type === "artist"
      ? "Artist"
      : `${props.artistName} · ${
          type[0].toUpperCase() + type.slice(1)
        }`

  const rankDigits = String(rank).padStart(2, "0")

  return (
    <div className="flex w-full min-w-0 items-center justify-start gap-tc-12 border-b border-border sm:gap-tc-16">
      <div className="w-9 shrink-0 font-display text-tc-32 font-medium leading-tc-40 text-accent sm:w-12 sm:text-tc-48 sm:leading-tc-52">
        <span className="block">{rankDigits[0]}</span>
        <span className="block">{rankDigits[1]}</span>
      </div>

      <img
        src={imageSrc}
        alt=""
        draggable={false}
        className="size-12 shrink-0 select-none object-cover"
      />

      <div className="flex min-w-0 flex-1 flex-col items-start justify-start gap-tc-2">
        <div className="w-full truncate font-body text-tc-16 font-normal leading-tc-24 text-text-secondary sm:text-tc-18 sm:leading-tc-28">
          {title}
        </div>

        <div className="w-full truncate font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          {subtitle}
        </div>
      </div>

      <div className="w-10 shrink-0 text-right font-display text-tc-20 font-medium leading-tc-28 text-text-primary sm:w-16">
        {score}
      </div>

      <div className="w-10 shrink-0 font-body text-tc-14 font-normal leading-tc-20 text-text-muted sm:w-16">
        ↑ {change}
      </div>
    </div>
  )
}
