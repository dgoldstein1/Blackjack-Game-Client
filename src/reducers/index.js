import { combineReducers } from "redux";
import userLogedIn from "./users";
import deck from "./deck";
import draws from "./draws";
import score from "./score";

export default combineReducers({
  userLogedIn,
  deck,
  draws,
  score
});
