import { SmoothScroll } from "../assets/custom";
import { FadeInLeft, FadeInUp } from "../components/animations/Animations";
import Container from "../components/Container";
import { CaretDown } from "../components/Icons/Arrow";
import SessionOne from "../components/sessions/SessionOne";
import SessionTwo from "../components/sessions/SessionTwo";
import Sparkle from "../components/workshop/Sparkle";

export default function Sessions(){
    window.scrollTo(0, 0);
    return(
        <div className="bg-primary text-white">
            <div className="overflow-hidden w-full bg-cover h-[100vh] relative" style={{ backgroundImage: "linear-gradient(to bottom, #000000EA, #122543EA), url(./web-assets/images/session-bg.PNG)" }}>
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
                    <div className="text-center">
                        <FadeInLeft>
                            <p className="text-[3rem] md:text-[5rem] font-bold text-white text-script text-creative text-scale-x-125 md:scale-x-150 text-glow">Sessions</p>
                        </FadeInLeft>
                        <FadeInUp>
                            <button className="inline-block border border-white text-white p-1 md:p-2 rounded-2xl move-up-down" 
                            onClick={() => {SmoothScroll('sessions')}}><CaretDown size="34" /></button>
                        </FadeInUp>
                    </div>
                </div>
                <Sparkle className="z-40" />
            </div>
            <div id="sessions">
                <Container className="px-2 py-8 md:p-8 flex flex-col gap-8">
                    <FadeInUp>
                        <SessionOne />
                    </FadeInUp>
                    <FadeInUp>
                        <SessionTwo />
                    </FadeInUp>
                </Container>
            </div>
        </div>
    )
}