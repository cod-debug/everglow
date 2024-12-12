import { useEffect, useState } from "react";
import { CaretDown } from "../Icons/Arrow";
import { TextMedium } from "../text/Text";
import Loader from "../Loader";
import { formatNumber } from "../../utils/numbers";
import { useRouteLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const defaultEmojiList = [
    {
        name: 'happy',
        value: 0,
    },
    {
        name: 'pray',
        value: 0,
    },
    {
        name: 'wow',
        value: 0,
    },
    {
        name: 'heart',
        value: 0,
    },
    {
        name: 'pleading',
        value: 0,
    }
];
const fixedOrder = ['happy', 'pray', 'wow', 'heart', 'pleading'];
let totalVotes = 0;

export default function EmojiSelector({day, eventDate:ed}){
    const rootLoaderData = useRouteLoaderData('root');
    const { ip } = JSON.parse(rootLoaderData);
    const emojiClassName = "w-14 hover:scale-[1.2] ease-in duration-300 cursor-pointer relative";
    const [selectedEmoji, setSelectedEmoji] = useState();
    const [showEmojis, setShowEmojis] = useState(false);
    const [emojiList, setEmojiList] = useState(defaultEmojiList);
    const [isLoading, setIsLoading] = useState(false);
    const dayCode = day.toLowerCase().replaceAll(' ', '-');
    // const activateEvent = new Date() === new Date(ed);

    async function getMoodCount(){
        setIsLoading(true);
        const base_url = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${base_url}/api/v1/moodboard/count?day=${dayCode}&ip_address=${btoa(ip)}`);
        const resData = await response.json();

        if(response.ok){
            setSelectedEmoji(resData.selected_mood);

            setEmojiList(sortMood(resData.moods));
            totalVotes = resData.total_count;
        }
        setIsLoading(false);
    }

    function toggleMood(){
        if(isLoading) return false;
        
        if(!showEmojis){
            getMoodCount();
        }
        setShowEmojis(!showEmojis);
    }

    function sortMood(arr){
        return  arr.sort((a, b) => fixedOrder.indexOf(a.name) - fixedOrder.indexOf(b.name));
    }

    async function setEmoji(name){
        if(selectedEmoji !== name){
            setSelectedEmoji(name);
            let payload = {
                mood: name,
                day: dayCode,
                ip_address: btoa(ip)
            }
            const base_url = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${base_url}/api/v1/moodboard`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            
            if(response.ok){
                // add toast puhon
                toast("Successfully saved. Please do not spam.");
            }
            
        }
        getMoodCount();
    }

    return(
        <div className="mt-8">
            <ToastContainer />
            <div className={`max-w-4xl mx-auto bg-gradient-to-r rounded-2xl ${!showEmojis ? 'neumorphism-primary' : 'neumorphism-primary-clicked' }`}>
                <button className="flex text-lg justify-between items-center text-accent w-full p-8 relative" onClick={toggleMood}>
                    <div className="flex">
                        <TextMedium className="font-bold">{day}</TextMedium>
                    </div>
                    {
                        isLoading && 
                        <p className="text-accent absolute w-full -mx-8 "> 
                            <div className="flex justify-center"><Loader /></div>
                        </p>
                    }
                    <div className={`scale-[2] transition-all ease-in duration-200 ${ showEmojis ? 'rotate-180' : ''}`}>
                        <CaretDown />
                    </div>
                </button>
                {
                    showEmojis &&
                        <div className={`emojis flex flex-col gap-6 px-8 pb-8 ${isLoading ? 'opacity-50' : ''}`}>
                            {
                                emojiList.map((item) => {
                                    const active = item.name === selectedEmoji;
                                    return(
                                        <div key={item.name} className="flex items-center gap-4">
                                            <button className={`relative ${active ? 'active-emoji' : ''}`}  onClick={() => { !isLoading ? setEmoji(item.name) : () => {}}}>
                                                <img src={`/web-assets/images/emojis/${item.name}.png`} alt={`${item.name} emoji`} className={emojiClassName + (active ? ' scale-[1.1]' : '')}/>
                                            </button>
                                            <div className="w-full rounded-xl bg-white overflow-hidden">
                                                <div style={{width: item.value > 0 ? (item.value / totalVotes) * 100 + '%' : '0%'}} 
                                                className={`bg-gradient-to-r from-light-gray to-accent to-50% rounded-xl text-[11px] transition-all ease-in duration-300 text-right ${item.value > 0 ? 'py-[3px] px-2': 'py-[3px]'}`}>
                                                    { item.value > 0 && <p>{formatNumber((item.value / totalVotes) * 100)}%</p> }
                                                    { item.value <= 0 && <p>0%</p> }
                                                </div>
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