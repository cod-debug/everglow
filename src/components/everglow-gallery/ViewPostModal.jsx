import { FadeInUp } from "../animations/Animations"
import Container from "../Container"

export default function ViewPostModal({ selectedPost, onHandleClose }){
    if(!selectedPost){
        return undefined
    } 
    return(
        <div className="fixed top-0 left-0 h-[100vh] w-[100vw] overflow-auto z-[2000] bg-primary/80 backdrop-blur-sm">
            <FadeInUp> 
                <Container className="text-primary bg-white my-8 relative rounded-2xl overflow-hidden">
                    <button className="absolute top-4 right-6 text-2xl scale-x-150 text-glow text-white" onClick={() => { onHandleClose(null) }}>X</button>
                    <div className="rounded-lg">
                        <img src={selectedPost.image_url} alt={selectedPost.image_url} className="aspect-video w-full" />
                    </div>
                    <div className="p-4" dangerouslySetInnerHTML={{__html: selectedPost.caption.replaceAll("\n", "<br />")}}></div>
                </Container>
            </FadeInUp>
        </div>
    )
}