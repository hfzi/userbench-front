import React from "react";
import { Routes, Route, Navigate, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
//import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import AddProduct from "./pages/Product/Add";
import Profile from "./pages/Profile";
import Navbar from "./pages/Navbar";
//import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  
  // Get User Data //
  const getUser = async () => {
    try {
      await fetch(
        `https://userbench-back.vercel.app/auth/login/confirm?token=${localStorage.getItem("token")}`,
        {
          method: "GET",
          mode: "cors",
          xhrFields: { withCredentials: true },
          credentials: "include",
        },
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("aaa", data)
          setUser({data});
          console.log("user", user)
        });
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
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/profile/:username"
          element={user ? <Profile user={user} /> : <Login />}
        />
        <Route
          exact
          path="/product/add"
          element={user && user ? <AddProduct user={user} /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
