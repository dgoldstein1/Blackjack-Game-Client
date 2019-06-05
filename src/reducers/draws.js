// Import
import { DRAWN_CARDS } from "../actions/Drawcards";

// Reducer
const draws = (state = [], action) => {
  switch (action.type) {
    case DRAWN_CARDS:
      return [...state, action.draws];
    default:
      return state;
  }
};

// Export
export default draws;
