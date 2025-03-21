import { Outlet } from "react-router-dom";

export const Layout = () => {
	// const location = useLocation();

	//hier schränken wir das Anzeigen von der Footer Componente ein
	// const hideFooter = location.pathname === "/" || location.pathname === ""

	return (
		<>
			<Outlet />
			{/* {!hideFooter && <Footer/>} */}
		</>
	);
};
