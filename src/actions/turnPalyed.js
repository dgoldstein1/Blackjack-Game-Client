import request from 'superagent'

export default function turnPlayed () {
  request
  .get('http://localhost:4000/game')
  .then()

  return { type: 'TURN_PLAYED' }
}