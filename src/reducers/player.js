// Import
import { SET_PLAYER_INFO } from "../actions/player";

// Reducer
const player = (state = {}, action) => {
  switch (action.type) {
    case SET_PLAYER_INFO:
      return {
        id : action.id,
        name : action.name,
      };
    default:
      return state;
  }
};

// Export
export default player;
