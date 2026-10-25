
import ReviewRow from "../../../shared/ui/ReviewRow/ReviewRow"

export default function Review(){
    return(
        <div className="flex w-full flex-col items-start gap-tc-32 overflow-hidden bg-canvas px-tc-64 py-tc-48">
  <div className="flex w-full items-center justify-between">
    <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
      Reviews
    </div>

    <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
      Write a review
    </div>
  </div>

  <div className="flex w-full flex-col">
    <ReviewRow
      username="lucidstate"
      rate={4.5}
      comment="It feels like walking through a city after everyone has gone home — fractured, precise, and strangely tender."
      findHelpful={128}
      date="2 days ago"
    />

    <ReviewRow
      username="graveloom"
      rate={4.0}
      comment="The production is all negative space and impact. A few tracks blur together, but the atmosphere never breaks."
      findHelpful={84}
      date="4 days ago"
    />

    <ReviewRow
      username="noctvrn"
      rate={4.5}
      comment="A genuine grower. Every return reveals another distant voice, texture, or rhythmic detail buried in the mix."
      findHelpful={61}
      date="1 week ago"
    />
  </div>
</div>
    )
}