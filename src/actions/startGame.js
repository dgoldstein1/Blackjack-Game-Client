import request from 'superagent'

//Importing the baseUrl
import setting from '../setting'

const { baseUrl } = setting

const START_GAME = 'START_GAME'


const startingGame = () => ({
  type: START_GAME,
  payload: true
})

export const startGame = () => dispatch => {
  //send a get request to route /start_game so the server can initialise the first players turn
  return request
  .get(`${baseUrl}/start_game`)
  .then(() => {
    dispatch(startingGame())
  })
  .catch(console.error)
}
