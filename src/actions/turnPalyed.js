import request from 'superagent'

export default function turnPlayed (player) {
  console.log('palyer:', player)
  request
  .post('http://localhost:4000/game')
  .send({
    player:player
  })
  .then()

  return { type: 'TURN_PLAYED' }
}