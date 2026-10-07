type BaseProps = {
  rank: number
  imageSrc: string
  score: number
  change: number
}

type ArtistProps = BaseProps & {
  type: 'artist'
  artistName: string
}

type TrackProps = BaseProps & {
  type: 'track'
  title: string
  artistName: string
}

type AlbumProps = BaseProps & {
  type: 'album'
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

  const title = type === 'artist'
    ? props.artistName
    : props.title

  const subtitle = type === 'artist'
    ? 'Artist'
    : `${props.artistName} · ${type[0].toUpperCase() + type.slice(1)}`

  return (
    <div className="inline-flex w-[680px] items-center gap-tc-16 border-b border-border">
      <div className="w-[48px] font-display text-tc-48 font-medium leading-tc-52 text-accent">
        {String(rank).padStart(2, '0')}
      </div>

      <img
        src={imageSrc}
        alt=""
        draggable={false}
        className="h-[52px] w-[52px] select-none object-cover"
      />

      <div className="inline-flex w-96 flex-col items-start gap-tc-2">
        <div className="w-96 font-body text-tc-18 font-normal leading-tc-28 text-text-secondary">
          {title}
        </div>

        <div className="w-96 font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          {subtitle}
        </div>
      </div>

      <div className="w-16 font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
        {score}
      </div>

      <div className="w-16 font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
        ↑ {change}
      </div>
    </div>
  )
}