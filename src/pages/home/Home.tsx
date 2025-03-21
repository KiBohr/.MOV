import { Link } from "react-router-dom";
import "./home.css"
import FilterButtons from "../../components/filterButtons/FilterButtons";
import SearchField from "../../components/searchField/SearchField";
import Carousel from "../../components/carousel/Carousel";

export const Home = () => {

	return (
		<>
			<article className="text-black px-2.5">
				<div className="flex w-100 gap-4 items-center py-[6vh] pl-2">
					<h1 className="text-black text-2xl font-bold">Welcome!</h1>
					<Link to="https://www.themoviedb.org/">
						<img className="w-2/5 opacity-40" src="/public/tmdb-logo.svg" alt="TMDB-LOGO" title="TMDB-LOGO" aria-label="TMDB-LOGO" />
					</Link>
				</div>

				{/* Suchfeld */}
				<SearchField />

				{/* Filterbuttons */}
				<FilterButtons />

				<div className="flex justify-between font-bold px-2 pt-[5vh]">
					<p className="text-black">Trending Videos</p>
					<Link to="/genre/:genreId" className="text-red transition hover:text-red/70">See all</Link>
				</div>

				{/* Carousel */}
				<Carousel />
			</article>



		</>
	)
};
