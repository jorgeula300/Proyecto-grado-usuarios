import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    return (<div className=" w-screen h-screen flex justify-center text-center">
        <h1>{`Error ${error.status}`}</h1>
        <p>Page not found</p>
        <p>{error.statusText || error.message}</p>
        <Link className="btLink" to={"/"}>Ir al inicio</Link>

    </div>);
};
export default NotFound;