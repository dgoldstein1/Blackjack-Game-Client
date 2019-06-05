function clientId (state= {}, action) {
  switch (action.type) {
    case 'USER_JOINED':
      return action.payload
    default:
      return state  
  }
}

export default clientId