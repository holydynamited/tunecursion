export default function AlbumDescription(){

    return(
        <div className="flex w-full flex-col items-start gap-tc-32 overflow-hidden bg-canvas px-tc-64 py-tc-48">
  <div className="font-display text-tc-32 font-bold leading-tc-40 text-text-primary">
    Description
  </div>

  <div className="w-full max-w-[1000px] font-body text-tc-18 font-normal leading-tc-28 text-text-secondary">
    A brooding, cinematic exploration of isolation and renewal, Nocturne Static
    blends atmospheric production with fractured 808s, industrial textures,
    and distant vocals. Moving between delicate, haunting passages and towering
    walls of sound, it captures the dissonance of modern life and the quiet hope
    that follows.
  </div>

  <button className="cursor-pointer font-body text-tc-14 font-medium leading-tc-20 text-accent">
    Show more ↓
  </button>
</div>
    )
}