
type Props ={
    title:string;
    description?:string;
    action?:React.ReactNode;

}
 
export default function SectionHeader({title,description,action}:Props){

    return (
        <div className="flex flex-col gap-tc-32 w-full">
        <div className="flex w-full items-center justify-between">

            <p className="
            text-text-primary
            font-display
            text-tc-32
            font-bold
            leading-tc-40
            tracking-tight ">
                
                {title}
            </p>

            <p className="text-accent size-tc-14 ">
                {action}
            </p>
            
        </div>

                <p className="
                text-text-secondary 
                text-text-body
                text-tc-16
                leading-tc-24
                tracking-normal

                ">

             {description && (
             description
         )}  
        </p>
        </div>
    )
} 

