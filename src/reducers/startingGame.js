function gameStarted (state= false, action) {
  switch (action.type) {
    case 'STARTING_PLAYER':
      return action.payload
    case 'GAME_OVER':
        return false   
    default:
      return state  
  }
}

export default gameStarted