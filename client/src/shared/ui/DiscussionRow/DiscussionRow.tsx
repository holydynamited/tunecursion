
type Props={
    theme:string;
    replies:number;
    author:string;
    createdAt:string;
}


export default function DiscussionRow({theme, replies, author, createdAt}:Props){

    return(

<div className="inline-flex h-full w-full items-center gap-tc-24 border-t border-border px-tc-12">
  <div className="flex-1 font-body text-tc-16 font-normal leading-tc-24 text-text-primary">
    {theme}
  </div>

  <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
    {replies}
  </div>

  <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-secondary">
    {author}
  </div>

  <div className="font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
    {createdAt}
  </div>
</div>
    )
}