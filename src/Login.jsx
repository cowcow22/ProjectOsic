import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <img
        className="background"
        src="https://wallpaperaccess.com/full/880901.png"
        alt="background"
      />
      <div className="login">
        <h1>
          Welcome to <a className="osicColor">Our Music</a>
        </h1>
        <h2>Sign In</h2>
        <form className="inputBox">
          <input className="data" type="text" placeholder="Username" />
        </form>
        <form className="inputBox">
          <input className="data" type="password" placeholder="Password" />
        </form>
        <form className="inputBox">
          <input type="submit" value="Login" className="btn" />
        </form>
        <div className="group">
          <a href="#">Forget Password</a>
          <a href="3">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
