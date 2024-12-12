import { FadeInLeft, FadeInRight } from "../animations/Animations";
import { TextLarge, TextNormal } from "../text/Text";

export default function Banner(){
    return (
        <div className="">
            <div className="h-full w-full py-10 flex items-center px-8 md:px-24 text-white bg-cover bg-no-repeat bg-center min-h-[100vh]" 
                style={
                    {
                        background: 'linear-gradient(to right top, #03314859 60%, #a3830a7d 200%) fixed, url(/web-assets/images/glow.jpg)',
                        backgroundAttachment: 'fixed'
                    }
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    <div className="order-2 md:order-1 flex items-center">
                        <div className="text-center mx-auto">
                            <FadeInLeft>
                                <TextLarge className="font-bold">YFC NEGROS ORIENTAL <br /> <span className="text-accent text-glow">PROVINCAL CONFERENCE 2024</span></TextLarge>
                                <TextNormal className="mt-4 text-center">
                                    FOR YOU WERE ONCE DARKNESS BUT NOW YOU ARE LIGHT IN THE LORD
                                    <br />
                                    <span className="text-3xl text-script mt-3 inline-block">Live as children of light,</span>
                                    <br />
                                    FOR LIGHT PRODUCES EVERY KIND OF GOODNESS
                                    <br />
                                    AND RIGHTEOUSNESS AND TRUTH
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