import { v4 as uuidv4 } from 'uuid';
import request from 'superagent'
import setting from '../setting'

export const SET_GAME = "SET_GAME";

const { baseUrl } = setting

export const FETCHED_GAMES = "FETCHED_GAMES"
export const listGames = () => dispatch => {
  return request
  .get(`${baseUrl}/rest/game`)
  .then(res => {
    dispatch({
      type : FETCHED_GAMES,
      games : res.body,
    })
  })

}

export const GAME_CREATED = "GAME_CREATED"
export const createGame = (gameName) => dispatch => {
  return request
  .post(`${baseUrl}/rest/game`, {
    name : gameName,
    id : `game-${uuidv4()}`
  })
  .then(res => {
    dispatch({
      type : GAME_CREATED,
      games : res.body,
    })
  })
}