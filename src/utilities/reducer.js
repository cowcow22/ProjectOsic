import { reducerCases } from "./constant";

export const initialState = {
  token: null,
  playlistsMusic: [],
  // playlistSelectId: "5FT4q7Elh5u884FvG7dxHk",
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
    default:
      return state;
  }
};

export default reducer;
