import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import { useEffect } from "react";
import EverglowGallery, { loader as everGlowloader } from "./pages/EverglowGallery";
import Workshop from "./pages/WorkShop";
import Sessions from "./pages/Sessions";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    id: 'root',
    loader: loader,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'gallery',
        id: 'gallery',
        element: <EverglowGallery />,
        loader: everGlowloader,
      },
      {
        path: 'workshop',
        element: <Workshop />,
      },
      {
        path: 'sessions',
        element: <Sessions />,
      }
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

async function loader(){
  const response = await fetch('https://api.ipify.org?format=json');
  const resData = await response.json();

  return new Response(JSON.stringify(resData), {status: 200});
}