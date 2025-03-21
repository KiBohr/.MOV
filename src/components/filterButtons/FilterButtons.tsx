import { useContext } from "react";
import { mainContext, MovieContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";
import { Carousel } from "../carousel/Carousel";
import { Genre } from "../../contracts/interfaces";

interface Props {
	activeGenre?: Genre;
}

export const FilterButtons: React.FunctionComponent<Props> = ({
	activeGenre,
}) => {
	const { genres } = useContext(mainContext) as MovieContext;

	if (!genres) {
		return <div>loading…</div>;
	}
	return (
		<>
			{/* Filter-Buttons */}
			<div className='w-full flex justify-evenly gap-2'>
				<Carousel
					items={genres.map((genre) => (
						<Link
							to={`/genre/${genre.id}`}
							type='button'
							className={`w-32 p-2 ${
								activeGenre?.id === genre.id ? "bg-red" : "bg-gray-100"
							}  rounded-xl text-center mx-2 hover:bg-red/60 hover:ease-in-out hover:duration-500 hover:text-white`}
						>
							{genre.name}
						</Link>
					))}
				/>
			</div>
		</>
	);
};
