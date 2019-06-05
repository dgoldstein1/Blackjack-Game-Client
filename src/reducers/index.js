import { combineReducers } from 'redux'
import { userLogedIn } from './users'
import { playersInGame } from './users'
import currentTurn from './turns'
import clientId from './client'

export default combineReducers ({
  userLogedIn,
  playersInGame,
  // clientId,
  currentTurn,

})

