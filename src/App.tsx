import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { Layout } from "./layout/Layout";

export function App() {
	//hier kommt ein useState hin

	//router
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />}>
				{/* hier kommen die einzelnen Routen zu den Seitenhin */}
				<Route />
			</Route>
		)
	);
	return (
		<main>
			<RouterProvider router={router} />
		</main>
	);
}
