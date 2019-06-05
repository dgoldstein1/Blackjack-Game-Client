function gameStarted (state= false, action) {
  switch (action.type) {
    case 'START_GAME':
      return action.payload
    default:
      return state  
  }
}

export default gameStarted