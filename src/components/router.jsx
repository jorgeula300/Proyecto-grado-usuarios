import { createBrowserRouter } from "react-router-dom";
import { Mapa } from "../pages/Mapa";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import LayoutPublic from "./LayoutPublic";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [

            {
                index: true,
                element: <Mapa /> ,  
            },
            {
                path: "/About",
                element: <About />,
            }]
    }

])