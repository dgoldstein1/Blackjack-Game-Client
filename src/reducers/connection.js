import { SET_CONNECTION } from "../actions/game";
// Reducer
const connection = (state = null, action) => {
  switch (action.type) {
    case SET_CONNECTION:
      return action.connection;
    default:
      return state;
  }
};

// Export
export default connection;
