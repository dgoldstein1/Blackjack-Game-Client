import request from 'superagent'

export default function gameEnded () {
  request
  .get('http://localhost:4000/game_over')
  .then()

  return { type: 'END_GAME_CLICKED' }
}