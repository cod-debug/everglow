export function TextLarge({children, className}){
    return <div className={`text-[30px] leading-[30px] md:text-[40px] md:leading-[45.8px] ${className}`}>{ children }</div>
}

export function TextNormal({children, className}){
    return <div className={`text-[16px] leading-[16px] ${className}`}>{ children }</div>
}

export function TextNormal2({children, className}){
    return <div className={`text-[18px] leading-[18px] ${className}`}>{ children }</div>
}


export function TextMedium({ children, className }){
    return <div className={`text-18px leading-18px md:text-[24px] md:leading-[24px] ${className}`}>{ children }</div>
}

export function TextMedium2({ children, className }){
    return <div className={`text-24px leading-24px md:text-[32px] md:leading-[32px] ${className}`}>{ children }</div>   
}