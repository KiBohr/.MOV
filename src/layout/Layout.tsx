import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/footer/Footer";

export const Layout = () => {
	const location = useLocation();

	//hier die zu versteckenden Componenten
	const hideHeader = location.pathname === "";

	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
};
