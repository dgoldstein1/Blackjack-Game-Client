// Import
import { combineReducers } from "redux";
import { userLogedIn } from "./users";
import deck from "./deck";
import draws from "./draws";
import score from "./score";
import { playersInGame } from "./users";
import { userJoinedGame } from "./users";
import currentTurn from "./turns";
import gameStarted from "./startingGame";
import gameResult from "./gameResult";
import game from "./game";
import fetchedGames from "./fetchedGames"
import connection from "./connection"

export default combineReducers({
  connection,
  game,
  userLogedIn,
  playersInGame,
  userJoinedGame,
  gameStarted,
  currentTurn,
  deck,
  draws,
  score,
  gameResult,
  fetchedGames
});
