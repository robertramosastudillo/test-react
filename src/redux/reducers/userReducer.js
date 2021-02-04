import { GET_USERS, GET_USERS_SUCCESSFULLY, GET_USERS_ERROR } from "../types";

const initialState = {
  users: [],
  error: false,
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_USERS_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        error: false,
        users: action.payload,
      };

    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
