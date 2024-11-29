import { Outlet, useLoaderData } from "react-router-dom";
import Background from "../components/Background";

export default function MainLayout(){
    const data = useLoaderData();
    return <div className="bg-primary min-h-[100vh]">
        <Background />
        <div className="relative">
            <Outlet context={data} />
        </div>
    </div>
}