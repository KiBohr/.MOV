import { createContext, useEffect, useState } from "react";
import { Movie } from "../contracts/interfaces";
import axios from "axios";

//hier kommt noch ein Interface für den Context hin

export const mainContext = createContext<any>(null);

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
	//hier kommen die useStates hin
	const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
	const [filteredMovies, setFilterdMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const [actionMovies, setActionMovies] = useState<Movie[]>([]);
	const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
	const [horrorMovies, setHorrorMovies] = useState<Movie[]>([]);

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
			console.log("ActionMovies: ", response);
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

	//Action Movies:
	const fetchActionMovies = async () => {
		try {
			setLoading(true);
			setError(null);

			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/discover/movie",
				params: {
					include_adult: "false",
					include_video: "false",
					language: "en-US",
					page: "1",
					sort_by: "popularity.desc",
					with_genres: "28",
				},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTUwZjU2MDQyYjdkYWY1YzllMWZkYzlkYjE0ODRiYyIsIm5iZiI6MTc0MjM3MzM1MS41MzEwMDAxLCJzdWIiOiI2N2RhODFlN2FlNGE4ZDFiMGZhNmQ1ODciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j1lfwnNm_qPhR7UmXese9qJpF-N6ZItLlZtZNmPj_4k",
				},
			};

			const response = await axios.request(options);
			setActionMovies(response.data.results);
			setFilterdMovies(response.data.results);
			console.log(response);
		} catch (error) {
			setError("hier ist was schief gelaufen beim Laden der Filme.");
		} finally {
			setLoading(false);
		}
	};
	//useEffect für den Fetch der ActionMovies:
	useEffect(() => {
		fetchActionMovies();
	}, []);

	//ComedyMovies:
	const fetchComedyMovies = async () => {
		try {
			setLoading(true);
			setError(null);

			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/discover/movie",
				params: {
					include_adult: "false",
					include_video: "false",
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
			setComedyMovies(response.data.results);
			setFilterdMovies(response.data.results);
			console.log("comedyMovies: ", response);
		} catch (error) {
			setError("hier ist was schief gelaufen beim Laden der Filme.");
		} finally {
			setLoading(false);
		}
	};
	//useEffect für den Fetch der ComedyMovies:
	useEffect(() => {
		fetchComedyMovies();
	}, []);

	const fetchHorrorMovies = async () => {
		try {
			setLoading(true);
			setError(null);

			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/discover/movie",
				params: {
					include_adult: "false",
					include_video: "false",
					language: "en-US",
					page: "1",
					sort_by: "popularity.desc",
					with_genres: "27",
				},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTUwZjU2MDQyYjdkYWY1YzllMWZkYzlkYjE0ODRiYyIsIm5iZiI6MTc0MjM3MzM1MS41MzEwMDAxLCJzdWIiOiI2N2RhODFlN2FlNGE4ZDFiMGZhNmQ1ODciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j1lfwnNm_qPhR7UmXese9qJpF-N6ZItLlZtZNmPj_4k",
				},
			};

			const response = await axios.request(options);
			setHorrorMovies(response.data.results);
			setFilterdMovies(response.data.results);
			console.log("horrorMovies: ", response);
		} catch (error) {
			setError("hier ist was schief gelaufen beim Laden der Filme.");
		} finally {
			setLoading(false);
		}
	};
	//useEffect für den Fetch der HorrorMovies:
	useEffect(() => {
		fetchHorrorMovies();
	}, []);

	return (
		<mainContext.Provider
			value={{
				trendingMovies,
				filteredMovies,
				setFilterdMovies,
				loading,
				error,
				actionMovies,
				comedyMovies,
				horrorMovies,
			}}
		>
			{children}
		</mainContext.Provider>
	);
};
