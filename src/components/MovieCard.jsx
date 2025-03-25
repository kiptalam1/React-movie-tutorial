import styles from "../styles/MovieCard.module.css";
import { useMovieContext } from "../contexts/MovieContext";

export default function MovieCard({ movie }) {
	const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
	const favorite = isFavorite(movie.id);

	function onFavoriteClick(e) {
		e.preventDefault();
		if (favorite) {
			removeFromFavorites(movie.id);
		} else {
			addToFavorites(movie);
		}
	}

	return (
		<div className={styles.movieCard}>
			<div className={styles.moviePoster}>
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
				<div className={styles.movieOverlay}>
					<button
						className={`${styles.favoriteBtn} ${favorite ? "active" : ""}`}
						onClick={onFavoriteClick}
					>
						{ favorite ? '💖' : '🤍'}
					</button>
				</div>
			</div>
			<div className={styles.movieInfo}>
				<h3>{movie.title}</h3>
				<p>{movie.release_date?.split("-")[0]}</p>
			</div>
		</div>
	);
}
