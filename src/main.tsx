import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { MainProvider } from "./context/MainProvider.tsx";
import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<MainProvider>
			<App />
		</MainProvider>
	</StrictMode>
);
