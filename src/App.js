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

	const getUser = async () => {
		try {
			const { data } = await fetch('https://userbench-back.vercel.app/auth/login/confirm', {
				method: 'GET',
				mode: 'cors',
				xhrFields: { withCredentials: true},
				credentials: 'include'
			}).then((res) => res.json()).then((data) => {setUser(data); localStorage.setItem("user", (data.token))})

			console.log("veri", user);
		} catch (err) {
			console.log("hata", err);
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
