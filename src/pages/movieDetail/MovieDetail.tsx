// hier ist die Page der MovieDetails, mit dem Fetch über die Film Details

//im Return muss noch eine Komponente hinein die die gesamte Darstellung der Movie Details eines einzlenen Filmes anzeigt.

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieDetails } from "../../contracts/interfaces";
import { Footer } from "../../components/footer/Footer";

export const MovieDetail = () => {
	const { movieParam } = useParams();

	// console.log("Movie-Params: ", movieParam);


	let [showOverview, setShowOverview] = useState<boolean>(false);

	const toggleOverview = () => {
		setShowOverview(!showOverview);
	};

	const [movieItem, setMovieItem] = useState<MovieDetails>();

	useEffect(() => {
		const options = {
			method: "GET",
			url: `https://api.themoviedb.org/3/movie/${movieParam}`,
			params: { language: "en-US" },
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTUwZjU2MDQyYjdkYWY1YzllMWZkYzlkYjE0ODRiYyIsIm5iZiI6MTc0MjM3MzM1MS41MzEwMDAxLCJzdWIiOiI2N2RhODFlN2FlNGE4ZDFiMGZhNmQ1ODciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j1lfwnNm_qPhR7UmXese9qJpF-N6ZItLlZtZNmPj_4k",
			},
		};
		const fetchMovieData = async () => {
			try {
				const response = await axios.request(options);
				if (response) {
					// console.log(response.data);
					setMovieItem(response.data);
				}
			} catch (error) {
				console.error(error, "hier ist was schief gelaufen");
			}
		};
		fetchMovieData();
	}, [movieParam]);

	if (!movieItem) {
		return <div>loading…{movieParam}</div>;
	}

	return (
		<div className="bg-white flex flex-col items-center justify-center">
			<div className="relative">
				<Link className="bg-white rounded-2xl p-3 absolute top-5 left-5 z-2 transition ease-in-out hover:bg-white/70" to="/genre/:genreId"><img src="/img/backArrow.png" alt="back icon" /></Link>
				<div className="h-110 w-full overflow-hidden relative mb-10">
					<img className="object-cover rounded-t-3xl "
						src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
						alt={movieItem.title}
					/>
					<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent"></div>
				</div>
				{/* teil, der über dem bild angeziegt werden soll */}
				<div className="flex flex-col items-center justify-center w-full mb-5 absolute top-90 right-auto">
					{/* <h3 className="text-[0.8rem]">Movie Details</h3> */}
					<p className="text-3xl font-bold">{movieItem.title.split(` `).slice(0, 4).join(` `)} <br /></p>
					<p className="text-3xl font-bold mb-2">{movieItem.title.split(` `).slice(4).join(` `)}</p>
					<div className="flex gap-8 items-center justify-center">
						<p className="cursor-pointer">⭐️ {movieItem.vote_average.toFixed(1)}</p>
						<p className="cursor-pointer">{movieItem.release_date.slice(0, 4)}</p>
						<p className="cursor-pointer">{movieItem.genres[0].name}</p>
						<p className="cursor-pointer">{movieItem.runtime > 0 ? `${movieItem.runtime} min` : " "}</p>
					</div>
				</div>
			</div>
			{/* overview */}
			<div className="flex flex-col items-start px-5 gap-2">
				<h1 className="text-lg font-bold">Overview</h1>

				<div className="flex flex-col mb-5">
					<p className="w-[90%] font-light">
						{movieItem.overview.length > 100 && !showOverview
							? movieItem.overview.slice(0, 110) + "..."
							: movieItem.overview}
					</p>
					<a onClick={toggleOverview} className='text-red text-[0.8rem] cursor-pointer'>
						{showOverview ? " See less..." : " See more..."}
					</a>
				</div>

				<div className="flex items-center justify-between w-full">
					<p className="font-bold">Genres</p>
					<div key={crypto.randomUUID()}  className="flex gap-2 font-light">
						{movieItem.genres.map((genre) => (
							<p>{genre.name}</p>
						))}
					</div>
				</div>
				<div className="flex items-center justify-between w-full pb-[5vh]">
					<p className="font-bold">Languages</p>
					<div className="flex gap-2 justify-between font-light">
						{movieItem.spoken_languages.map((language) => (
							<p>{language.name}</p>
						))}
					</div>
				</div>
			</div>


			{/* <MainButton buttonText="Trailer" to={}/> */}

			<Footer />
		</div>
	);
};
