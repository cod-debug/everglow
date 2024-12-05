import { CaretDown } from "../components/Icons/Arrow";
import Sparkle from "../components/workshop/Sparkle";

export default function Workshop(){
    return (
        <div className="bg-white">
            <div className="aspect-video overflow-hidden w-full bg-cover max-h-[100vh] relative" style={{ backgroundImage: "url(./web-assets/images/mountain-bg.avif)" }}>
                <Sparkle />
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
                    <div className="text-center">
                        <p className="text-[5rem] font-bold text-white text-creative scale-x-125">WORKSHOPS</p>
                        <a className="inline-block border border-white text-white p-2 rounded-2xl move-up-down" href="#workshops"><CaretDown size="34" /></a>
                    </div>
                </div>
            </div>
            <div className="text-white -mt-32 z-50 relative rotate-180 overflow-hidden" id="workshops">
                <svg className="scale-x-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="currentColor"><path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z" opacity=".5"></path><path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z" opacity=".5"></path><path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path></svg>
            </div>
        </div>
    )
}