import request from 'superagent'

export default function turnPlayed () {
  request
  .get('http://localhost:4000/game')
  .then(res => console.log('get response:', res.body))

  return { type: 'TURN_PLAYED' }
}