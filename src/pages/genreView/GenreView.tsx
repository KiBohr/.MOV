//hier ist die Ansicht der filme anhand der Genres Sortiert. Es werden die Filme über ihr Genre gefetched und über map jeweils in einer neuen Component dargestellt.

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mainContext, MovieContext } from "../../context/MainProvider";
import axios from "axios";
import { Movie } from "../../contracts/interfaces";
import { MoviePreview } from "../../components/moviePreview/MoviePreview";
import { FilterButtons } from "../../components/filterButtons/FilterButtons";
import SearchField from "../../components/searchField/SearchField";
import { Footer } from "../../components/footer/Footer";

export const GenreView = () => {
	const { genreId } = useParams();
	const { genres } = useContext(mainContext) as MovieContext;

	const [genreMovies, setGenreMovies] = useState<Movie[]>();
	const [isLoading, setIsLoading] = useState(false);

	const currentGenre = genres?.find((genre) => genre.id === Number(genreId));

	useEffect(() => {
		fetchGenreMovies();
	}, [genreId, currentGenre, genres]);

	const fetchGenreMovies = async () => {
		setIsLoading(true);
		try {
			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/discover/movie",
				params: {
					include_adult: "false",
					include_video: "false",
					language: "en-US",
					page: "1",
					sort_by: "popularity.desc",
					with_genres: currentGenre?.id,
				},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTUwZjU2MDQyYjdkYWY1YzllMWZkYzlkYjE0ODRiYyIsIm5iZiI6MTc0MjM3MzM1MS41MzEwMDAxLCJzdWIiOiI2N2RhODFlN2FlNGE4ZDFiMGZhNmQ1ODciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j1lfwnNm_qPhR7UmXese9qJpF-N6ZItLlZtZNmPj_4k",
				},
			};

			const response = await axios.request(options);
			setGenreMovies(response.data.results);
		} catch (error) {
		} finally {
			setIsLoading(false);
		}
	};

	if (!genres || !genreMovies) {
		return <>loading…</>;
	}

	return (
		<div className="px-5 py-10">
			{/* hier werden die Genres in die MainButton Componente gemappt und gerendert.
		Ziel ist es, diese in einem Slider anzuzeugen und als eigene Komponente auszulagern und auch in Home einzubinden */}
			<div className="flex flex-col items-center justify-center gap-2 mb-5">
				<SearchField />
				<FilterButtons activeGenre={currentGenre} />
			</div>

			<div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
				{isLoading && <div>Lädt Filme für genre {currentGenre?.name}</div>}
				{genreMovies.map((movie) => (
					<MoviePreview movie={movie} key={movie.id} />
				))}
			</div>
			<Footer />
		</div>
	);
};
