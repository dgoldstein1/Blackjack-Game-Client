import { v4 as uuidv4 } from 'uuid';
import request from 'superagent'
import setting from '../setting'
import SockJS from "sockjs-client";
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

export const SET_GAME = "SET_GAME"
export const setGame = (game) => dispatch => {
   dispatch({
    type : SET_GAME,
    game : game,
  })
}

export const SET_CONNECTION = "SET_CONNECTION"
export const setConnection = (connection) => dispatch => {
  dispatch({
    type : SET_CONNECTION,
    connection: connection,
  })
}


