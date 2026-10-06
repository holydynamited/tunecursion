type FavoriteMediaType = 'album' | 'track'

 type AlbumTrackProps = {
  type: FavoriteMediaType
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

export type FavoriteMedia = ArtistProps | AlbumTrackProps