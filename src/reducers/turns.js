
function currentTurn (state= {}, action) {
  switch (action.type) {
    case 'NEXT_TURN':
      return action.payload
    default:
      return state  
  }
}

export default currentTurn