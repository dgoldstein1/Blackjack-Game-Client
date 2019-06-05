function gameStarted (state= false, action) {
  switch (action.type) {
    case 'STARTING_PLAYER':
      return action.payload
    default:
      return state  
  }
}

export default gameStarted