import { useState, useEffect } from "react";
import Intro from "../../components/intro/Intro";
import MainButton from "../../components/mainButton/MainButton";
import { Footer } from "../../components/footer/Footer"; // Footer importieren

const StartPage = () => {
	const [showIntro, setShowIntro] = useState(true);
	const [fadeIn, setFadeIn] = useState(false);

	// Intro 3 Sekunden angezeigt und dann ausgeblendet
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowIntro(false);
			setTimeout(() => setFadeIn(true), 100); // Verzögerung für sanftes Einblenden
		}, 4000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{showIntro ? (
				<Intro />
			) : (
				<div className={`transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
					<section className="start-page flex flex-col items-center gap-4 z-[2]">
						<div className="h-110 w-[90%] overflow-hidden bg-linear-to-bl from-red to-white rounded-t-4xl pt-10 px-5 mb-5">
							<img className="block object-cover" src="/public/intro-img.png" alt="Screenshots of the app" />
						</div>

						<div className="flex flex-col items-center text-2xl font-bold text-black">
							<h2>Enjoy Your Movie</h2>
							<h2>Watch Everywhere</h2>
						</div>

						<p className="w-[85%] text-center text-black">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

						<MainButton buttonText="Get Started" path={"/home"} />

					</section>
					{/* Footer wird nur angezeigt, wenn `Intro` weg ist, bitte so ändern, dass es nicht mehr mit dem Footer in Verbindung steht, weil wir den footer langfristig nicht mehr in der startseite haben wollen*/}
					{fadeIn}
				</div>
			)}
		</>
	);
};

export default StartPage;
