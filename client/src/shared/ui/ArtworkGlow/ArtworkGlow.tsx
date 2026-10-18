type Props = {
  className?: string
}

export default function ArtworkGlow({ className = "" }: Props) {
  return (
    <div
      className={`
        size-[760px]
        rounded-full
        bg-artwork-nocturne-rust
        opacity-70
        blur-[90px]
        ${className}
      `}
    />
  )
}