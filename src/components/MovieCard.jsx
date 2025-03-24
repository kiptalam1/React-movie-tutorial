import styles from "../styles/MovieCard.module.css";
export default function MovieCard({ movie }) {
	function onFavoriteClick() {
		alert("clicked");
	}

	return (
		<div className={styles.movieCard}>
			<div className={styles.moviePoster}>
				<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
				<div className={styles.movieOverlay}>
					<button className={styles.favoriteBtn} onClick={onFavoriteClick}>
						🤍
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
