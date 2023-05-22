import React from 'react';
import './OsicPlayer.css';
import axios from 'axios';
import { useStateProvider } from '../utilities/StateProvider';
import { reducerCases } from '../utilities/constant';
import CurrSong from './CurrSong';
import { IoMdSkipForward, IoMdSkipBackward, IoMdShuffle, IoMdPause, IoMdPlay, IoMdRepeat } from 'react-icons/io';

function OsicPlayer() {
  const [{ token, playerState }, dispatch] = useStateProvider();

  const trackChange = async (type) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      }
    );
    const respond = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
    if (respond.data !== '') {
      const { item } = respond.data;
      const currPlay = {
        id: item.id,
        name: item.name,
        artists: item.artists.map((artist) => artist.name),
        image: item.album.images[2].url,
      };
      dispatch({ type: reducerCases.SET_PLAYING, currPlay });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currPlay: null });
    }
  };

  const changeStatus = async () => {
    const status = playerState ? 'pause' : 'play';
    const respond = await axios.put(
      `https://api.spotify.com/v1/me/player/${status}`,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      }
    );
    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState,
    });
    // dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
  };

  return (
    <div className="footerBody">
      <div className="currentSong">
        <CurrSong />
      </div>
      <div className="controlPlayer">
        <div className="shuffle">
          <IoMdShuffle />
        </div>
        <div className="prev">
          <IoMdSkipBackward onClick={() => trackChange('previous')} />
        </div>
        <div className="state">{playerState ? <IoMdPause onClick={changeStatus} /> : <IoMdPlay onClick={changeStatus} />}</div>
        <div className="next">
          <IoMdSkipForward onClick={() => trackChange('next')} />
        </div>
        <div className="loop">
          <IoMdRepeat />
        </div>
      </div>
    </div>
  );
}

export default OsicPlayer;
