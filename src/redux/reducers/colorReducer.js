import { GET_COLOR, GET_COLOR_SUCCESSFULLY, GET_COLOR_ERROR } from "../types";

const initialState = {
  color: {},
  error: false,
  loading: false,
};

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLOR:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_COLOR_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        error: false,
        color: action.payload,
      };

    case GET_COLOR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
