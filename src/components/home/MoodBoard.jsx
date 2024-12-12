import { TextLarge } from "../text/Text";
import EmojiSelector from "./EmojiSelector";
import { FadeInLeft } from "../animations/Animations";
import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
};

const program = [
    {
        day: "Day 1",
        events: [
            {
                time: '5:30 PM - 6:30 PM',
                name: 'Arrival'
            },
            {
                time: '6:30 PM - 6:45 PM',
                name: 'Opening'
            },
            {
                time: '6:45 PM - 7:00 PM',
                name: 'Orientation'
            },
            {
                time: '7:00 PM - 8:00 PM',
                name: 'Dinner'
            },
            {
                time: '8:00 PM - 8:30 PM',
                name: 'Gathering'
            },
            {
                time: '8:30 PM - 8:35 PM',
                name: 'Opeing Prayer'
            },
            {
                time: '8:30 PM - 8:45 PM',
                name: 'Energizer / Game'
            },
            {
                time: '8:45 PM - 9:25 PM',
                name: 'Talk 1'
            },
            {
                time: '9:25 PM - 9:55 PM',
                name: 'Group Discussion'
            },
            {
                time: '9:55 PM - 10:00 PM',
                name: 'Closing'
            },
            {
                time: '10:00 PM - 11:00 PM',
                name: 'Lights Out'
            }
        ]
    },
    {
        day: "Day 2",
        events: [
            {
                time: '5:30 PM - 6:30 PM',
                name: 'Arrival'
            },
            {
                time: '6:30 PM - 6:45 PM',
                name: 'Opening'
            },
            {
                time: '6:45 PM - 7:00 PM',
                name: 'Orientation'
            },
            {
                time: '7:00 PM - 8:00 PM',
                name: 'Dinner'
            },
            {
                time: '8:00 PM - 8:30 PM',
                name: 'Gathering'
            },
            {
                time: '8:30 PM - 8:35 PM',
                name: 'Opeing Prayer'
            },
            {
                time: '8:30 PM - 8:45 PM',
                name: 'Energizer / Game'
            },
            {
                time: '8:45 PM - 9:25 PM',
                name: 'Talk 1'
            },
            {
                time: '9:25 PM - 9:55 PM',
                name: 'Group Discussion'
            },
            {
                time: '9:55 PM - 10:00 PM',
                name: 'Closing'
            },
            {
                time: '10:00 PM - 11:00 PM',
                name: 'Lights Out'
            }
        ]
    },
    {
        day: "Day 2",
        events: [
            {
                time: '5:30 PM - 6:30 PM',
                name: 'Arrival'
            },
            {
                time: '6:30 PM - 6:45 PM',
                name: 'Opening'
            },
            {
                time: '6:45 PM - 7:00 PM',
                name: 'Orientation'
            },
            {
                time: '7:00 PM - 8:00 PM',
                name: 'Dinner'
            },
            {
                time: '8:00 PM - 8:30 PM',
                name: 'Gathering'
            },
            {
                time: '8:30 PM - 8:35 PM',
                name: 'Opeing Prayer'
            },
            {
                time: '8:30 PM - 8:45 PM',
                name: 'Energizer / Game'
            },
            {
                time: '8:45 PM - 9:25 PM',
                name: 'Talk 1'
            },
            {
                time: '9:25 PM - 9:55 PM',
                name: 'Group Discussion'
            },
            {
                time: '9:55 PM - 10:00 PM',
                name: 'Closing'
            },
            {
                time: '10:00 PM - 11:00 PM',
                name: 'Lights Out'
            }
        ]
    },
    {
        day: "Day 3",
        events: [
            {
                time: '5:30 PM - 6:30 PM',
                name: 'Arrival'
            },
            {
                time: '6:30 PM - 6:45 PM',
                name: 'Opening'
            },
            {
                time: '6:45 PM - 7:00 PM',
                name: 'Orientation'
            },
            {
                time: '7:00 PM - 8:00 PM',
                name: 'Dinner'
            },
            {
                time: '8:00 PM - 8:30 PM',
                name: 'Gathering'
            },
            {
                time: '8:30 PM - 8:35 PM',
                name: 'Opeing Prayer'
            },
            {
                time: '8:30 PM - 8:45 PM',
                name: 'Energizer / Game'
            },
            {
                time: '8:45 PM - 9:25 PM',
                name: 'Talk 1'
            },
            {
                time: '9:25 PM - 9:55 PM',
                name: 'Group Discussion'
            },
            {
                time: '9:55 PM - 10:00 PM',
                name: 'Closing'
            },
            {
                time: '10:00 PM - 11:00 PM',
                name: 'Lights Out'
            }
        ]
    }
]

export default function MoodBoard(){
    return(
        <div className="my-12 px-12 text-white">
            <FadeInLeft>
                <TextLarge className="mt-2">
                    Tell us how you feel about 
                    <span className="bg-gradient-to-tr from-accent to-white font-bold bg-clip-text text-transparent text-script pb-2 text-6xl px-4">Everglow</span>
                </TextLarge>
            </FadeInLeft>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
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
                <div className="relative">
                    <Carousel responsive={responsive} 
                    infinite={true}
                    autoPlay={true}>
                        {
                            program.map((item, key) => (
                                <div key={`${item.day}${key}`} className="p-4">
                                    <div className="flex h-[500px] p-[1px] w-full bg-primary bg-gradient-to-r from-accent/20 via-accent to-accent/20 rounded-xl">
                                        <div className="bg-primary-dark p-6 flex flex-col w-full rounded-xl">
                                            <p className="text-script text-3xl text-accent mt-2">{item.day}</p>
                                            {
                                                item.events.map((i, k) => (
                                                    <div className="grid grid-cols-2 gap-10 mt-2 text-white/80" key={`${i.name}${k}`}>
                                                        <div className="text-right">
                                                            { i.time }
                                                        </div>
                                                        <div>
                                                            { i.name }
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}