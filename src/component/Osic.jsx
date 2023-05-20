import React from "react";
import "./Osic.css";
import OsicLeftMenu from "./OsicLeftMenu.jsx";
import OsicTitle from "./OsicTitle";
import OsicMain from "./OsicMain";
import OsicPlayer from "./OsicPlayer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Osic() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const storedData = localStorage.getItem("spotifyData");
  //   if (storedData) {
  //     setData(JSON.parse(storedData));
  //   } else {
  //     fetchData();
  //   }
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://api.spotify.com/v1/me/playlists"
  //     );
  //     const responseData = response.data;
  //     setData(responseData);
  //     localStorage.setItem("spotifyData", JSON.stringify(responseData));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className="container-fluid px-0">
      <img
        className="background"
        src="https://pbs.twimg.com/media/DsdWY5iXoAEyfjd?format=jpg&name=large"
        alt="background"
      />
      <OsicLeftMenu />
      <div className="OsicMiddle">
        <div className="osicTitle">
          <OsicTitle />
        </div>
        <div className="OsicMainBody">
          <OsicMain />
          <OsicPlayer />
        </div>
      </div>
    </div>
  );
}

export default Osic;
