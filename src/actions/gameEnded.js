import request from 'superagent'
//Importing the baseUrl
import setting from '../setting'

const { baseUrl } = setting

export default function gameEnded () {
  request
  .get(`${baseUrl}/game_over`)
  .then()

  return { type: 'END_GAME_CLICKED' }
}