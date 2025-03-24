import "./trendingMoviesCarousel.css"
import { useContext } from "react";
import { mainContext, MovieContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";
import { Movie } from "../../contracts/interfaces";
import { Carousel } from "../carousel/Carousel";

interface Props {
	trending?: Movie;
}

export const TrendingMoviesCarousel: React.FunctionComponent<Props> = ({ trending }) => {

	const { trendingMovies } = useContext(mainContext) as MovieContext;

	if (!trendingMovies) {
		return <div>loading…</div>;
	}

	return (
		<>
			{/* Carousel */}
			{/*<div className="h-2/5 mt-4 pb-32 rounded-2xl" >*/}
			<div className="favorite-container carousel rounded-box rounded-2xl">
				<Carousel items={trendingMovies.map((movie) => (
					<Link
						to={`/details/${movie?.id}`} key={movie.id}
						className="favorite-item carousel-item w-64 h-96 bg-cover bg-center rounded-xl mr-[16px] relative overflow-hidden"
						style={{
							backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					>
						{/* Dark Overlay */}
						<div className="absolute inset-0 bg-black/50 z-10"></div>

						<div className="absolute bottom-2 left-0 right-0 p-4 z-20 text-white">
							<h2 className="text-4xl font-bold text-center tracking-[4px] mb-[10vh]">{!movie.title ? movie.original_title : movie.title}</h2>
							<p className="text-2xl line-clamp-3 flex justify-end mr-5">⭐{movie.vote_average.toFixed(1)} / 10</p>
						</div>
					</Link>


				))} />
			</div >

			{/*<div className="carousel rounded-box rounded-2xl">
				<div className="carousel-item">
					<img
						src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
						alt="Burger" />
				</div>
			</div>*/}
			{/*</div>*/}
		</>
	)
}
