
type VisualTagProps = {
  variant?: "visual"
  children: React.ReactNode
}

type ButtonTagProps = {
  variant: "button"
  disabled?: boolean
  selected?: boolean
  children: React.ReactNode
}

type Props = VisualTagProps | ButtonTagProps
 const disabledStyles ='bg-surface text-text-muted outline-none' 
 const selectedStyles='bg-accent text-canvas outline-none'

export default function Tag(props:Props){
       const { variant, children } = props
    if (variant !== "button"){
    return <div className=
    {`
    inline-flex items-center
    px-tc-12 py-tc-8 bg-muted 
    rounded-sm font-body 
    text-size-14 text-text-secondary

    `}>
        <span>
            {children}
        </span>
    </div>
    }

    const {selected, disabled} = props
    return (<button className=
    {`
    inline-flex items-center
    px-tc-12 py-tc-8 
    rounded-sm font-body 
    text-size-14
    
        ${disabled
        ? disabledStyles
        : selected
            ? selectedStyles
            : " bg-muted hover:bg-elevated hover:text-text-primary  text-text-secondary focus-visible:bg-canvas focus-visible:outline-2 focus-visible:outline-accent-hover"
        }
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"}   

    `}>
        <span>
            {children}
        </span>
    </button>
        )
    
    
}