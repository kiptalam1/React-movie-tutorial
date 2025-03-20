import MovieCard from "./components/MovieCard";

function App() {
	const movie = {
		url: "#",
		title: "Adams family",
		release_date: "2010",
	};
	return (
		<>
			<h1>movies</h1>
			<MovieCard movie={movie} />
			<MovieCard movie={movie} />
		</>
	);
}

export default App;
