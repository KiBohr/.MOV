export const Header = () => {
	return (
		<>
			<header className="w-full mx-auto mt-[4vh] border-3 border-b-rose-600">
				<div className="relative mb-[2vh] px-2.5">
					<input type="text" className="w-100 p-3 bg-gray-100 rounded-xl relative" placeholder="Search Movie ..." />
					<img className="absolute right-7 top-[50%] translate-y-[-50%] opacity-70" src="/public/search-icon.png" alt="Search-Icon" title="Search-Icon" aria-label="Search-Icon" />
				</div>
				<div className="w-100 flex justify-evenly gap-2 px-2.5">
					<button type="button" className="w-100 p-2 bg-gray-100 rounded-xl">Action</button>
					<button type="button" className="w-100 p-2 bg-gray-100 rounded-xl">Comedy</button>
					<button type="button" className="w-100 p-2 bg-gray-100 rounded-xl">Horror</button>
				</div>
			</header>
		</>
	);
};
