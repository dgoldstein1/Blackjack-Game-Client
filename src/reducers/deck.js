// Import
import { SET_CARDS } from "../actions/Getcards";
import { REMOVE_CARD } from "../actions/Drawcards";

// Reducer
const deck = (state = null, action) => {
  switch (action.type) {
    case SET_CARDS:
      return action.deck;
    case REMOVE_CARD:
      state.pop();
      return state;
    default:
      return state;
  }
};

// Export
export default deck;
