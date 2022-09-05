import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";

function Login() {
  async function handleCallbackResponse(response) {
    console.log("data", response.credential);
    var userObject = jwt_decode(response.credential);
    console.log("acık", userObject);

    await axios
      .get(
        `https://userbench-back.vercel.app/auth/register?userdata=${response.credential}`,
        { withCredentials: true }
      )
      .then((data) => {
        localStorage.setItem("token", data.data.token);
      });
    window.location.reload();
  }

  const getUser = async () => {
    try {
      await fetch("https://userbench-back.vercel.app/auth/login/confirm", {
        method: "POST",
        mode: "cors",
        xhrFields: { withCredentials: true },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("user", data.token);
        });
    } catch (err) {
      console.log("hata", err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const googleAuth = () => {
    window.open(`https://userbench-back.vercel.app/auth/google`, "_self");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Log in Form</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/login.jpg" alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Members Log in</h2>
          <input type="text" className={styles.input} placeholder="Email" />
          <input type="text" className={styles.input} placeholder="Password" />
          <button className={styles.btn}>Log In</button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sing in with Google</span>
          </button>
            <GoogleLogin
              clientId="199842155706-5jq4su19pe3fb7oa4jahog0ib891a07t.apps.googleusercontent.com"
              onSuccess={handleCallbackResponse}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          <p className={styles.text}>
            New Here ? <Link to="/signup">Sing Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
