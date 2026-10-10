import { type FavoriteMediaProps } from "../../lib/types/favoriteMedia"

type Props = FavoriteMediaProps

export default function ProfileFavorite(props: Props) {
  const { type, name, photoSrc, rating } = props

  if (type === 'artist') {
    return (
      <div
        className="
          inline-flex
          w-full
          items-center
          gap-tc-16
          rounded-sm
          border
          border-border
          bg-elevated
          py-tc-12
          pl-tc-12
          pr-tc-16
        "
      >
        <img
          src={photoSrc}
          draggable = {false}
          alt="Favorite photo"
          className="h-[72px] w-[72px] shrink-0 rounded-sm select-none object-cover "
        />

        <div className="flex min-w-0 flex-1 flex-col items-start gap-[2px] overflow-hidden">
          <span
            className="
              text-tc-12
              font-medium
              uppercase
              leading-tc-16
              tracking-[1.6px]
              text-accent
            "
          >
            PROFILE FAVORITE · {type[0].toUpperCase() + type.slice(1)}
          </span>

          <span className="truncate text-tc-14 font-medium leading-tc-20 text-text-primary">
            {name}
          </span>

          <span className="truncate text-tc-14 font-normal leading-tc-20 text-text-muted">
            {name} · ★ {rating}
          </span>
        </div>
      </div>
    )
  }

  if (type === 'album' || type === 'track') {
    const { year } = props

    return (
      <div
        className="
          inline-flex
          w-full
          items-center
          gap-tc-16
          rounded-sm
          border
          border-border
          bg-elevated
          py-tc-12
          pl-tc-12
          pr-tc-16
        "
      >
        <img
          src={photoSrc}
          draggable = {false}
          alt="Favorite photo"
          className="h-[72px] w-[72px] shrink-0 rounded-sm select-none object-cover "
        />

        <div className="flex min-w-0 flex-1 flex-col items-start gap-[2px] overflow-hidden">
          <span
            className="
              text-tc-12
              font-medium
              uppercase
              leading-tc-16
              tracking-[1.6px]
              text-accent
            "
          >
            PROFILE FAVORITE · {type[0].toUpperCase() + type.slice(1)}
          </span>

          <span className="truncate text-tc-14 font-medium leading-tc-20 text-text-primary">
            {name}
          </span>

          <span className="truncate text-tc-14 font-normal leading-tc-20 text-text-muted">
            {name} · {year} · ★ {rating}
          </span>
        </div>
      </div>
    )
  }

  return null
}
