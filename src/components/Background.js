import './Background.css';
export default function Background(){
    const items = Array.from({ length: 51 }, (_, index) => index + 1);
    return (
        <div className='-z-[1]'>
            <div class="background">
                {
                    items.map((i) => (
                        <span key={i}></span>
                    ))
                }
                
            </div>
        </div>
    )
}