import React, { useEffect } from 'react';
import './CurrSong.css';
import axios from 'axios';
import { useStateProvider } from '../utilities/StateProvider';
import { reducerCases } from '../utilities/constant';

export default function CurrSong() {
  const [{ token, currPlay }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrSong = async () => {
      const respond = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      console.log(respond);
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
      console.log('CURR PLAY ' + respond.data);
    };
    getCurrSong();
  }, [token, dispatch]);
  return (
    <div>
      {currPlay && (
        <div className="track">
          <div className="track__image">
            <img src={currPlay.image} alt="currPlay" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{currPlay.name}</h4>
            <h6 className="track__info__track__artists">{currPlay.artists.join(', ')}</h6>
          </div>
        </div>
      )}
    </div>
  );
}
