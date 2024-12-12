import { useState } from "react";

export default function SessionTwo(){
    const [showComments, setShowComments] = useState();

    function handleToggleShowComment(){
        setShowComments(!showComments);
    }
    return(
        <div className="neumorphism-primary rounded-lg text-white shadow-lg p-8">
            <div className="text-2xl px-4 w-full">
                <span className="text-script mr-2 text-4xl">Session 2:</span> <strong>EVERGLOW!</strong>
            </div>
            <div className="p-4 text-sm">
                <p className="indent-10">
                We are constantly faced with choices that lead us either toward darkness or into God’s light. 
                The darkness of sin blinds and separates us from God, leaving us feeling unworthy and lost. 
                The <strong>Seven Deadly Sins</strong>—<i>lust, gluttony, greed, sloth, wrath, envy, and pride</i>—represent destructive behaviors and attitudes that lead individuals away from God's light and onto paths of spiritual darkness.
                </p>
                <br />
                <p className="indent-10">
                    Yet, <strong>God’s light</strong> offers us a path of redemption, hope, and purpose. 
                    By embracing the <strong>fruits of the Spirit</strong>—<i>love, joy, peace, patience, kindness, faithfulness and self-control</i>—we can overcome the struggles of this world and live in unity with Him and one another.
                </p>
                <br />
                <p className="indent-10">
                    Let us stand firm as <strong>children of light</strong>, reflecting God’s boundless love and peace. 
                    Even the smallest light can bring hope to the darkest corners through Love, Integrity, Generosity, Humility and Transformation. 
                    Together, we can shine brightly, dispelling darkness and leading others to His grace, goodness, righteousness and truth.
                </p>
            </div>
            <div className="mt-8 text-sm">
                <button className="flex w-full gap-2 items-center justify-between text-sm font-bold text-accent hover:text-accent/80 transition-all ease-in duration-200" onClick={handleToggleShowComment}>
                    <div><span className="text-lg">10</span> Comments</div>
                </button>
                {
                    showComments && 
                    <div className="p-2">
                        <div className="flex flex-col gap-2">
                            <div>
                                <textarea className="w-full h-full min-h-32 border border-gray-300 rounded resize-none bg-primary text-white" 
                                placeholder="Write something about this session (225 characters)"
                                maxLength={225}
                                id="captionTextArea"></textarea>
                            </div>
                            <div className="text-right">
                                <button className="text-sm bg-accent hover:bg-primary transition-all ease-in duration-200 py-1 px-8 rounded-xl text-white">Send</button>
                            </div>
                        </div>
                        <div className="mt-6 max-h-[400px] overflow-auto">
                            <div className="p-4 bg-[#051025] rounded">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p className="mt-4 text-white/60 text-right text-xs">December 13, 2024 01:38 AM</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}