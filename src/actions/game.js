import request from 'superagent'
import setting from '../setting'

export const SET_GAME = "SET_GAME";
export const FETCHED_GAMES = "FETCHED_GAMES"

const { baseUrl } = setting

export const listGames = () => dispatch => {
  return request
  .get(`${baseUrl}/rest/game`)
  .set("Access-Control-Allow-Origin", "true")
  .then(res => {
    dispatch({
      type : FETCHED_GAMES,
      games : res.body,
    })
  })

}

export function createGame () {
  // TODO
}