import React, { useContext } from "react";
import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { DarkModeContex } from "./contex/darkModeContext";
import { AuthContex } from "./contex/authContext";

function App() {
	const { currentUser } = useContext(AuthContex);
	const { darkMode } = useContext(DarkModeContex);
	console.log(darkMode);
	const Layout = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<Navbar />
				<div style={{ display: "flex" }}>
					<LeftBar />
					<div style={{ flex: 6 }}>
						<Outlet />
					</div>

					<RightBar />
				</div>
			</div>
		);
	};

	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to="/login" />;
		}
		return children;
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/profile/:id",
					element: <Profile />,
				},
			],
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
			path: "/login",
			element: <Login />,
		},
		{
			path: "/login",
			element: <Login />,
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
