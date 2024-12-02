import { useLoaderData } from "react-router-dom";
import UploadPostForm from "../components/everglow-gallery/UploadPostForm";
import Container from "../components/Container";
import { FadeInUp } from "../components/animations/Animations";

const base_url = import.meta.env.VITE_API_BASE_URL;
export default function EverglowGallery(){
    const loaderData = useLoaderData();
    const posts = loaderData ? JSON.parse(loaderData) : [];

    return (
        <div className="w-full mt-28 mb-12">
            <UploadPostForm />
            <div className="posts mt-5">
                <Container className="px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        posts.length > 0 && posts.map((post) => {
                            const image_url = `${base_url}/uploads/${post.image_name}`;

                            return(
                                <FadeInUp key={post.id}>
                                    <div className="relative rounded-2xl overflow-hidden aspect-square bg-cover bg-center">
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
        </div>
    )
}

export async function loader(){
    const response = await fetch(`${base_url}/api/v1/gallery`);
    const resData = await response.json();

    if(response.ok){
        return new Response(JSON.stringify(resData), {status: 200});    
    }
} 