import request from 'superagent'

const START_GAME = 'START_GAME'


const startingGame = () => ({
  type: START_GAME,
  payload: true
})

export const startGame = () => dispatch => {
  //send a get request to route /start_game so the server can initialise the first players turn
  return request
  .get('http://localhost:4000/start_game')
  .then(() => {
    dispatch(startingGame())
  })
  .catch(console.error)
}
