import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { FadeIn, FadeInLeft, FadeInRight, FadeInUp } from "../animations/Animations";
import Container from "../Container";
import UploadIcon from "../Icons/Upload";
import { TextMedium, TextNormal } from "../text/Text";
import { useState } from "react";
import Loader from "../Loader";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let result = "";

export default function UploadPostForm(){
    const rootLoaderData = useRouteLoaderData('root');
    const { ip } = JSON.parse(rootLoaderData);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submitButtonClassNames = 'w-full md:w-1/2 py-2 px-2 rounded-2xl font-bold text-white inline-block';

    async function uploadPost(){
        const uploadedFile = document.getElementById('imageUpload');
        const captionTextArea = document.getElementById('captionTextArea');
        const imagePlaceholder = document.getElementById('imagePlaceholder');

        const fd = new FormData();

        fd.append('file', uploadedFile.files[0]);
        fd.append('caption', captionTextArea.value);
        fd.append('ip_address', btoa(ip));
        
        setIsSubmitting(true);
        const base_url = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${base_url}/api/v1/gallery/upload`, {
            method: "POST",
            body: fd
        });

        if(response.ok){
            result = "Successfully uploaded."
            captionTextArea.value = "";
            uploadedFile.value = "";
            imageUploadHolder.style.background = '';
            imagePlaceholder.className = "text-accent block";
            toast("Successfully uploaded!");
            navigate('/gallery');
        }
        setIsSubmitting(false);
    }  

    function handleUpdatePhoto() {
        const imageUploadHolder = document.getElementById('imageUploadHolder');
        const uploadedFile = document.getElementById('imageUpload');
        const imagePlaceholder = document.getElementById('imagePlaceholder');

        const file = uploadedFile.files[0];

        if(file){
            const reader = new FileReader();
            reader.onload = (e) => {
                imageUploadHolder.style.background = `url(${e.target.result}) no-repeat`;
                imageUploadHolder.style.backgroundSize = 'cover';
                imageUploadHolder.style.backgroundPosition = 'center';
                imagePlaceholder.className = "text-accent hidden";
            }
            reader.readAsDataURL(file);
        } else {
            imageUploadHolder.style.background = '';
            imagePlaceholder.className = "text-accent block";
        }
    }

    return(
        <FadeIn>
            <ToastContainer />
            <Container className="bg-primary-light w-[95%] md:w-full p-6 rounded-xl relative">
                {
                    isSubmitting &&
                    <div className="absolute h-full w-full rounded-xl -m-6 flex items-center justify-center bg-black/65 backdrop-blur">
                        <div className="w-fit scale-150">
                            <Loader />
                        </div>
                    </div>
                }
                <div className="flex flex-col gap-8">
                    <FadeInUp>
                        <TextMedium className="text-white font-bold">Tell us your <span className="text-accent text-script text-4xl">Everglow &nbsp;</span> moment</TextMedium>
                    </FadeInUp>
                    <div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-4">
                                <FadeInLeft>
                                    <label className="cursor-pointer aspect-square border border-dashed border-secondary flex justify-center items-center w-1/2 md:w-full rounded-xl" id="imageUploadHolder" htmlFor="imageUpload">
                                        <span className="sr-only">Upload image</span>
                                        <div className="text-accent" id="imagePlaceholder">
                                            <div className="w-[2rem] md:w-[6rem] mx-auto">
                                                <UploadIcon />
                                            </div>
                                            <TextNormal className="text-center">Click to upload image</TextNormal>
                                        </div>
                                        <input type="file" accept="image/*" className="hidden" id="imageUpload" disabled={isSubmitting ? 'disabled' : undefined} onChange={handleUpdatePhoto} />
                                    </label>
                                </FadeInLeft>
                            </div>
                            <div className="col-span-12 md:col-span-8 flex">
                                <FadeInRight className="w-full">
                                    <textarea className="w-full h-full min-h-40 border border-gray-300 rounded resize-none bg-primary text-white" 
                                        placeholder="Write something about this picture"
                                        id="captionTextArea"
                                        disabled={isSubmitting ? 'disabled' : undefined}
                                    ></textarea>
                                </FadeInRight>
                            </div>
                        </div>
                        <div className="text-right mt-4">
                            <FadeInUp>
                                <button className="w-full md:w-1/2 py-2 px-2 rounded-2xl text-[12pt] leading-6 font-bold text-white bg-accent inline-block"
                                    disabled={isSubmitting} 
                                    onClick={uploadPost}
                                >
                                    { isSubmitting ? 'SUBMITTING...' : 'UPLOAD'}
                                </button>
                            </FadeInUp>
                        </div>
                    </div>
                </div>
            </Container>
        </FadeIn>
    )
}