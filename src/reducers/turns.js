
function currentTurn (state= {}, action) {
  switch (action.type) {
    case 'STARTING_PLAYER':
      return action.payload
    case 'NEXT_TURN':
      return action.payload
    default:
      return state  
  }
}

export default currentTurn