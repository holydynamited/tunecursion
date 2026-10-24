import AlbumDescription from "./AlbumDescription/AlbumDescription"
import AlbumHero from "./AlbumHero/AlbumHero"
import CommunityPerception from "./CommunityPerception/CommunityPerception"

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
    </>
  )
}