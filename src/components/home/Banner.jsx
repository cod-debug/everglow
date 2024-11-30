import { FadeInLeft, FadeInRight } from "../animations/Animations";
import { TextLarge, TextNormal } from "../text/Text";

export default function Banner(){
    return (
        <div className="">
            <div className="h-full w-full py-10 flex items-center px-24 text-white bg-cover bg-no-repeat bg-center min-h-[100vh]" 
                style={
                    {
                        background: 'linear-gradient(to top right, rgba(3, 72, 51, 0.3) 60%, rgba(200, 166, 40, 0.8) 200%), url(/web-assets/images/glow.jpg)',
                        backgroundAttachment: 'fixed'
                    }
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    <div className="order-2 md:order-1 flex items-center">
                        <div className="text-center">
                            <FadeInLeft>
                                <TextLarge className="font-bold">YFC NEGROS ORIENTAL <br /> <span className="text-accent text-glow">PROVCON 2024</span></TextLarge>
                                <TextNormal className="mt-4 italic">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusantium magni tempora facere quia aut dolores possimus deleniti perferendis necessitatibus saepe impedit eum blanditiis, voluptates numquam laboriosam ut animi quos.
                                </TextNormal>
                            </FadeInLeft>
                        </div>
                    </div>
                    <div className="flex justify-center items-center order-1 md:order-2">
                        <FadeInRight className="w-full justify-center flex">
                            <img alt="logo square" src="./web-assets/logo.png" className="w-3/4" />
                        </FadeInRight>
                    </div>
                </div>
            </div>
        </div>
    )
}