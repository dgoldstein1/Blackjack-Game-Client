// Import
import { GAME_RESULT } from "../actions/getResults";

// Reducer
const gameResult = (state = {}, action) => {
  switch (action.type) {
    case GAME_RESULT:
      return action.payload;
    default:
      return state;
  }
};

// Export
export default gameResult;