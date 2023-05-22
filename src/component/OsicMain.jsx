import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useStateProvider } from '../utilities/StateProvider';
// import { AiFillClockCircle } from "react-icons/ai";
import { reducerCases } from '../utilities/constant';
import './OsicMain.css';
import OsicMiddleBody from './OsicMiddleBody';

function OsicMain() {
  // const [{ token, playlistSelect, playlistSelectId }, dispatch] =
  //   useStateProvider();

  // useEffect(() => {
  //   const getPlaylist = async () => {
  //     const respond = await axios.get(
  //       `https://api.spotify.com/v1/playlists/${playlistSelectId}`,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const playlistSelect = {
  //       id: respond.data.id,
  //       name: respond.data.name,
  //       description: respond.data.description.startsWith("<a")
  //         ? ""
  //         : respond.data.description,
  //       image: respond.data.images[0].url,
  //       tracks: respond.data.tracks.items.map(({ track }) => ({
  //         id: track.id,
  //         name: track.name,
  //         artists: track.artists.map((artist) => artist.name),
  //         image: track.album.images[2].url,
  //         duration: track.duration_ms,
  //         album: track.album.name,
  //         context_uri: track.album.uri,
  //         track_number: track.track_number,
  //       })),
  //     };
  //     console.log(playlistSelect);
  //     dispatch({ type: reducerCases.SET_PLAYLIST, playlistSelect });
  //   };
  //   getPlaylist();
  // }, [token, dispatch, playlistSelectId]);

  return (
    <div className="middleBody container">
      <OsicMiddleBody />
    </div>
  );
}

export default OsicMain;
