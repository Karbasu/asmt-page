import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "./Firebase.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./Login.css";
function Login() {
  //this is google login
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const login_google = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user + "  " + token);
        navigate('/dashboard');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const curImage = require("./Images/google.png");
  const curImage2 = require("./Images/apple.png");
  //this is for genral email and password login

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((error) => alert(error.message));
  };
  const reg = (e) => {
    e.preventDefault();
    //fancy firebase sign-up
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((error) => {
        alert(error.message);
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <div className="login_slash">
        <h1 className="login_logo">Logo</h1>
        <h1 className="login_slash_center">BOARD.</h1>
      </div>
      <div className="login_page">
        <h1>Sign In</h1>
        <h4>Sign In to your account</h4>
        <span>
          <a onClick={login_google}>
            <img className="google_img" src={curImage} alt="google_image" />
            Sign in with Google
          </a>
          <a>
            <img className="google_img" src={curImage2} alt="google_image" />
            Sign in with Apple
          </a>
        </span>
        <div className="login_details">
          <form className="foam">
            <h5>Email</h5>
            <input
              type="email"
              vlaue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <h6>ForgotPassword?</h6>
            <button onClick={signIn} type="submit">
             <h3>Sign in</h3>
            </button>
            <p>
              Don't have an account?<span onClick={reg}>Register here</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
