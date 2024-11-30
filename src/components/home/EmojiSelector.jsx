import { useState } from "react";
import { CaretDown } from "../Icons/Arrow";
import { TextMedium } from "../text/Text";

export default function EmojiSelector({totalVotes, day}){
    const emojiClassName = "w-14 hover:scale-[1.2] ease-in duration-300 cursor-pointer relative";
    const [selectedEmoji, setSelectedEmoji] = useState();
    const [showEmojis, setShowEmojis] = useState(false);
    // const dayCode = day.toLowerCase().replaceAll(' ', '-');

    const emojiList = [
        {
            name: 'happy',
            value: 80,
        },
        {
            name: 'pray',
            value: 10,
        },
        {
            name: 'wow',
            value: 30,
        },
        {
            name: 'heart',
            value: 15,
        },
        {
            name: 'pleading',
            value: 0,
        }
    ];

    return(
        <div className="mt-8">
            <div className={`max-w-4xl mx-auto bg-gradient-to-r rounded-2xl ${!showEmojis ? 'neumorphism-primary' : 'neumorphism-primary-clicked' }`}>
                <button className="flex justify-between items-center text-accent w-full p-8" onClick={() => {setShowEmojis(!showEmojis)}}>
                    <TextMedium className="font-bold">{day}</TextMedium>
                    <div className={`scale-[2] transition-all ease-in duration-200 ${ showEmojis ? 'rotate-180' : ''}`}>
                        <CaretDown />
                    </div>
                </button>
                {
                    showEmojis &&
                    <div className="emojis flex flex-col gap-6 px-8 pb-8">
                        {
                            emojiList.map((item) => {
                                const active = item.name === selectedEmoji;
                                return(
                                    <div key={item.name} className="flex items-center gap-4">
                                        <button className={`relative ${active ? 'active-emoji' : ''}`}  onClick={() => {setSelectedEmoji(item.name)}}>
                                            <img src={`/web-assets/images/emojis/${item.name}.png`} alt={`${item.name} emoji`} className={emojiClassName + (active ? ' scale-[1.1]' : '')}/>
                                        </button>
                                        <div className="w-full rounded-xl bg-white">
                                            <div style={{width: (item.value / totalVotes) * 100 + '%'}} 
                                                className={`bg-gradient-to-r from-light-gray to-accent to-50% rounded-xl ${item.value > 0 ? 'py-2': 'py-2'}`}></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
    
}