import Hero from "./Hero/Hero"
import TrandingInCommunity from "./TrendingInCommunity/TrendingInCommunity"
import HighlyRated from "./HighlyRated/HighlyRated"
import ExploreByPerception from "./ExploreByPerception/ExploreByPerception"
import CommunityPulse from "./CommunityPulse/CommunityPulse"
import CommunityLists from "./CommunityLists/CommunityLists"
import ForYou from "./ForYou/ForYou"

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <TrandingInCommunity />
      </section>

      <section>
        <HighlyRated />
      </section>

      <section>
        <ExploreByPerception />
      </section>

      <section>
        <CommunityPulse />
      </section>

      <section>
        <CommunityLists />
      </section>

      <section>
        <ForYou />
      </section>
    </>
  )
}