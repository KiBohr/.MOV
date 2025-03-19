import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="flex w-100 gap-4 items-center">
			<h1 className="text-black text-2xl font-bold">Welcome!</h1>
			<Link to="https://www.themoviedb.org/">
				<img className="w-2/5" src="/public/tmdb-logo.svg" alt="TMDB-LOGO" title="TMDB-LOGO" aria-label="TMDB-LOGO" />
			</Link>
		</div>
	)
};
