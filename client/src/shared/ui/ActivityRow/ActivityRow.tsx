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
    <div className="inline-flex w-[744px] items-center gap-[14px] border-b border-border">
      {profilePhoto?<img className="h-9 w-9 rounded-full object-cover" src={profilePhoto} alt="" />:<div className="h-9 w-9 rounded-full bg-accent" />}

      <div className="inline-flex w-[590px] flex-col items-start gap-tc-2">
        <div className="w-[590px] font-body text-tc-14 font-medium leading-tc-20 text-text-primary">
          {userName}
        </div>

        <div className="w-[590px] font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
          {actionText}
        </div>
      </div>

      <div className="w-14 font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
        {time}
      </div>
    </div>
  )
}