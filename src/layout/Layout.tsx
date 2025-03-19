import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const Layout = () => {
	const location = useLocation();

	//hier die zu versteckenden Componenten
	const hideHeader = location.pathname === "";

	return (
		<>
			{!hideHeader && <Header />}
			<Outlet />
			<Footer />
		</>
	);
};
