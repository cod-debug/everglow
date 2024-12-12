export function SmoothScroll(eID) {
    
    const targetElement = document.querySelector("#"+eID);
    targetElement.style.scrollMarginTop="90px";
    
    if (targetElement) { 
        targetElement.scrollIntoView({ behavior:"smooth" });
    }
}