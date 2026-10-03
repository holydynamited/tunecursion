import Button from "../shared/ui/Button/Button"
import Tag from "../shared/ui/Tag/Tag"
import SectionHeader from "../shared/ui/SectionHeader/SectionHeader"
import DimensionRow from "../shared/ui/DimensionRow/DimensionRow"
import TrackRow from "../shared/ui/TrackRow/TrackRow"
import DiscussionRow from "../shared/ui/DiscussionRow/DiscussionRow"
import ReleaseRow from "../shared/ui/ReleaseRow/ReleaseRow"
import ProfileTab from "../shared/ui/ProfileTab/ProfileTab"


import wlr from '../assets/wlr.jpg'
import ProfileFavorite from "../shared/ui/ProfileFavorite/ProfileFavorite"


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


    </div>
    
   </div>
    
   
  )
}

export default App
