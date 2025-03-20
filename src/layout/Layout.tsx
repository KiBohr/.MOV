import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/footer/Footer";

export const Layout = () => {
	const location = useLocation();

	//hier schränken wir das Anzeigen von der Footer Componente ein
	const hideFooter = location.pathname === "/" || location.pathname === ""

	return (
		<>
			<Outlet />
			{!hideFooter && <Footer/>}
		</>
	);
};
