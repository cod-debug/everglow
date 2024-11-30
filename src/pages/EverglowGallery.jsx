import Container from "../components/Container";
import UploadIcon from "../components/Icons/Upload";
import { TextMedium, TextNormal } from "../components/text/Text";

export default function EverglowGallery(){
    return (<div className="w-full mt-28">
        <Container className="bg-primary-light w-full p-6 rounded-xl">
            <div className="flex flex-col gap-8">
                <TextMedium className="text-white font-bold">Lorem ipsum <span className="text-accent">DOLOR SET AMIT</span></TextMedium>
                <div>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-4">
                            <label className="aspect-square border border-dashed border-secondary flex justify-center items-center w-1/2 md:w-full" htmlFor="imageUpload">
                                <span className="sr-only">Upload image</span>
                                <div className="text-accent">
                                    <div className="w-[2rem] md:w-[6rem] mx-auto">
                                        <UploadIcon />
                                    </div>
                                    <TextNormal className="text-center">Click to upload image</TextNormal>
                                </div>
                                <input type="file" accept="images" className="hidden" id="imageUpload" />
                            </label>
                        </div>
                        <div className="col-span-12 md:col-span-8 flex">
                            <textarea className="w-full h-full min-h-40 border border-gray-300 rounded resize-none bg-primary text-white" placeholder="Write something about this picture"></textarea>
                        </div>
                    </div>
                    <div className="text-right mt-4">
                        <button className="bg-accent w-full md:w-1/2 py-2 px-2 rounded-3xl font-bold">UPLOAD</button>
                    </div>
                </div>
            </div>
        </Container>
    </div>)
}