import MovieCard from "../components/MovieCard";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const movies = [
		{
			id: 1,
			url: "src/assets/download.jpeg",
			title: "The Adams Family",
			release_date: "2019",
		},
		{
			id: 2,
			url: "src/assets/download.jpeg",
			title: "The Adams Family",
			release_date: "2019",
		},
		{
			id: 3,
			url: "src/assets/download.jpeg",
			title: "The Adams Family",
			release_date: "2019",
		},
		{
			id: 4,
			url: "src/assets/download.jpeg",
			title: "The Adams Family",
			release_date: "2019",
		},
		{
			id: 5,
			url: "src/assets/download.jpeg",
			title: "The Adams Family",
			release_date: "2019",
		},
	];

	const handleSearch = (e) => {
		e.preventDefault();
		alert(searchQuery);
		setSearchQuery(""); // clear the search input
	};
	return (
		<div className='home'>
			<form className={styles.searchForm} onSubmit={handleSearch}>
				<input
					className={styles.searchInput}
					type='text'
					placeholder='search movies...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button
					type='submit'
					className={styles.searchBtn}
					onClick={handleSearch}
				>
					Search
				</button>
			</form>
			<div className={ styles.moviesContainer }>
				{movies.map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</div>
		</div>
	);
}
