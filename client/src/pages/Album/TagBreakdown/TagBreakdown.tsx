import TagBreakdownItem from "../../../shared/ui/TagBreakdownItem/TagBreakdownItem"

export default function TagBreakdown(){

    return(
        <div className="flex w-full flex-col items-start gap-tc-32 overflow-hidden bg-canvas px-tc-64 py-tc-48">
  <div className="flex w-full items-center justify-between">
    <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
      Tag breakdown
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
      View all tags →
    </div>
  </div>

  <div className="grid w-full grid-cols-5 gap-x-tc-24 gap-y-tc-24">
    <TagBreakdownItem label="Rage" value={24} />
    <TagBreakdownItem label="Experimental Hip-Hop" value={19} />
    <TagBreakdownItem label="Cloud Rap" value={15} />
    <TagBreakdownItem label="Atmospheric" value={11} />
    <TagBreakdownItem label="Industrial" value={9} />

    <TagBreakdownItem label="Dark" value={8} />
    <TagBreakdownItem label="Nocturnal" value={6} />
    <TagBreakdownItem label="Distorted" value={4} />
    <TagBreakdownItem label="Melancholic" value={3} />
    <TagBreakdownItem label="Underground" value={2} />
  </div>
</div>
    )
}