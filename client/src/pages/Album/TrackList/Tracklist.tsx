
import TrackRow from "../../../shared/ui/TrackRow/TrackRow"

export default function TrackList(){
    return(
        <div className="flex w-full flex-col items-start gap-tc-32 overflow-hidden bg-canvas px-tc-64 py-tc-48">
  <div className="flex w-full items-center justify-between">
    <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
      Tracklist
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
      14 tracks · 43 min
    </div>
  </div>

  <div className="flex w-full flex-col items-start gap-tc-4 overflow-hidden">
    <TrackRow number={1} title="Afterimage" duration="3:18" rating={4.1} />
    <TrackRow number={2} title="Signal Fires" duration="3:42" rating={4.5} />
    <TrackRow number={3} title="Static Bloom" duration="2:56" rating={4.0} />
    <TrackRow number={4} title="Nocturne Static" duration="4:12" rating={4.6} />
    <TrackRow number={5} title="Cold Geometry" duration="3:07" rating={3.9} />
    <TrackRow number={6} title="Vanta Lines" duration="2:48" rating={4.2} />
    <TrackRow number={7} title="Glass District" duration="3:36" rating={4.3} />
    <TrackRow number={8} title="Exit Wounds" duration="2:59" rating={3.8} />
    <TrackRow number={9} title="Distant Relay" duration="3:22" rating={4.1} />
    <TrackRow number={10} title="Null State" duration="3:11" rating={4.0} />
    <TrackRow number={11} title="Quiet Collapse" duration="4:02" rating={4.4} />
    <TrackRow number={12} title="Red Shift" duration="2:44" rating={3.9} />
    <TrackRow number={13} title="City Without Sleep" duration="3:27" rating={4.3} />
    <TrackRow number={14} title="Morning Static" duration="3:16" rating={4.2} />
  </div>
</div>
    )
}