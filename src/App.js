import React from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
//import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import AddProduct from "./pages/Product/Add";
import Profile from "./pages/Profile";
import Navbar from "./pages/Navbar";

function App() {
	const [user, setUser] = useState(null);
	// const [token, setToken] = useState(localStorage.getItem("user") ? localStorage.getItem("user") : "");

	const getUser = async () => {
		try {
			const url = `https://userbench-back.vercel.app/auth/login/confirm`;
			let config = {
				withCredentials: true,
				// headers: {
				// 	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
				// 	'Access-Control-Allow-Origin': '*',
				// 	'Access-Control-Allow-Headers': '*'
				// }
		};
			const { data } = await axios.get(url, config)

			// setToken(data.token)
			localStorage.setItem("user",  (data.token))
			setUser(data);
			console.log("veris", user);

		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			<Navbar user={user && user} />
			<Routes>
				<Route
					exact
					path="/"
					element={user ? <Product user={user} /> : <Login />}
					// element={<Product user={user} />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
				<Route
					exact
					path="/profile/:username"
					element={user ? <Profile user={user} /> : <Login />}
					// element={<Profile user={user} />}
				/>
				<Route
					exact
					path="/product/add"
					element={user && user ? <AddProduct user={user} /> : <Login />}
					// element={<AddProduct user={user} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
