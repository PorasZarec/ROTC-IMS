import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./pages/home/navbar/Navbar";
import Menu from "./pages/home/menu/Menu";


import "./styles/global.scss";

import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";



// Layout for dashboard and admin pages
const DashboardLayout = () => {

	return (
		<div className="main">
			<Navbar />
			<div className="container">
				<div className="menuContainer">
					<Menu />
				</div>
				<div className="contentContainer">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <LandingPage />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "/dashboard",
			element: <DashboardLayout />,
			children: [
				{
					path: "",
					element: <Home />,
				}
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
