import request from 'superagent'

//Importing the baseUrl
import setting from '../setting'

const { baseUrl } = setting

export default function turnPlayed () {
  request
  .get(`${baseUrl}/game`)
  .then()

  return { type: 'TURN_PLAYED' }
}