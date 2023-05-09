import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `osic`;
  //   navigate(path);
  // };

  const handleClick = () => {
    const clientId = "09b22affe3044deea517a4b139fb1391";
    const redirectURL = "http://localhost:3000/";
    const APIURL = "https://account.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-read-playback-state",
      "user-modify-playback-state",
      "suser-read-currently-playing",
      "user-read-playback-position",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${APIURL}?client_id = ${clientId}&redirect_uri = ${redirectURL}&scope = ${scope.join(
      " "
    )}&response_type = token&show_daialog = true`;
  };

  return (
    <div className="container">
      <div className="bungkus">
        <img
          className="background"
          src="https://wallpaperaccess.com/full/880901.png"
          alt="background"
        />
        <div className="login">
          <h1>
            Welcome to <a className="osicColor">Our Music</a>
          </h1>
          <h2>
            Sign In With <a className="spotifyColor">Spotify</a> Account
          </h2>
          {/* <form className="inputBox">
            <input className="data" type="text" placeholder="Username" />
          </form>
          <form className="inputBox">
            <input className="data" type="password" placeholder="Password" />
          </form> */}
          <button onClick={handleClick}>Login</button>

          <div className="group">
            <a href="#">Forget Password</a>
            <a href="3">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
