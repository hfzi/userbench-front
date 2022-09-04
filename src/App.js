import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Product from "./pages/Product";
import AddProduct from "./pages/Product/Add";
import Profile from "./pages/Profile";
import Navbar from "./pages/Navbar";
import axios from "axios";
//import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token") ? localStorage.getItem("token") : null
  
  useEffect(() => {
      // Get User Data //
  const getUser = async () => {
    // try {
    //   await fetch(
    //     process.env.REACT_APP_HOST + `/auth/login/confirm?token=${localStorage.getItem("token")}`,
    //     {
    //       method: "GET",
    //       mode: "cors",
    //       xhrFields: { withCredentials: true },
    //       credentials: "include",
    //     },
    //   )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setUser({data});
    //     });
    // } catch (err) {
    //   console.log("hata", err);
    // }

      const {login} = await axios.get(
        process.env.REACT_APP_HOST + `/auth/login/confirm?token=${localStorage.getItem("token")}`,
        { withCredentials: true }
      )
      setUser(login)
  };

    getUser();
  }, []);

  // render //
  return (
    <div className="container">
      <Navbar user={user && user} />
      <Routes>
        <Route
          exact
          path="/"
          element={token ? <Product user={user} /> : <Login />}
        />
        <Route
          exact
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/profile/:username"
          element={token ? <Profile user={user} /> : <Login />}
        />
        <Route
          exact
          path="/product/add"
          element={token && user ? <AddProduct user={user} /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
