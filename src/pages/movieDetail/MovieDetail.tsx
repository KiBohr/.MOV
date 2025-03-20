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

	useEffect(() => {
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
	}, []);

	if (!movieItem) {
		return <div>loading…</div>;
	}

	return (
		<div>
			<div>
				<img
					src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
					alt={movieItem.title}
				/>
			</div>
			<div>
				<h3>Movie Details</h3>
				<p>{movieItem.title}</p>
				<div>
					<p>⭐️{movieItem.vote_average}</p>
					<p>{movieItem.release_date}</p>
					<p>{movieItem.genres[0].name}</p>
					<p>{movieItem.runtime}</p>
				</div>

				<h1>Overview</h1>
				<p>
					{movieItem.overview.length > 100 && !showOverview
						? movieItem.overview.slice(0, 100) + "..."
						: movieItem.overview}
				</p>
				<a onClick={toggleOverview} className='text-main-red'>
					{showOverview ? " See less..." : " See more..."}
				</a>

				<div>
					<p>Genres</p>
					<div>
						{movieItem.genres.map((genre) => (
							<p>{genre.name}</p>
						))}
					</div>
				</div>
				<div>
					<p>Languages</p>
					<div>
						{movieItem.spoken_languages.map((language) => (
							<p>{language.name}</p>
						))}
					</div>
				</div>
			</div>

			{/* <MainButton buttonText="Trailer" to={}/> */}
		</div>
	);
};
