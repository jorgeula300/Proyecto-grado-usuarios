import { createBrowserRouter } from "react-router-dom";
import { Mapa } from "../pages/Mapa";
import NotFound from "../pages/NotFound";
import LayoutPublic from "./LayoutPublic";
import Nosoros from "./Nosotros";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [

            {
                index: true,
                element: <Mapa /> ,  
            },{
                path: '/nosotros',
                element: <Nosoros/> ,
            }]
    }

])