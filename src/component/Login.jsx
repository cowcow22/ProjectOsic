import React from "react";
import "./Login.css";
// import { useNavigate } from "react-router-dom";

function Login() {
  const handleClick = async () => {
    const clientId = "09b22affe3044deea517a4b139fb1391";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&dialog_show=true`;
  };

  return (
    <div className="container">
      <div className="bungkus">
        <img
          className="background"
          src="https://pbs.twimg.com/media/DsdWY5iXoAEyfjd?format=jpg&name=large"
          alt="background"
        />
        <div className="login">
          <h1>
            Welcome to <a className="osicColor">Our Music</a>
          </h1>
          <h2>
            Sign In With <a className="spotifyColor">Spotify</a> Account
          </h2>
          <button onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
