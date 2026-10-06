
export type MediaType = 'artist' | 'album' | 'track'

export type FavoriteMedia = 'album' | 'track'

export type RatedMediaBase = {
  name: string
  photoSrc: string
  rating: number
  ratingCount: number
}

export type ArtistMedia = RatedMediaBase & {
  type: 'artist'
}

export type AlbumTrackMedia = RatedMediaBase & {
  type: FavoriteMedia
  artistName: string
}

export type Media = ArtistMedia | AlbumTrackMedia