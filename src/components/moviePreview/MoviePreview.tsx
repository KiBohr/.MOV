//Ansicht der einzelenen FilmKarte in der Auflistung der Filme unter den buttons. Siehe figmal Genre/search Page

import { Link } from "react-router-dom";
import { Movie } from "../../contracts/interfaces";

interface Props {
	movie: Movie;
}

export const MoviePreview: React.FunctionComponent<Props> = ({ movie }) => {
	return (
		<>
			<Link
				to={`/details/${movie.id}`}
				className='shadow-lg rounded-md p-5 flex items-center justify-center gap-5 transition ease-in-out hover:shadow-2xl cursor-pointer bg-white'
			>
				{/* poster */}
				<div className='h-20 w-20'>
					<img
						className='rounded-lg object-cover'
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt={movie.title}
					/>
				</div>

				<div className='w-full text-sm'>
					{/* name + favorit */}
					<div className='flex justify-between items-center font-bold mb-2'>
						<h3 className='text-lg font-bold'>{movie.title}</h3>
						<img
							className='h-4 cursor-pointer'
							src='/img/favorite-icon.png'
							alt='Favoriten Icon'
						/>
					</div>

					{/* rating, year, genre & runtime */}
					<div className='flex justify-between items-center'>
						<div className='flex items-center font-semibold'>
							
							<p>⭐️ {movie.vote_average.toFixed(1)}</p>
						</div>
						<p>{movie.release_date.slice(0, 4)}</p>
						{/* hier müsste entweder das interface oder der ausgewählte fetch geändert werden(Moviedeatils), um auf genre und runtime zugreifen zu können */}

						{/* <p>{movie.genre_ids}</p> */}
						{/* <p>time</p> */}
					</div>
				</div>
			</Link>
		</>
	);
};
