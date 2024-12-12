import { TextLarge } from "../text/Text";
import EmojiSelector from "./EmojiSelector";
import { FadeInLeft } from "../animations/Animations";

export default function MoodBoard(){
    return(
        <div className="my-12 px-12 text-white">
            <FadeInLeft>
                <TextLarge className="mt-2">
                    Tell us how you feel for 
                    <span className="bg-gradient-to-tr from-accent to-white font-bold bg-clip-text text-transparent text-script pb-2 text-6xl">Everglow</span>
                </TextLarge>
            </FadeInLeft>
            <FadeInLeft>
                <EmojiSelector day="Day 1" eventDate="2024-12-20" />
            </FadeInLeft>
            <FadeInLeft>
                <EmojiSelector day="Day 2" eventDate="2024-12-21" />
            </FadeInLeft>
            <FadeInLeft>
                <EmojiSelector day="Day 3" eventDate="2024-12-22" />
            </FadeInLeft>
        </div>
    )
}