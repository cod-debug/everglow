import { Await, json, useRouteLoaderData } from "react-router-dom";
import UploadPostForm from "../components/everglow-gallery/UploadPostForm";
import PostsList from "../components/everglow-gallery/PostsList";
import { Suspense } from "react";
import Loader from "../components/Loader";

const base_url = import.meta.env.VITE_API_BASE_URL;
export default function EverglowGallery(){
    const { posts } = useRouteLoaderData('gallery');

    return (
        <div className="w-full mt-28 mb-12">
            <UploadPostForm />
            <Suspense fallback={<div className="flex justify-center"><Loader /></div>}>
                <Await resolve={posts}>
                    { (loadedPosts) => <PostsList posts={loadedPosts} /> }
                </Await>
            </Suspense>
        </div>
    )
}

async function loadPosts(){
    const response = await fetch(`${base_url}/api/v1/gallery`);

    if (!response.ok) {
        return { message: 'Could not fetch events.' }
    }

    const resData = await response.json();
    return resData;
}

export async function loader(){
    return { posts: loadPosts() };
} 