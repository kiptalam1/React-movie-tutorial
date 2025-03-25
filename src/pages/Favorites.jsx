import styles from "../styles/Favorites.module.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
	const { favorites } = useMovieContext();

	if (favorites) {
		return (
			<div className={styles.favorites}>
			<div className={styles.moviesContainer}>
				{favorites.map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</div>
			</div>	
		);
	} else {
		return (
			<div className={styles.favorites}>
				<h1>No Favorites yet!</h1>
				<p>Add movies to your Favorites list.</p>
			</div>
		);
	}
}
