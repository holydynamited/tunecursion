type Props = {
  mainImage: string
  sideImageTop: string
  sideImageBottom: string
  title: string
  releaseCount: number
  author: string
}

export default function CollectionCard({
  mainImage,
  sideImageTop,
  sideImageBottom,
  title,
  releaseCount,
  author,
}: Props) {
  return (
    <div className="flex w-full flex-col items-start gap-[14px] bg-surface p-tc-20 xl:max-w-96">
      <div className="grid w-full max-w-80 grid-cols-[3fr_2fr] items-stretch gap-[6px]">
        <img
          className="aspect-square h-full w-full object-cover"
          src={mainImage}
          alt=""
          draggable={false}
        />

        <div className="grid min-w-0 grid-rows-2 gap-[6px]">
          <img
            className="h-full min-h-0 w-full object-cover"
            src={sideImageTop}
            alt=""
            draggable={false}
          />

          <img
            className="h-full min-h-0 w-full object-cover"
            src={sideImageBottom}
            alt=""
            draggable={false}
          />
        </div>
      </div>

      <div className="w-full max-w-80 font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
        {title}
      </div>

      <div className="w-full max-w-80 font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
        {releaseCount} releases · by {author}
      </div>

      <button className="w-full max-w-80 cursor-pointer text-left font-body text-tc-14 font-medium leading-tc-20 text-accent">
        Open collection →
      </button>
    </div>
  )
}
