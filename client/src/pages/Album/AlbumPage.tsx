
import AlbumDescription from "./AlbumDescription/AlbumDescription"
import AlbumHero from "./AlbumHero/AlbumHero"
import CommunityPerception from "./CommunityPerception/CommunityPerception"
import RelatedAlbums from "./RelatedAlbums/RelatedAlbum"
import TagBreakdown from "./TagBreakdown/TagBreakdown"
import TrackList from "./TrackList/Tracklist"
import Review from "./Reviews/Reviews"

export default function AlbumPage() {
  return (
    <>
      <section>
        <AlbumHero />
      </section>

      <section>
        <AlbumDescription/>
      </section>

      <section>
        <CommunityPerception/>
      </section>

      <section>
       <TagBreakdown/>
      </section>

      <section>
      <TrackList/>
      </section>

      <section>
        <RelatedAlbums/>
      </section>

      <section>
        <Review/>
      </section>
    </>
  )
}