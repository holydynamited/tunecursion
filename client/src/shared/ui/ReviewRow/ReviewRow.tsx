
type Props ={
    username:string,
    rate:number,
    comment:string,
    findHelpful:number,
    date:string
}

export default function ReviewRow({username,rate,comment, findHelpful, date}:Props) {
  return (
    <div
      className="
    inline-flex
    w-full
    flex-col
    items-start
    gap-tc-12
    border-t
    border-border
    py-tc-20
    px-tc-8
    hover:bg-surface
  "
  >
      <div className="flex w-full items-start  justify-between overflow-hidden">
        <div className="font-body text-tc-14 font-medium leading-tc-20 text-text-primary">
          {username}
        </div>

        <div className="font-body text-tc-14 font-medium leading-tc-20 text-accent">
          {rate+'/5'}
        </div>
      </div>

      <div className="max-w-[1000px] font-body text-tc-16 font-normal leading-tc-24 text-text-secondary">
       {comment}
      </div>

      <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
       {findHelpful} · {date}
      </div>
    </div>
  );
}
