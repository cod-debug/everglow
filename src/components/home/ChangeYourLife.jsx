import { CheckCircle } from "../Icons/Check";
import { TextMedium, TextMedium2, TextNormal, TextNormal2 } from "../text/Text";

const whatYoullLearn = [
    {
        title: "Introduction to UI/UX Design",
        description: "Covers basics like UI vs UX, user-centered design principles, and design's role in product development."
    },
    {
        title: "User Research and Personas",
        description: "Teaches methods for gathering user insights, and creating personas to guide design decisions."
    },
    {
        title: "Wireframing and Prototyping",
        description: "Focuses on creating low-fidelity wireframes and interactive prototypes for user testing and iteration."
    },
    {
        title: "Visual Design and UI Tools",
        description: "Covers visual design principles and use of tools like Figma for high-fidelity mockups and prototypes."
    }
];

export default function ChangeYourLife(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="h-[342px] w-full rounded-3xl bg-cover bg-center relative" style={{backgroundImage: 'url(/web-assets/images/hand-table-palette.jpg)'}}>
                            <div className="hidden md:block border border-secondary-light absolute h-full w-full rounded-3xl top-5 right-5"></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-[141px] bg-gradient-to-b from-secondary-light to-primary-light rounded-xl relative">
                            <div className="w-1/2 bg-cover bg-[80%] absolute top-[46px] -pb-20 h-[245px] -mt-24 bg-no-repeat" 
                            style={{ backgroundImage: 'url(/web-assets/images/love-earth.png)' }}></div>
                            <div className="flex h-[141px] justify-end items-center px-4 relative z-10">
                                <TextMedium className="text-white w-1/2 font-bold">Grow with Up Version</TextMedium>
                            </div>
                            <div className="w-1/2 bg-cover bg-[0%] absolute bottom-0 opacity-10 right-0 -pb-20 h-[75px] -mt-24 bg-no-repeat" 
                            style={{ backgroundImage: 'url(/web-assets/logo-square.png)' }}></div>
                        </div>
                        <div className="h-[326px] w-full rounded-3xl bg-cover bg-center mt-8" style={{backgroundImage: 'url(/web-assets/images/hand-table-keyboard.jpg)'}}></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-8">
                    <TextMedium2 className="font-bold">Change your life, become a UI/UX Designer</TextMedium2>
                    <TextNormal className="text-dark-gray">Learn the skills of a UX/UI Designer with a micro class around the world. Complete case studies, join live online classes in Figma and publish your job-ready UX/UI Design Portfolio during our live UX/UI Design Bootcamp.</TextNormal>
                    <div className="flex flex-col gap-4">
                        {
                            whatYoullLearn.map((i) => (
                                <div className="flex gap-2" key={i.title}>
                                    <div className="text-primary-dark"><CheckCircle /></div>
                                    <div className="flex flex-col gap-3">
                                        <TextNormal2 className="font-bold text-primary-dark">{ i.title }</TextNormal2>
                                        <TextNormal className="text-dark-gray">{ i.description }</TextNormal>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}