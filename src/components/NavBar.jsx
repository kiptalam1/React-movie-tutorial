import styles from "../styles/NavBar.module.css";
import { Link, NavLink } from "react-router-dom";


export default function NavBar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarBrand}>
				<Link to='/'>Movies </Link>
			</div>
			<div className={styles.navbarLinks}>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? styles.active : styles.navbarLink
					}
				>
					Home
				</NavLink>
				<NavLink
					to='/favorites'
					className={({ isActive }) =>
						isActive ? styles.active : styles.navbarLink
					}
				>
					Favorites
				</NavLink>
			</div>
		</nav>
	);
}
