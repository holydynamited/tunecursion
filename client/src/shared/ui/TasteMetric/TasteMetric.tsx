type MetricSize = "sm" | "lg"

type Props = {
  averageRating: number
  size?: MetricSize
}

const tasteMetricSize: Record<
  MetricSize,
  {
    container: string
    value: string
  }
> = {
  sm: {
    container: "w-40 h-14",
    value: "text-tc-20 leading-tc-28",
  },
  lg: {
    container: "w-40 h-20",
    value: "text-tc-48 leading-tc-52",
  },
}

export default function TasteMetric({
  averageRating,
  size = "lg",
}: Props) {
  return (
    <div
      className={`
        inline-flex flex-col items-start gap-tc-8 overflow-hidden
        ${tasteMetricSize[size].container}
      `}
    >
      <div
        className={`
          font-display font-medium text-accent
          ${tasteMetricSize[size].value}
        `}
      >
        {averageRating}
      </div>

      <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
        Average rating
      </div>
    </div>
  )
}