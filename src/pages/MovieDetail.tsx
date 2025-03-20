import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface MovieDetails {
	budget: number;
	genres: Array<{
		id: number;
		name: string;
	}>;
	id: number;
	imdb_id: string;
	origin_country: Array<string>;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: Array<{
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}>;
	production_countries: Array<{
		iso_3166_1: string;
		name: string;
	}>;
	release_date: string;
	runtime: number;
	spoken_languages: Array<{
		english_name: string;
		iso_639_1: string;
		name: string;
	}>;
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

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
