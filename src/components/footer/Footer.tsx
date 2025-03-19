import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="w-100 flex justify-evenly gap-2.5 py-2.5 fixed bottom-0 left-[50%] translate-x-[-50%] bg-red-light">
			<Link to="/home">
				<button type="button" className="relative">
					<img src="/public/home-icon.png" alt="Home-Icon" title="Home-Icon" aria-label="Home-Icon" />
				</button>
			</Link>
			{/* Verlinkungen bleiben erstmal leer */}
			<Link to="">
				<button type="button" className="relative">
					<img src="/public/favorite-icon.png" alt="Favorite-Icon" title="Favorite-Icon" aria-label="Favorite-Icon" />
				</button>
			</Link>
			{/* Verlinkungen bleiben erstmal leer */}
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
		</footer >
	);
};
