import { FETCHED_GAMES } from "../actions/game";
// Reducer
const fetchedGames = (state = 0, action) => {
  switch (action.type) {
    case FETCHED_GAMES:
      return action.games;
    default:
      return state;
  }
};

// Export
export default fetchedGames;