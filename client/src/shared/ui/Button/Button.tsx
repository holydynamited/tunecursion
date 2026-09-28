



type ButtonStyle = "secondary"|"primary"



type Props = {

    variant?:ButtonStyle,
    disabled?:boolean
    children:React.ReactNode,
    

}  



const ButtonVariant:Record<ButtonStyle, string> = {
    primary:"bg-accent text-canvas hover:bg-accent-hover active:bg-accent-dim focus-visible:outline-2 focus-visible:outline-text-primary ",
    secondary:"bg-canvas  text-accent hover:bg-muted active:bg-muted-dim focus-visible:outline-2 focus-visible:outline-accent-hover  "
}

const ButtonColorsDisabledVariant:Record<ButtonStyle,string> = {

    primary:" bg-muted text-text-muted " ,
    secondary:" bg-canvas text-text-muted  border border-border"
}



export default function Button({variant="primary", disabled=false,children}:Props){

    return <button 
    disabled={disabled}
    className={`
    inline-flex py-tc-12
    px-tc-20 justify-center
    items-center gap-tc-8 
    rounded-full
    
    ${disabled?ButtonColorsDisabledVariant[variant]:ButtonVariant[variant]}
    ${disabled?"cursor-not-allowed":"cursor-pointer"}
    `}
    >
{
children
}

</button>


}