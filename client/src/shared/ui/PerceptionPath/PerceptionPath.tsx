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
        <div className="flex h-full w-full flex-col items-start gap-tc-16 p-tc-24 xl:max-w-96 xl:pr-7">
  <div className="w-full font-body text-tc-12 font-medium leading-tc-16 tracking-widest text-text-muted">
    {String(index).padStart(2, '0')} / {title}
  </div>

  <div className="w-full font-display text-tc-20 font-medium leading-tc-28 text-text-primary">
    {description}
  </div>

  <div className="flex w-full flex-wrap content-center items-center justify-start gap-tc-8">
    {tags.map(tag => (
  <Tag key={tag} >  {tag} </Tag>
    ))}

     
  </div>

  <div className="w-full font-body text-tc-14 font-normal leading-tc-20 text-text-muted">
    {releaseCount} releases
  </div>

  <button className="font-body text-tc-14 font-medium leading-tc-20 text-accent cursor-pointer">
    Explore →
  </button>
</div>
    )
}
