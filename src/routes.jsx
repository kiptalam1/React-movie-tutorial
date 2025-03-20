import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "favorites",
		element: <Favorites />,
	},
];

export default routes;
