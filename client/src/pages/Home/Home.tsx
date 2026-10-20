import Header from "../../shared/ui/Header/Header"

import Hero from "./Hero/Hero"
import TrandingInCommunity from "./TradingCommunity/TradingInCommunity"
import HighlyRated from "./HighlyRated/HighlyRated"
import ExploreByPerception from "./ExploreByPerception/ExploreByPerception"
import CommunityPulse  from './CommunityPulse/CommunityPulse'
import CommunityLists from "./CommunityLists/CommunityLists"
import ForYou from "./ForYou/ForYou"
import Footer from "../../shared/ui/Footer/Footer"





export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-canvas">
     
       
        
        <Header/>

        

      

        <section >
          <Hero/>

        </section>


        <section>
          <TrandingInCommunity/>
        </section>

          <section>
          <HighlyRated/>
        </section>

        <section>
          <ExploreByPerception/>
        </section>


        <section>
          <CommunityPulse/>
        </section>

        <section>
          <CommunityLists/>
        </section>

        <section>
          <ForYou/>
        </section>

        <footer className="flex w-full justify-center">
          <Footer/>
        </footer>

        
      
    </main>
  )
}
