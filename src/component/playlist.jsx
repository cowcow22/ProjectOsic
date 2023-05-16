import React, { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../utilities/StateProvider";
import { reducerCases } from "../utilities/constant";
// import "./OsicLeftMenu.css";

function Playlist() {
  const [{ token, playlistsMusic }, dispatch] = useStateProvider();
  useEffect(() => {
    const playlistData = async () => {
      const respond = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = respond.data;
      const playlistsMusic = items.map(({ name, id }) => {
        return { name, id };
      });
      console.log({ playlistsMusic });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlistsMusic });
    };
    playlistData();
  }, [token, dispatch]);
  return (
    <div>
      <ul>
        {playlistsMusic.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Playlist;
