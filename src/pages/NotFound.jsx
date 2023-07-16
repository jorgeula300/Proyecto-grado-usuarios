import { useRouteError } from "react-router-dom";
const NotFound = () =>{
    const error = useRouteError();
    console.log(error);
    return (<div>
    <h1>{`Error ${error.status}`}</h1>
    <p>Page not found</p>
    <p>{error.statusText || error.message}</p>
    
    </div>);
};
export default NotFound;