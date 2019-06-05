// Import
import { SET_DECK } from "../actions/Getdeck";
import { REMOVE_FROM_DECK } from "../actions/Drawcard";

// Reducer
const deck = (state = null, action) => {
  switch (action.type) {
    case SET_DECK:
      return action.cards;
    case REMOVE_FROM_DECK:
      state.shift();
      return state;
    default:
      return state;
  }
};

// Export
export default deck;
