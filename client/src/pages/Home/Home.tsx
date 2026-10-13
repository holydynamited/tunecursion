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
    <main className="relative min-h-screen overflow-hidden bg-canvas">
      <div className="absolute left-[-200px] top-[-180px] size-[760px] rounded-full bg-artwork-nocturne-rust opacity-70 blur-[90px]" />
        <Header/>

        <section>
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

        <Footer/>
      
    </main>
  )
}