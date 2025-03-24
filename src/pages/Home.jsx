import MovieCard from "../components/MovieCard";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { fetchPopularMovies, searchMovies } from "../services/api";

export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadPopularMovies = async () => {
			try {
				const popularMovies = await fetchPopularMovies();
				setMovies(popularMovies);
			} catch (error) {
				console.log(error);
				setError("Failed to fetch popular movies");
			} finally {
				setLoading(false);
			}
		};
		loadPopularMovies();
	}, []);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!searchQuery) return;
		if (loading) return;
		setLoading(true);

		try {
			const searchResults = await searchMovies(searchQuery);
			setMovies(searchResults);
			setError(null);
		} catch (err) {
			console.log(err);
			setError("Failed to fetch movies");
		} finally {
			setLoading(false);
		}
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
			{error && <div className={styles.errorMessage}>{error}</div>}
			{loading ? (
				<div className={styles.loading}>Loading...</div>
			) : (
				<div className={styles.moviesContainer}>
					{movies.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			)}
		</div>
	);
}
