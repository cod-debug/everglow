import Container from "../components/Container";
import { CaretDown } from "../components/Icons/Arrow";
import Sparkle from "../components/workshop/Sparkle";

export default function Workshop(){
    return (
        <div className="bg-white">
            <div className="overflow-hidden w-full bg-cover h-[100vh] relative" style={{ backgroundImage: "url(./web-assets/images/mountain-bg.avif)" }}>
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
                    <div className="text-center">
                        <p className="text-[3rem] md:text-[5rem] font-bold text-white text-creative scale-x-125">WORKSHOPS</p>
                        <a className="inline-block border border-white text-white p-1 md:p-2 rounded-2xl move-up-down" href="#workshops"><CaretDown size="34" /></a>
                    </div>
                </div>
                <div className="text-primary-light w-full bottom-0 left-0 -mt-32 z-30 absolute rotate-180 overflow-hidden" id="workshops">
                    <svg className="scale-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="currentColor"><path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z" opacity=".5"></path><path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z" opacity=".5"></path><path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path></svg>
                </div>
                <Sparkle className="z-40" />
            </div>
            <div className="min-h-[100vh] bg-primary-light">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-4 py-8 gap-8">
                        <div className="neumorphism-primary-light p-4 rounded-2xl">
                            <img src="/web-assets/images/logo-placeholder.avif" alt="Placeholder logo" className="rounded-2xl" />
                            <p className="text-white text-center text-2xl p-2 font-bold scale-x-125">Workshop Title</p>
                        </div>
                        <div className="neumorphism-primary-light p-4 rounded-2xl">
                            <img src="/web-assets/images/logo-placeholder.avif" alt="Placeholder logo" className="rounded-2xl" />
                            <p className="text-white text-center text-2xl p-2 font-bold scale-x-125">Workshop Title</p>
                        </div>
                        <div className="neumorphism-primary-light p-4 rounded-2xl">
                            <img src="/web-assets/images/logo-placeholder.avif" alt="Placeholder logo" className="rounded-2xl" />
                            <p className="text-white text-center text-2xl p-2 font-bold scale-x-125">Workshop Title</p>
                        </div>
                        <div className="neumorphism-primary-light p-4 rounded-2xl">
                            <img src="/web-assets/images/logo-placeholder.avif" alt="Placeholder logo" className="rounded-2xl" />
                            <p className="text-white text-center text-2xl p-2 font-bold scale-x-125">Workshop Title</p>
                        </div>
                        <div className="neumorphism-primary-light p-4 rounded-2xl">
                            <img src="/web-assets/images/logo-placeholder.avif" alt="Placeholder logo" className="rounded-2xl" />
                            <p className="text-white text-center text-2xl p-2 font-bold scale-x-125">Workshop Title</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}