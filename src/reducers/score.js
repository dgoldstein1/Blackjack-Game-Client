// Import
import { UPDATE_SCORE } from "../actions/Drawcard";

// Reducer
const score = (state = 0, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return action.score;
    case 'GAME_OVER':
        return 0     
    default:
      return state;
  }
};

// Export
export default score;
