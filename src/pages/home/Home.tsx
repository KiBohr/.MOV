import { Link } from "react-router-dom";
import SearchField from "../../components/searchField/SearchField";

import { FilterButtons } from "../../components/filterButtons/FilterButtons";
import { TrendingMoviesCarousel } from "../../components/trendingMoviesCarousel/TrendingMoviesCarousel";
import { Footer } from "../../components/footer/Footer";

import "./Home.css"

export const Home = () => {
	return (
		<>
			<article className='px-2.5'>
				<div className='flex w-100 gap-4 items-center py-[6vh] pl-2'>
					<h1 className='text-2xl font-bold'>Welcome!</h1>
					<Link to='https://www.themoviedb.org/' target="_blank">
						<img
							className='w-2/5 opacity-40 hover:scale-105 transition-all duration-400 ease-in-out hover:opacity-100'
							src='img/tmdb-logo.svg'
							alt='TMDB-LOGO'
							title='TMDB-LOGO'
							aria-label='TMDB-LOGO'
						/>
					</Link>
				</div>

				{/* Suchfeld */}
				<SearchField />

				{/* Filterbuttons */}
				<FilterButtons />

				<div className='flex justify-between font-bold px-2 pt-[5vh] pb-[2vh]'>
					<p>Trending Movies</p>
					<Link
						to='/genre/:genreId'
						className='see-all-button text-red transition hover:text-red/70 text-xl'
					>
						See all
					</Link>
				</div>

				{/* Carousel */}

				<TrendingMoviesCarousel />

				<Footer />

			</article>
		</>
	);
};
