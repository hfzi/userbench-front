import React from "react";
import { Link } from "react-router-dom";

const Navbar = (userDetails) => {
  // const user = userDetails.user
  //const user = userDetails.user
  // console.log("navbar", userDetails.user.data.photo)

  const onProfile = () => {

    console.log("Navbar", userDetails.user.data.photo)
    return (
      <>
        <img src={userDetails.user.data.photo && userDetails.user.data.photo} style={{borderRadius:"10px", width:"38px", height:"38px", backgroundColor:"white", margin:"10px" }} />
        <Link className="nav-link" to={`/profile/${userDetails.user.data.name}`}><h6>{userDetails.user.data.name}</h6></Link>
      </>
    );
  };

  const offProfile = () => {
    return (
      <>
        <Link to="/signup">
          <button className="btn btn btn-primary my-2 my-sm-0" type="submit">
            Login
          </button>
        </Link>
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
          {/*           <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
          {/*           <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {/*           <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button> */}
          {userDetails.user ? onProfile() : offProfile()}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
