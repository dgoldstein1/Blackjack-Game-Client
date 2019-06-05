
function currentTurn (state= {}, action) {
  switch (action.type) {
    case 'STARTING_PLAYER':
      return action.payload
    case 'NEXT_TURN':
      return action.payload
    case 'GAME_OVER':
      return {}  
    default:
      return state  
  }
}

export default currentTurn