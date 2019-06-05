import request from 'superagent'

//Importing the baseUrl
import setting from '../setting'

const { baseUrl } = setting

const USER_JOINED = 'USER_JOINED'

//Send the user object to the server so it can be push to players array:
//also dispatch the 'USER_JOINED' to redux
export const joinUserToGame = (user) => dispatch => {
  return request
  .post(`${baseUrl}/gameplayers`)//change later to heroku url
  .send({
    player: user,
  })
  .then(() => dispatch({type: USER_JOINED}))
  .catch(console.error)

}
