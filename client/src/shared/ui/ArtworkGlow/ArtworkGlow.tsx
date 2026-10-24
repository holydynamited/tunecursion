type Props = {
  variant?: "single" | "double"
  className?: string
}

export default function ArtworkGlow({
  variant = "single",
  className = "",
}: Props) {
  if (variant === "double") {
    return (
      <div className={`pointer-events-none absolute inset-0 ${className}`}>
        <div className="absolute left-[-220px] top-[-220px] size-[760px] rounded-full bg-artwork-nocturne-rust opacity-70 blur-3xl" />

        <div className="absolute right-[-260px] top-[-120px] h-[462px] w-[900px] rounded-full bg-artwork-nocturne-concrete opacity-70 blur-[80px]" />
      </div>
    )
  }

  return (
    <div
      className={`pointer-events-none absolute size-[760px] rounded-full bg-artwork-nocturne-rust opacity-70 blur-[90px] ${className}`}
    />
  )
}