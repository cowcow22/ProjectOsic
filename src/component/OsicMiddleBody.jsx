import React, { useEffect } from 'react';
import './OsicMiddleBody.css';
import { useStateProvider } from '../utilities/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utilities/constant';

export default function OsicMiddleBody() {
  const [{ token, playlistSelected, playlistSelectId }, dispatch] = useStateProvider();

  useEffect(() => {
    const getMyPlaylist = async () => {
      const respond = await axios.get(`https://api.spotify.com/v1/playlists/${playlistSelectId}`, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      const playlistSelected = {
        id: respond.data.id,
        name: respond.data.name,
        description: respond.data.description.startsWith('<a') ? '' : respond.data.description,
        image: respond.data.images[0].url,
        tracks: respond.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, playlistSelected });
      //   console.log(' ID ' + playlistSelectId);
      // console.log(respond);
    };
    getMyPlaylist();
  }, [token, dispatch, playlistSelectId]);

  const playSong = async (id, name, artists, image, context_uri, track_number) => {
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/play`,
      {
        context_uri,
        offset: {
          position: track_number - 1,
        },
        position_ms: 0,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status === 204) {
      const currentPlaying = {
        id,
        name,
        artists,
        image,
      };

      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    } else {
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    }
  };

  const minutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  return (
    <div className="middleBodyBody container">
      {playlistSelected && (
        <>
          <div className="playlist">
            <div className="image">
              <img className="img" src={playlistSelected.image} alt="selected playlist" />
            </div>
            <div className="details">
              <span className="type">PLAYLIST</span>
              <h1 className="title">{playlistSelected.name}</h1>
              <p className="description">{playlistSelected.description}</p>
            </div>
          </div>
          <div className="tracks">
            {playlistSelected.tracks.map(({ id, name, artists, image, duration, album, context_uri, track_number }, index) => {
              return (
                <div className="row" key={id} onClick={() => playSong(id, name, artists, image, context_uri, track_number)}>
                  <div className="col">
                    <span>{index + 1}</span>
                  </div>
                  <div className="col detail">
                    <div className="image">
                      <img src={image} alt="track" />
                    </div>
                    <div className="info">
                      <span className="name">{name}</span>
                      <span>{artists}</span>
                    </div>
                  </div>
                  <div className="col">
                    <span>{album}</span>
                  </div>
                  <div className="col">
                    <span>{minutesAndSeconds(duration)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
