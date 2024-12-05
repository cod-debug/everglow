export default function Container({children, className, ...props}){
    return(
        <div className={`max-w-[80%] md:max-w-7xl mx-auto ${className}`} {...props}>
            { children }
        </div>
    )
}