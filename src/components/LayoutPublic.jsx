import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";

const LayoutPublic = () => {
    return (<>
        <Menu />

        <main className="main">
            <Outlet />
        </main>



    </>);
}

export default LayoutPublic; 