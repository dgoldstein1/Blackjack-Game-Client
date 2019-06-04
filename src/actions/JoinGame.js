import request from 'superagent'

const USER_JOINED = 'USER_JOINED'

const clientId = (id) => ({
  type: USER_JOINED,
  payload: id
})

//Send the user id to the server so it can be push to players array:
//also dispatch the user id as clientId to redux
export const joinUserToGame = (id) => dispatch => {
  return request
  .post('http://localhost:4000/game')//change later to heroku url
  .send({
    player: id,
  })
  .then(() => dispatch(clientId(id)))
  .catch(console.error)

}
