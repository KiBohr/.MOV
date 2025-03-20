import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { Layout } from "./layout/Layout";
import StartPage from "./pages/startPage/StartPage";
import { Home } from "./pages/home/Home";
import { GenreView } from "./pages/genreView/GenreView";
import { MovieDetail } from "./pages/movieDetail/MovieDetail";

export function App() {
	//hier kommt ein useState hin

	//router
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />}>
				{/* hier kommen die einzelnen Routen zu den Seiten hin */}
				<Route path='/home' element={<Home />} />
				<Route index element={<StartPage />} />
				<Route path='/genre/:genreId' element={<GenreView />} />
				<Route path='details/:movieParam' element={<MovieDetail />} />
			</Route>
		)
	);
	return (
		<main>
			<RouterProvider router={router} />
		</main>
	);
}
