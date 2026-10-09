import Tag from "../Tag/Tag"

type Props ={
    index:number
    title:string
    description:string
    tags: string[]
    releaseCount: number

}


export default function PerceptionPath({index,title, description, tags, releaseCount}:Props){

    return(
        <div className="inline-flex w-96 flex-col items-start gap-tc-16 pr-tc-28">
  <div className="w-80 font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
    {String(index).padStart(2, '0')} / {title}
  </div>

  <div className="w-80 font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
    {description}
  </div>

  <div className="inline-flex w-80 flex-wrap content-center items-center justify-start gap-tc-8">
    {tags.map(tag => (
  <Tag key={tag} >  {tag} </Tag>
    ))}

     
  </div>

  <div className="w-80 font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
    {releaseCount} releases
  </div>

  <div className="w-80 font-body text-tc-14 font-medium leading-tc-20 text-accent">
    Explore →
  </div>
</div>
    )
}