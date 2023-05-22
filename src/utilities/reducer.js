import { reducerCases } from './constant';

export const initialState = {
  token: null,
  playlistsMusic: [],
  userinfo: null,
  currPlay: null,
  playerState: false,
  playlistSelected: null,
  playlistSelectId: '6IFnavyK7vuJBnMTXBEKnk',
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlistsMusic: action.playlistsMusic,
      };
    }
    case reducerCases.SET_PLAYLIST:
      return {
        ...state,
        playlistSelected: action.playlistSelected,
      };
    case reducerCases.SET_PLAYLIST_ID:
      return {
        ...state,
        playlistSelectId: action.playlistSelectId,
      };
    case reducerCases.SET_PLAYING:
      return {
        ...state,
        currPlay: action.currPlay,
      };
    case reducerCases.SET_PLAYER_STATE:
      return {
        ...state,
        playerState: action.playerState,
      };
    default:
      return state;
  }
};

export default reducer;
