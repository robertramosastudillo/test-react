import { GET_USERS, GET_USERS_SUCCESSFULLY, GET_USERS_ERROR } from "../types";

import axiosClient from "../../config/axios";

export function getUsersAction() {
  return async (dispatch) => {
    dispatch(getUsers());
    try {
      const response = await axiosClient.get(`/users`);
      dispatch(getUsersSuccessfully(response.data.data));
    } catch (error) {
      dispatch(getUsersError(true));
    }
  };
}

const getUsers = () => ({
  type: GET_USERS,
  payload: true,
});

const getUsersSuccessfully = (users) => ({
  type: GET_USERS_SUCCESSFULLY,
  payload: users,
});

const getUsersError = (status) => ({
  type: GET_USERS_ERROR,
  payload: status,
});
