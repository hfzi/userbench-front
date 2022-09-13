import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = (userDetails) => {
  async function handleCallbackResponse(res) {
    await axios
      .get(
        process.env.REACT_APP_HOST +
          `/auth/register?userdata=${res.credential}`,
        { withCredentials: true }
      )
      .then((data) => {
        console.log(data);
        document.cookie = `token=${data.data.token}`;
      });
    window.location.reload();
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "199842155706-5jq4su19pe3fb7oa4jahog0ib891a07t.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  const onProfile = () => {
    const userData = userDetails.user.data;
    return (
      <>
        <img
          alt={userData.name}
          src={userData.photo && userData.photo}
          style={{
            borderRadius: "10px",
            width: "38px",
            height: "38px",
            backgroundColor: "white",
            margin: "10px",
          }}
        />
        <Link className="nav-link" to={`/profile/${userData.name}`}>
          <h6>{userData.name}</h6>
        </Link>
      </>
    );
  };

  const offProfile = () => (
    <>
      <div id="signInDiv"></div>
    </>
  );

  const Profile = () => {
    const Data = (
      <>
        <div id="signInDiv"></div>
      </>
    );
    // const userData = userDetails.user.data;
    // if (!userDetails.user) {
    //   Data = (
    //     <>
    //       <img
    //         alt={userData.name}
    //         src={userData.photo && userData.photo}
    //         style={{
    //           borderRadius: "10px",
    //           width: "38px",
    //           height: "38px",
    //           backgroundColor: "white",
    //           margin: "10px",
    //         }}
    //       />
    //       <Link className="nav-link" to={`/profile/${userData.name}`}>
    //         <h6>{userData.name}</h6>
    //       </Link>
    //     </>
    //   );
    // }

    return Data;
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
