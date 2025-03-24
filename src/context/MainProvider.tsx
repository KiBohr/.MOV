import { createContext, useEffect, useState } from "react";
import { Genre, Movie } from "../contracts/interfaces";
import axios from "axios";

//hier kommt noch ein Interface für den Context hin
export interface MovieContext {
	trendingMovies: Movie[];
	setTrendingMovies?: (list: Movie[]) => void;
	allMovies: Movie[];
	setAllMovies?: (list: Movie[]) => void;
	filteredMovies: Movie[];
	setFilterdMovies: (list: Movie[]) => void;
	loading: boolean;
	setLoading?: (value: boolean) => void;
	error: string | null;
	setError?: () => void;
	genres: Genre[] | undefined;
	searchInput: string;
	setSearchInput: (value: string) => void;
}

export const mainContext = createContext<MovieContext | null>(null);

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
	//hier kommen die useStates hin
	const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
	const [filteredMovies, setFilterdMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const [allMovies, setAllMovies] = useState<Movie[]>([]);

	const [genres, setGenres] = useState<Genre[] | undefined>();

	const [searchInput, setSearchInput] = useState<string>("");

	//hier kommen 'useEffect' und Path zum Fetchen hin
	//Trending Movies:
	const fetchTrendingMovies = async (page: number) => {
		try {
			setLoading(true);
			setError(null);

			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/trending/all/day",
				params: { language: "en-US", page: page },
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTUwZjU2MDQyYjdkYWY1YzllMWZkYzlkYjE0ODRiYyIsIm5iZiI6MTc0MjM3MzM1MS41MzEwMDAxLCJzdWIiOiI2N2RhODFlN2FlNGE4ZDFiMGZhNmQ1ODciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j1lfwnNm_qPhR7UmXese9qJpF-N6ZItLlZtZNmPj_4k",
				},
			};

			const response = await axios.request(options);
			setTrendingMovies(response.data.results);
			setFilterdMovies(response.data.results);
			console.log("trendingMovies: ", response);
		} catch (error) {
			setError("Hier ist ein Fehler beim Laden aufgetreten.");
		} finally {
			setLoading(false);
		}
	};
	//useEffect für den fetch
	useEffect(() => {
		fetchTrendingMovies(1);
	}, []);

	//alle Movies fetchen

	const fetchAllMovies = async () => {
		try {
			setLoading(true);
			setError(null);

			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/discover/movie",
				params: {
					include_adult: "false",
					include_video: "true",
					language: "en-US",
					page: "1",
					sort_by: "popularity.desc",
					with_genres: "35",
				},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTUwZjU2MDQyYjdkYWY1YzllMWZkYzlkYjE0ODRiYyIsIm5iZiI6MTc0MjM3MzM1MS41MzEwMDAxLCJzdWIiOiI2N2RhODFlN2FlNGE4ZDFiMGZhNmQ1ODciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j1lfwnNm_qPhR7UmXese9qJpF-N6ZItLlZtZNmPj_4k",
				},
			};

			const response = await axios.request(options);
			setAllMovies(response.data.results);
			setFilterdMovies(response.data.results);
			console.log("AllMovies: ", response);
		} catch (error) {
			setError("Hier ist ein Fehler beim Laden aufgetreten.");
		} finally {
			setLoading(false);
		}
	};
	//useEffect für den fetch
	useEffect(() => {
		fetchAllMovies();
	}, []);

	//Genre Movies:
	const fetchGenres = async () => {
		try {
			setLoading(true);
			setError(null);
			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/genre/movie/list",
				params: { language: "en" },
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTUwZjU2MDQyYjdkYWY1YzllMWZkYzlkYjE0ODRiYyIsIm5iZiI6MTc0MjM3MzM1MS41MzEwMDAxLCJzdWIiOiI2N2RhODFlN2FlNGE4ZDFiMGZhNmQ1ODciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j1lfwnNm_qPhR7UmXese9qJpF-N6ZItLlZtZNmPj_4k",
				},
			};

			const response = await axios.request(options);

			console.log("Genre suche", response);

			setGenres(response.data.genres);
		} catch (error) {
			setError("hier ist was schief gelaufen beim Laden der Genres.");
		} finally {
			setLoading(false);
		}
	};

	//useEffect für den Fetch der Genres:
	useEffect(() => {
		fetchGenres();
	}, []);

	return (
		<mainContext.Provider
			value={{
				trendingMovies,
				filteredMovies,
				setFilterdMovies,
				loading,
				error,
				allMovies,
				genres,
				searchInput,
				setSearchInput,
			}}
		>
			{children}
		</mainContext.Provider>
	);
};
