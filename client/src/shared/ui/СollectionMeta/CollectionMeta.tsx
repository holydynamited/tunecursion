type CollectionType = 'tracks' | 'releases' | 'artists'

type Props = {
type:CollectionType
name:string
innerCount:number

}
export default function CollectionMeta({
  type,
  name,
  innerCount,
}: Props) {
  return (
    <div
      className="
        inline-flex
        w-full
        items-center
        justify-between
        border-b
        border-border
        py-tc-16
        px-tc-12
        hover:bg-surface
        rounded-sm
      "
    >
      <div className="inline-flex flex-1 flex-col items-start gap-tc-2 overflow-hidden ">
        <div className="font-body text-tc-14 font-medium leading-tc-20 text-text-primary">
          {name}
        </div>

        <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          {innerCount} {type}
        </div>
      </div>

      <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent cursor-pointer">
        →
      </div>
    </div>
  )
}