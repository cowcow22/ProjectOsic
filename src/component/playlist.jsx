import React, { useEffect } from 'react';
import axios from 'axios';
import { useStateProvider } from '../utilities/StateProvider';
import { reducerCases } from '../utilities/constant';

function Playlist() {
  const [{ token, playlistsMusic }, dispatch] = useStateProvider();
  useEffect(() => {
    const playlistData = async () => {
      const respond = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      const { items } = respond.data;
      const playlistsMusic = items.map(({ name, id }) => {
        return { name, id };
      });
      // console.log('PLAYLIST' + playlistsMusic);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlistsMusic });
    };
    playlistData();
  }, [token, dispatch]);

  const changeCurrentPlaylist = (playlistSelectId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, playlistSelectId });
  };
  return (
    <div>
      <ul>
        {playlistsMusic.map(({ name, id }) => {
          return (
            <li key={id} onClick={() => changeCurrentPlaylist(id)}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Playlist;
