import styles from "../styles/MovieCard.module.css";
export default function MovieCard({ movie }) {
	function onFavoriteClick() {
		alert("clicked");
	}

	return (
		<div className={styles.movieCard}>
			<div className={styles.moviePoster}>
				<img src={movie.url} alt={movie.title} />
				<div className={styles.movieOverlay}>
					<button className={styles.favoriteBtn} onClick={onFavoriteClick}>
						🤍
					</button>
				</div>
			</div>
			<div className={styles.movieInfo}>
				<h3>{movie.title}</h3>
				<p>{movie.release_date}</p>
			</div>
		</div>
	);
}
