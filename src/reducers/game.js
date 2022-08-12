import { SET_GAME } from "../actions/game";
// Reducer
const game = (state = 0, action) => {
  switch (action.type) {
    case SET_GAME:
      return action.game;
    default:
      return state;
  }
};

// Export
export default game;
