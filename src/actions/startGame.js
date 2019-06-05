import request from 'superagent'

const START_GAME = 'START_GAME'


const startingGame = () => ({
  type: START_GAME,
  payload: true
})

export const startGame = () => dispatch => {
  console.log('starting game dispatched')
  return request
  .get('http://localhost:4000/start_game')
  .then(() => {
    console.log('response from get request')
    dispatch(startingGame())
  })
  .catch(console.error)
}
