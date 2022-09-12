import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Navbar = (userDetails) => {

  async function handleCallbackResponse(response) {
    console.log("data", response.credential);
    var userObject = jwt_decode(response.credential);
    console.log("acık", userObject);

    await axios
      .get(
        process.env.REACT_APP_HOST + `/auth/register?userdata=${response.credential}`,
        { withCredentials: true }
      )
      .then((data) => {
        console.log(data)
        document.cookie = `token=${data.data.token}`
        // localStorage.setItem("token", data.data.token);
      });
    window.location.reload();
  }

  const onProfile = () => {
    return (
      <>
        <img
          alt={userDetails.user.data.name}
          src={userDetails.user.data.photo && userDetails.user.data.photo}
          style={{
            borderRadius: "10px",
            width: "38px",
            height: "38px",
            backgroundColor: "white",
            margin: "10px",
          }}
        />
        <Link
          className="nav-link"
          to={`/profile/${userDetails.user.data.name}`}
        >
          <h6>{userDetails.user.data.name}</h6>
        </Link>
      </>
    );
  };

  const offProfile = () => {
    return (
      <>
        {/* <Link to="/signup">
          <button className="btn btn btn-primary my-2 my-sm-0" type="submit">
            Login
          </button>
        </Link> */}
        <GoogleOAuthProvider clientId="199842155706-5jq4su19pe3fb7oa4jahog0ib891a07t.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleCallbackResponse}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-inverse navbar-fixed-top">
      <Link className="navbar-brand" to="/">
        userben.ch
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product/add">
              Product
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {userDetails.user ? onProfile() : offProfile()}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
