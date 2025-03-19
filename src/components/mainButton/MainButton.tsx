import { Link } from "react-router-dom";

interface IMainButtonProps{
    buttonText: string,
    path?: {},
}

const MainButton = ({buttonText, path}:IMainButtonProps) => {
    return ( 
    <>
        <Link className="border-red bg-red rounded-lg border-2 px-8 py-2 mb-5 text-white transition ease-in-out hover:opacity-75" to={path} >{buttonText}</Link>
    </> 
    );
}
 
export default MainButton;