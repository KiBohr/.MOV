import { Link } from "react-router-dom";

export const Footer = ({ showFooter = true }) => {
	if (!showFooter) return null; // Verhindert das Rendern, wenn `showFooter` false ist

	return (
		<footer className="w-100 flex justify-evenly gap-2.5 py-2.5 fixed bottom-0 left-[50%] translate-x-[-50%] bg-red-light transition-opacity duration-1000">
			<Link to="/home">
				<button type="button" className="relative">
					<img src="/public/home-icon.png" alt="Home-Icon" title="Home-Icon" aria-label="Home-Icon" />
				</button>
			</Link>
			<Link to="">
				<button type="button" className="relative">
					<img src="/public/favorite-icon.png" alt="Favorite-Icon" title="Favorite-Icon" aria-label="Favorite-Icon" />
				</button>
			</Link>
			<Link to="">
				<button type="button" className="relative">
					<img src="/public/download-icon.png" alt="Download-Icon" title="Download-Icon" aria-label="Download-Icon" />
				</button>
			</Link>
			<Link to="">
				<button type="button" className="relative">
					<img src="/public/user-icon.png" alt="User-Icon" title="User-Icon" aria-label="User-Icon" />
				</button>
			</Link>
		</footer>
	);
};
