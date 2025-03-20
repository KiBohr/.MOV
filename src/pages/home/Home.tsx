import { Link } from "react-router-dom";
import "./home.css";
import SearchField from "../../components/searchField/SearchField";
import { FilterButtons } from "../../components/filterButtons/FilterButtons";

export const Home = () => {
	return (
		<>
			<article className='text-black px-2.5'>
				<div className='flex w-100 gap-4 items-center py-[6vh] pl-2'>
					<h1 className='text-black text-2xl font-bold'>Welcome!</h1>
					<Link to='https://www.themoviedb.org/'>
						<img
							className='w-2/5 opacity-40'
							src='/public/tmdb-logo.svg'
							alt='TMDB-LOGO'
							title='TMDB-LOGO'
							aria-label='TMDB-LOGO'
						/>
					</Link>
				</div>

				{/* Suchfeld */}
				<SearchField />

				{/* Filterbuttons */}
				<FilterButtons />

				<div className='flex justify-between font-bold px-2 pt-[5vh]'>
					<p className='text-black'>Trending Videos</p>
					<Link
						to='/genre/:genreId'
						className='text-red transition hover:text-red/70'
					>
						See all
					</Link>
				</div>

				{/* Carousel */}
				<div className='mt-4 h-[100vh] border-4 border-b-lime-400'>
					<div className='carousel rounded-box'>
						<div className='carousel-item'>
							<img
								src='https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp'
								alt='Burger'
							/>
						</div>
						<div className='carousel-item'>
							<img
								src='https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp'
								alt='Burger'
							/>
						</div>
						<div className='carousel-item'>
							<img
								src='https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp'
								alt='Burger'
							/>
						</div>
						<div className='carousel-item'>
							<img
								src='https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp'
								alt='Burger'
							/>
						</div>
						<div className='carousel-item'>
							<img
								src='https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp'
								alt='Burger'
							/>
						</div>
						<div className='carousel-item'>
							<img
								src='https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp'
								alt='Burger'
							/>
						</div>
						<div className='carousel-item'>
							<img
								src='https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
								alt='Burger'
							/>
						</div>
					</div>
				</div>
			</article>
		</>
	);
};
