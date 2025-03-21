import "./Footer.css"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer = ({ showFooter = true }) => {
	const location = useLocation();
	const [activeButton, setActiveButton] = useState(location.pathname);

	if (!showFooter) return null;

	const handleClick = (path: string) => {
		setActiveButton(path);
	};

	return (
		<footer className="w-full flex justify-evenly gap-2.5 py-2.5 fixed bottom-0 left-[50%] translate-x-[-50%] bg-red-light transition-opacity duration-1000 z-20">
			<Link to="/home" onClick={() => handleClick("/home")}>
				<button type="button" className={`relative ${activeButton === "/home" ? "active" : ""}`}>
					<img src="/public/img/home-icon.png" alt="Home-Icon" title="Home-Icon" aria-label="Home-Icon" />
				</button>
			</Link>
			<Link to="/favorites" onClick={() => handleClick("/favorites")}>
				<button type="button" className={`relative ${activeButton === "/favorites" ? "active" : ""}`}>
					<img src="/public/img/favorite-icon.png" alt="Favorite-Icon" title="Favorite-Icon" aria-label="Favorite-Icon" />
				</button>
			</Link>
			<Link to="/downloads" onClick={() => handleClick("/downloads")}>
				<button type="button" className={`relative ${activeButton === "/downloads" ? "active" : ""}`}>
					<img src="/public/img/download-icon.png" alt="Download-Icon" title="Download-Icon" aria-label="Download-Icon" />
				</button>
			</Link>
			<Link to="/profile" onClick={() => handleClick("/profile")}>
				<button type="button" className={`relative ${activeButton === "/profile" ? "active" : ""}`}>
					<img src="/public/img/user-icon.png" alt="User-Icon" title="User-Icon" aria-label="User-Icon" />
				</button>
			</Link>
		</footer>
	);
};
