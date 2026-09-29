
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
 const disabledStyles ='bg-surface text-text-muted' 
 const selectedStyles='bg-accent text-canvas'

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
            :" hover:bg-elevated hover:text-text-primary"
        }
    
    focus-visible:border-2
    focus-visible:border-accent

        ${disabled
        ? disabledStyles
        : selected
            ? selectedStyles
            : "bg-muted text-text-secondary"
        }
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"}

    `}>
        <span>
            {children}
        </span>
    </button>
        )
    
    
}