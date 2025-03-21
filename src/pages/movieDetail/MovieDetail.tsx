// hier ist die Page der MovieDetails, mit dem Fetch über die Film Details

//im Return muss noch eine Komponente hinein die die gesamte Darstellung der Movie Details eines einzlenen Filmes anzeigt.

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../../contracts/interfaces";

export const MovieDetail = () => {
	const { movieParam } = useParams();

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
					console.log(response.data);
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
			<div className="h-110 w-full overflow-hidden">
				<img className="object-cover rounded-t-3xl "
					src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
					alt={movieItem.title}
				/>
			</div>
			<div>
				<div className="flex flex-col items-center justify-center w-full mb-5">
					{/* teil, der über dem bild angeziegt werden soll */}
						{/* <h3 className="text-[0.8rem]">Movie Details</h3> */}
					<p className="text-2xl font-bold">{movieItem.title}</p>
					<div className="flex gap-10 items-center justify-center">
						<p>⭐️{movieItem.vote_average}</p>
						<p>{movieItem.release_date}</p>
						<p>{movieItem.genres[0].name}</p>
						<p>{movieItem.runtime}</p>
					</div>
				</div>

				<div className="flex flex-col items-start px-5 gap-2">
				<h1 className="text-lg font-bold">Overview</h1>

				<div className="flex flex-col mb-5">
						<p className="w-[90%] font-light">
						{movieItem.overview.length > 100 && !showOverview
							? movieItem.overview.slice(0, 110) + "..."
							: movieItem.overview}
					</p>
					<a onClick={toggleOverview} className='text-red text-[0.8rem]'>
						{showOverview ? " See less..." : " See more..."}
					</a>
				</div>
				
				<div className="flex items-center justify-between w-full">
					<p className="font-bold">Genres</p>
					<div className="flex gap-2 font-light">
						{movieItem.genres.map((genre) => (
							<p>{genre.name}</p>
						))}
					</div>
				</div>
				<div className="flex items-center justify-between w-full">
					<p className="font-bold">Languages</p>
					<div className="flex gap-2 justify-between font-light">
						{movieItem.spoken_languages.map((language) => (
							<p>{language.name}</p>
						))}
					</div>
				</div>
				</div>
			</div>

			{/* <MainButton buttonText="Trailer" to={}/> */}
		</div>
	);
};
