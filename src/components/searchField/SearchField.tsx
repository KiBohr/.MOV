export default function SearchField() {
	return (
		<>
			{/* Suchfeld & Filter-Buttons */}
			<div className="w-full relative mb-[2vh]">
				<input type="text" className="w-full p-3 bg-gray-100 rounded-xl relative overflow-hidden" placeholder="Search Movie ..." />
				<img className="absolute right-7 top-[50%] translate-y-[-50%] opacity-70" src="/public/img/search-icon.png" alt="Search-Icon" title="Search-Icon" aria-label="Search-Icon" />
			</div>
		</>
	)
}
