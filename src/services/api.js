const API_KEY = "71f0cf356c73ec4d4dd69db3896f2a2f";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async () => {
	const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
	const data = await response.json();
	return data.results;
};

export const searchMovies = async (query) => {
	const response = await fetch(
		`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
			query
		)}`
	);
	const data = await response.json();
	return data.results;
};
