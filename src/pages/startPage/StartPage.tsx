import MainButton from "../../components/mainButton/MainButton";
import { Home } from "../home/Home";

const StartPage = () => {
	return (
		<section className="flex flex-col items-center gap-4">
			<div className="h-110 w-[90%] overflow-hidden bg-linear-to-bl from-red/50 to-white rounded-t-4xl pt-10 px-5 mb-5">
				<img className="object-cover" src="../../../intro-img.png" alt="Screenshots of the app" />
			</div>

			<div className="flex flex-col items-center text-2xl font-bold">
				<h2>Enjoy Your Movie</h2>
				<h2>Watch Everywhere</h2>
			</div>

			<p className="w-[85%] text-center">Stream unlimited movies and TV showson your phone,tablet, laptop, and TV.</p>

			<MainButton buttonText="Get Started" />

			<a className="h-10 w-15" href="https://developer.themoviedb.org/docs/getting-started">
				<img className="object-cover" src="../../../public/tmd-logo.svg" alt="logo of TMDB" />
			</a>
		</section>
	);
}

export default StartPage;
