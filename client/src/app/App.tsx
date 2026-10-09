import Button from "../shared/ui/Button/Button"
import Tag from "../shared/ui/Tag/Tag"
import SectionHeader from "../shared/ui/SectionHeader/SectionHeader"
import DimensionRow from "../shared/ui/DimensionRow/DimensionRow"
import TrackRow from "../shared/ui/TrackRow/TrackRow"
import DiscussionRow from "../shared/ui/DiscussionRow/DiscussionRow"
import ReleaseRow from "../shared/ui/ReleaseRow/ReleaseRow"
import ProfileTab from "../shared/ui/ProfileTab/ProfileTab"
import MediaCard from "../shared/ui/MediaCard/MediaCard"
import ReviewRow from "../shared/ui/ReviewRow/ReviewRow"
import ProfileReview from "../shared/ui/ProfileReview/ProfileReview"
import CollectionMeta from "../shared/ui/CollectionMeta/CollectionMeta"
import RatingDistributionRow from "../shared/ui/RatingDistribution/RatingDistributionRow"
import RatingDistribution from "../shared/ui/RatingDistribution/RatingDistribution"
import CommunityRating from "../shared/ui/CommunityRating/CommunityRating"
import Header from "../shared/ui/Header/Header"
import RankedMediaRow from "../shared/ui/RankedMediaRow/RankedMediaRow"
import ActivityRow from "../shared/ui/ActivityRow/ActivityRow"
import PerceptionPath from "../shared/ui/PerceptionPath/PerceptionPath"


import wlr from '../assets/wlr.jpg'
import ProfileFavorite from "../shared/ui/ProfileFavorite/ProfileFavorite"

import { mockRatings } from "../shared/lib/mocks/mockRatings"


function App() {
 

  return (
   <div className="flex mt-20 items-center justify-center w-full max-w-[1312px] space-x-6 space-y-2  p-tc-64">

    <div className="w-full">
    <Button variant="primary">
      View all
    </Button>

    <Button variant="secondary">
      View all
    </Button>

     <Button variant="primary" disabled={true}>
      View all
    </Button>
    <Button variant="secondary" disabled={true}>
      View all
    </Button>

    <Tag variant='visual'>
      atmospheric
    </Tag>

      <Tag variant='button'>
      atmospheric
    </Tag>

    <Tag variant='button' selected>
      atmospheric
    </Tag>

     <Tag variant='button' disabled>
      atmospheric
    </Tag>

      <SectionHeader
        title="People may also like"
        action={<p>Hi</p>}
        description="Hi how are we doing"
      />

      <DimensionRow rightLabel="Geeky" leftLabel="Flexx" value={90}/>

      <TrackRow number={4} title="Over" duration="3:20" rating={5}/>

      <DiscussionRow theme="hiiii" replies={20} author="bby" createdAt="2 hours ago"/>

      <ReleaseRow type="album" name="Whole lotta red" trackCount={6} releaseYear={2020} rating={4.4} imageStr={wlr}/>

      <div className="flex w-full gap-5">
      <ProfileTab text="Overview"/>
      <ProfileTab text="Overview" active/>
      <ProfileTab text="Overview" disabled/>
      </div>

      <ProfileFavorite type='album' photoSrc={wlr} name="Whole Lotta Red" rating={4.3} year="2020"  />
      <ProfileFavorite type='track' photoSrc={wlr} name="Vamp Anthem" rating={4.3} year="2020"   />
      <ProfileFavorite type='artist' photoSrc={wlr} name="Playboi Carti" rating={4.3}   />


      <div className="flex  justify-center mt-8" >
        <MediaCard type="artist" name='Playboi Carti' photoSrc={wlr} rating={4.9} ratingCount={6999} />
         <MediaCard type="track" name='Over' photoSrc={wlr} rating={4.9} ratingCount={6999} artistName="Playboi Carti" />
      </div>

      <ReviewRow username="bbyboi" comment="Firee album" rate={4} findHelpful={5} date="5 min ago" />

      <ProfileReview type="artist" artistName="Playboi Carti" reviewText="Skibidi skibidi blahblahblha" photoSrc={wlr} mediaName="" rating={4.3} helpfulCount={340} createdAt="2 weeks ago"/>
      <ProfileReview type="artist" artistName="Playboi Carti" reviewText="Skibidi skibidi blahblahblha" photoSrc={wlr} mediaName="" rating={4.3} helpfulCount={340} createdAt="2 weeks ago"/>
      
      
      <CollectionMeta type="artists" name="best" innerCount={21}/>
      <CollectionMeta type="releases" name="best releases" innerCount={21}/>
      <CollectionMeta type="tracks" name="best " innerCount={231}/>

      <RatingDistributionRow label={5} value={52} />
      <RatingDistributionRow label={4} value={28} />
      <RatingDistributionRow label={3} value={12} />
      <RatingDistributionRow label={2} value={6} />
      <RatingDistributionRow label={1} value={2} /> 

      <div className="flex flex-wrap gap-tc-24">
  <RatingDistribution
    size="sm"
    text="Community scores lean strongly positive, with a visible cult following."
    ratings={mockRatings}
  />

  <RatingDistribution
    size="st"
    text="Community scores lean strongly positive, with a visible cult following."
    ratings={mockRatings}
  />

  <RatingDistribution
    size="wide"
    text="Community scores lean strongly positive, with a visible cult following."
    ratings={mockRatings}
  />
</div>

    <div className="flex gap-8 mt-10"> 
      <CommunityRating type="community" ratingCount={1450} ratings={mockRatings} averageRating={4.2}/>
      <CommunityRating type="default" ratingCount={1450} ratings={mockRatings} averageRating={4.2}/>
    </div>


      <Header/>


      <div className="flex flex-col">
  <RankedMediaRow
    type="artist"
    rank={1}
    imageSrc={wlr}
    score={6.9}
    change={12}
    artistName="Playboi Carti"
  />

  <RankedMediaRow
    type="track"
    rank={2}
    imageSrc={wlr}
    title="Sky"
    artistName="Playboi Carti"
    score={8.7}
    change={7}
  />

  <RankedMediaRow
    type="album"
    rank={3}
    imageSrc={wlr}
    title="Whole Lotta Red"
    artistName="Playboi Carti"
    score={8.4}
    change={11}
  />

  <RankedMediaRow
    type="track"
    rank={4}
    imageSrc={wlr}
    title="Stop Breathing"
    artistName="Playboi Carti"
    score={8.2}
    change={-3}
  />

  <RankedMediaRow
    type="album"
    rank={5}
    imageSrc={wlr}
    title="Die Lit"
    artistName="Playboi Carti"
    score={8.1}
    change={4}
  />

    <ActivityRow userName="rock057" actionText="Bloood" time="15:63"/>
    <ActivityRow userName="rock057" actionText="Bloood" time="15:63" profilePhoto={wlr}/>

       <PerceptionPath
        index={1}
        title="DARK & IMMERSIVE"
        description="Records that reward headphones and disappear into their own weather."
        tags={["immersive", "nocturnal", "dense"]}
        releaseCount={164}
      />

</div>

    </div>
    
   </div> 
    
   
  )
}

export default App
