import { combineReducers } from "redux";
import userLogedIn from "./users";
import deck from "./deck";
import draws from "./draws";

export default combineReducers({
  userLogedIn,
  deck,
  draws
});
