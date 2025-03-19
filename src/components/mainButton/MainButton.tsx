import { Link } from "react-router-dom";

interface IMainButtonProps{
    buttonText: string,
    path: string,
}

const MainButton = ({buttonText, path}:IMainButtonProps) => {
    return ( 
    <>
        <Link className="border-red border-2 px-3 py-2 text-white transition ease-in-out hover:opacity-75" to={path} >{buttonText}</Link>
    </> 
    );
}
 
export default MainButton;