//Ansicht der einzelenen FilmKarte in der Auflistung der Filme unter den buttons. Siehe figmal Genre/serach Page

import { Movie } from "../contracts/interfaces";

interface Props {
	movie: Movie;
}

export const MoviePreview: React.FunctionComponent<Props> = ({ movie }) => {
	return <div>{movie.title}</div>;
};
