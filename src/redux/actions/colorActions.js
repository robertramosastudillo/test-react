import { GET_COLOR, GET_COLOR_SUCCESSFULLY, GET_COLOR_ERROR } from "../types";

export function getColorAction(color) {
  return async (dispatch) => {
    dispatch(getColor());
    try {
      dispatch(getColorSuccessfully(color));
    } catch (error) {
      dispatch(getColorError(true));
    }
  };
}

const getColor = () => ({
  type: GET_COLOR,
  payload: true,
});

const getColorSuccessfully = (color) => ({
  type: GET_COLOR_SUCCESSFULLY,
  payload: color,
});

const getColorError = (status) => ({
  type: GET_COLOR_ERROR,
  payload: status,
});
