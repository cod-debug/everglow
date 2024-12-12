import { useState } from "react"

export default function SessionOne(){
    const [showComments, setShowComments] = useState();

    function handleToggleShowComment(){
        setShowComments(!showComments);
    }

    return(
        <div className="neumorphism-primary rounded-lg text-white shadow-lg p-8">
            <div className="text-2xl px-4 w-full">
                <span className="text-script mr-2 text-4xl">Session 1:</span> <strong>EVER-READY!</strong>
            </div>
            <div className="p-4 text-sm">
                <p className="indent-10">
                    We are called to celebrate the dynamic and life-giving journey of being part of Youth for Christ, where <strong>fun</strong>, <strong>friendship</strong>, <strong>freedom</strong>, and <strong>faith</strong> bring purpose to the lives of young believers. By embodying these values and embracing the <strong>YFC identities</strong> <i>
                        (Missionary, Model of Excellence, Patriot, Champion of the Poor, 100% Free, Single-minded for God, and Source of Unity in the Family)</i> and <strong>YFC advocacies</strong> <i>(A+ 100% Free, G-Project, and RevUp)</i>, members are equipped to become resilient disciples, unshaken by the challenges of life, and always prepared to respond to God’s call.
                </p>
                <br />
                <p className="indent-10">
                    To be ever-ready is to commit to a life of faith and action, trusting that with God at the center, every member of YFC can truly bring Christ wherever they go, becoming living witnesses of His love and light.
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