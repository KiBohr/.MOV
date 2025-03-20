// hier ist die Page der MovieDetails, mit dem Fetch über die Film Details

//im Return muss noch eine Komponente hinein die die gesamte Darstellung der Movie Details eines einzlenen Filmes anzeigt.

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../contracts/interfaces";

export const MovieDetail = () => {
	const { movieParam } = useParams();

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

	return <>{movieItem}</>;
};
