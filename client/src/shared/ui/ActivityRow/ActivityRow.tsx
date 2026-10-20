type Props = {
  userName: string
  actionText: string
  time: string
  profilePhoto?:string
}

export default function ActivityRow({
  userName,
  actionText,
  time,
  profilePhoto
}: Props) {
  return (
    <div className="flex w-full min-w-0 items-center gap-[14px] border-b border-border py-tc-8">
      {profilePhoto?<img className="h-9 w-9 shrink-0 rounded-full object-cover" src={profilePhoto} alt="" />:<div className="h-9 w-9 shrink-0 rounded-full bg-accent" />}

      <div className="flex min-w-0 flex-1 flex-col items-start gap-tc-2">
        <div className="w-full font-body text-tc-14 font-medium leading-tc-20 text-text-primary">
          {userName}
        </div>

        <div className="w-full font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          {actionText}
        </div>
      </div>

      <div className="w-10 shrink-0 text-right font-body text-tc-14 font-normal leading-tc-20 text-text-muted sm:w-14">
        {time}
      </div>
    </div>
  )
}
