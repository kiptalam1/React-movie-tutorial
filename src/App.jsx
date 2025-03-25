import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./index.css";
import styles from "./styles/App.module.css";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
	return (
		<>
			<MovieProvider className={styles.app}>
				<NavBar />
				<main className={styles.mainContent}>
					<Outlet />
				</main>
			</MovieProvider>
		</>
	);
}

export default App;
