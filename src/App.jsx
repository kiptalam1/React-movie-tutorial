import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./index.css";
import styles from "./styles/App.module.css";

function App() {
	return (
		<>
			<div className={styles.app}>
				<NavBar />
				<main className={styles.mainContent}>
					<Outlet />
				</main>
			</div>
		</>
	);
}

export default App;
