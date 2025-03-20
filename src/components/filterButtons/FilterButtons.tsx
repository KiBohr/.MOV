export default function FilterButtons() {
	return (
		<>
			{/* Filter-Buttons */}
			<div className="w-full flex justify-evenly gap-2">
				<button type="button" className="w-100 p-2 bg-gray-100 rounded-xl">Action</button>
				<button type="button" className="w-100 p-2 bg-gray-100 rounded-xl">Comedy</button>
				<button type="button" className="w-100 p-2 bg-gray-100 rounded-xl">Horror</button>
			</div>
		</>
	)
}
