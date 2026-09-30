
type Props = {
    text:string,
    active?:boolean,
    disabled?:boolean
}

const activeStyles = "text-accent border-b-2 border-accent outline-none"

const disabledStyles = " text-text-muted outline-none "



export default function ProfileTab({text, active=false,disabled=false}:Props){

    return(
        <button

        disabled={disabled}
  className={`
    inline-flex
    flex-col
    items-start
    justify-start
    gap-tc-8
    py-tc-12

    ${disabled
                ? disabledStyles
                : active
                    ? activeStyles
                    :'text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:border-b-2    focus-visible:border-accent focus-visible:text-text-primary'}

                
        ${disabled?'cursor-not-allowed':'cursor-pointer'}
    font-body
    text-tc-14
    font-medium
    leading-tc-20
  `}
>
  {text}
</button>
    )
}