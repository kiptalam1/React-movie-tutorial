import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import App from "./App";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "favorites",
				element: <Favorites />,
			},
		],
	},
];

export default routes;
