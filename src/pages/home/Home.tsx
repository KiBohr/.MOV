import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<article className="text-black px-2.5">
			<div className="flex w-100 gap-4 items-center py-[8vh] pl-4">
				<h1 className="text-black text-2xl font-bold">Welcome!</h1>
				<Link to="https://www.themoviedb.org/">
					<img className="w-2/5" src="/public/tmdb-logo.svg" alt="TMDB-LOGO" title="TMDB-LOGO" aria-label="TMDB-LOGO" />
				</Link>
			</div>
			{/* Suchfeld & Filter-Buttons */}
			<div className="relative mb-[2vh]">
				<input type="text" className="w-100 p-3 bg-gray-100 rounded-xl relative overflow-hidden" placeholder="Search Movie ..." />
				<img className="absolute right-7 top-[50%] translate-y-[-50%] opacity-70" src="/public/search-icon.png" alt="Search-Icon" title="Search-Icon" aria-label="Search-Icon" />
			</div>
			<div className="w-100 flex justify-evenly gap-2">
				<button type="button" className="w-100 p-2 bg-gray-100 rounded-xl">Action</button>
				<button type="button" className="w-100 p-2 bg-gray-100 rounded-xl">Comedy</button>
				<button type="button" className="w-100 p-2 bg-gray-100 rounded-xl">Horror</button>
			</div>

			<div className="mt-[5vh] h-[100vh]">
				<div className="flex justify-evenly">
					<p className="text-black">Trending Videos</p>
					<button type="button">See all</button>
				</div>
				
				{/* Carousel */}
				<div className="carousel w-full mt-4 h-[35vh] rounded-2xl">
					<div id="item1" className="carousel-item w-full">
						<img
							src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
							className="w-full" />
					</div>
					<div id="item2" className="carousel-item w-full">
						<img
							src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
							className="w-full" />
					</div>
					<div id="item3" className="carousel-item w-full">
						<img
							src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
							className="w-full" />
					</div>
					<div id="item4" className="carousel-item w-full">
						<img
							src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
							className="w-full" />
					</div>
				</div>
				<div className="flex w-full justify-center gap-2 py-2">
					<a href="#item1" className="btn btn-xs">1</a>
					<a href="#item2" className="btn btn-xs">2</a>
					<a href="#item3" className="btn btn-xs">3</a>
					<a href="#item4" className="btn btn-xs">4</a>
				</div>
			</div>
		</article>
	)
};
