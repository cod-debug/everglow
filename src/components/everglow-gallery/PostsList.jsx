import { useState } from "react";
import { FadeInUp } from "../animations/Animations";
import Container from "../Container";
import ViewPostModal from "./ViewPostModal";

const base_url = import.meta.env.VITE_API_BASE_URL;
export default function PostsList({ posts }){
    const [selectedPost, setSelectedPost] = useState(null);

    function handleShowFullDetails(post){
        setSelectedPost(post);
    }

    function handleClose(val){
        setSelectedPost(val);
    }
    return(
        <>
            <div className="posts mt-5">
                <Container className="px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        posts.length > 0 && posts.map((post) => {
                            const image_url = `${base_url}/uploads/${post.image_name}`;

                            return(
                                <FadeInUp key={post.id}>
                                    <div className="relative rounded-2xl overflow-hidden aspect-square bg-cover bg-center ">
                                        <button
                                            className="absolute bottom-0 px-2 z-40
                                                    bg-gradient-to-t from-black/80 to-black/0
                                                    py-1 text-white text-left
                                                    hover:text-accent
                                                    w-full
                                                    transition-all ease-in duration-200
                                                    line-clamp-2 leading-tight"
                                            dangerouslySetInnerHTML={{ __html: post.caption.replaceAll("\n", "<br />") }}
                                            title="See more..."
                                            onClick={() => { handleShowFullDetails({...post, image_url}) }}
                                        ></button>
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage: `url(${image_url})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        ></div>
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                            backdropFilter: 'blur(10px)',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            }}
                                        ></div>
                                        <div className="relative flex items-center h-full">
                                            <img src={image_url} className="w-full" alt="uploaded" />
                                        </div>
                                    </div>
                                </FadeInUp>
                            )
                        })
                    }
                </Container>
            </div>
            <ViewPostModal selectedPost={selectedPost} onHandleClose={handleClose} />
        </>
    )
}