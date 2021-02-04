import { combineReducers } from "redux";
import { colorReducer } from "./colorReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  users: userReducer,
  color: colorReducer,
});
