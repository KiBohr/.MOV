import { Link } from "react-router-dom";

interface IMainButtonProps {
	buttonText: string,
	path: string,
}

const MainButton = ({ buttonText, path }: IMainButtonProps) => {
	return (
		<>
			<Link className="main-button border-red bg-red rounded-lg border-4 px-8 py-2 mb-5 text-white font-semibold" to={path} >{buttonText}</Link>
		</>
	);
}

export default MainButton;
