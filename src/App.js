import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AddProduct from "./pages/Product/Add";
import Profile from "./pages/Profile";
import Navbar from "./pages/Navbar";
//import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1] ? document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1] : null
  
  

  useEffect(() => {
      // Get User Data //
  const getUser = async () => {
    try {
      await fetch(
        process.env.REACT_APP_HOST + `/auth/login/confirm?token=${document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1]}`,
        {
          method: "GET",
          mode: "cors",
          xhrFields: { withCredentials: true },
          credentials: "include",
        },
      )
        .then((res) => res.json())
        .then((data) => {
          setUser({data});
        });
    } catch (err) {
      console.log("hata", err);
    }
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
          element={<Product user={user}/>}
        />
        <Route
          exact
          path="/profile/:username"
          element={token ? <Profile user={user} /> : <Login />}
        />
        <Route
          exact
          path="/ananas"
          element={<Home user={user} />}
        />
        <Route
          exact
          path="/product/add"
          element={<AddProduct user={user}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
