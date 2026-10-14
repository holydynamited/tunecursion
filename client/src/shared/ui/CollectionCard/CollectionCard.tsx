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
    <div className="inline-flex w-96 flex-col items-start gap-[14px] bg-surface p-tc-20">
      <div className="inline-flex w-80 items-center justify-start gap-[6px]">
        <img
          className="size-48 object-cover"
          src={mainImage}
          alt=""
          draggable={false}
        />

        <div className="inline-flex w-40 flex-col items-start gap-[6px]">
          <img
            className="h-24 w-40 object-cover"
            src={sideImageTop}
            alt=""
            draggable={false}
          />

          <img
            className="h-24 w-40 object-cover"
            src={sideImageBottom}
            alt=""
            draggable={false}
          />
        </div>
      </div>

      <div className="w-80 font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
        {title}
      </div>

      <div className="w-80 font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
        {releaseCount} releases · by {author}
      </div>

      <button className="w-80 cursor-pointer text-left font-body text-tc-14 font-medium leading-tc-20 text-accent">
        Open collection →
      </button>
    </div>
  )
}