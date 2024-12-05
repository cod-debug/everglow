import { useLoaderData } from "react-router-dom";
import UploadPostForm from "../components/everglow-gallery/UploadPostForm";
import PostsList from "../components/everglow-gallery/PostsList";

const base_url = import.meta.env.VITE_API_BASE_URL;
export default function EverglowGallery(){
    const loaderData = useLoaderData();
    const posts = loaderData ? JSON.parse(loaderData) : [];

    return (
        <div className="w-full mt-28 mb-12">
            <UploadPostForm />
            <PostsList posts={posts} />
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