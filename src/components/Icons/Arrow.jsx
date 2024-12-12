export function CaretDown({size = 17}){
    return (<svg width={size} height={size} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.00008 5.16663L8.00008 9.16663L12.0001 5.16663L13.3334 6.49996L8.00008 11.8333L2.66675 6.49996L4.00008 5.16663Z" fill="currentColor"/></svg>)
}

export function CaretRight(){
    return <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.55101 0.500122L0.450195 1.60093L5.34935 6.50086L0.450195 11.3992L1.55101 12.5L7.55175 6.50086L1.55101 0.500122Z" fill="white"/></svg>

}

export function NextArrow(){
    return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1031 8.27515L11.1719 10.2064L16.9656 16.0001L11.1719 21.7939L13.1031 23.7251L20.8281 16.0001L13.1031 8.27515Z" fill="#595959"/></svg>

}

export function PreviousArrow(){
    return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.8969 23.7249L20.8281 21.7936L15.0344 15.9999L20.8281 10.2061L18.8969 8.27485L11.1719 15.9999L18.8969 23.7249Z" fill="#595959"/></svg>

}

export function ArrowRightUp(){
    return(
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_79_47)">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 14.8816L1.1144 15.9977L14.4 2.6793V11.2H16V0H4.72561L4.70161 1.6H13.3072L0 14.8816Z" fill="#595959"/>
            </g>
            <defs>
            <clipPath id="clip0_79_47">
                <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
        </svg>

    )
}

export function ArrowRight(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="w-4"><path fill="currentColor" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" dataName="Right"/></svg>
    )
}