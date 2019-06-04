import request from 'superagent'

//Send the user id to the server so it can be push to players array:
export function joinUserToGame (id) {
  console.log('joinUser user:', id)
  request
  .post('http://localhost:4000/game')//change later to heroku url
  .send({
    player: id,
  })
  .then()

  return { type: 'USER_JOINED' }
}

