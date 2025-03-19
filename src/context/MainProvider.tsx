import { createContext } from "react";

//hier kommt noch ein Interface für den Context hin

export const mainContext = createContext(null);

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
	//hier kommen die useStates hin

	//hier kommt der useEffect hin

	return <mainContext.Provider value={{}}>{children}</mainContext.Provider>;
};
