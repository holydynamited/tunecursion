import type { FavoriteMedia } from "../../lib/types/media"

 type AlbumTrackProps = {
  type: FavoriteMedia
  name: string
  photoSrc: string
  year: string
  rating: number
}
 type ArtistProps = {
  type: 'artist'
  name: string
  photoSrc: string
  rating: number
}

export type FavoriteMediaProps = ArtistProps | AlbumTrackProps