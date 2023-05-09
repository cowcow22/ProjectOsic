import { reducerCases } from "./constant";

export const initialState = {
  token: null,
};

const reduce = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    default:
      return state;
  }
};

export default reduce;
