import request from 'superagent'

const USER_JOINED = 'USER_JOINED'

const clientId = (id) => ({
  type: USER_JOINED,
  payload: id
})

//Send the user id to the server so it can be push to players array:
export const joinUserToGame = (id) => dispatch => {
  console.log('joinUser user:', id)
  return request
  .post('http://localhost:4000/game')//change later to heroku url
  .send({
    player: id,
  })
  .then(() => dispatch(clientId(id)))
  .catch(console.error)

}

// const USER_LOGGED = 'USER_LOGGED'

// const userFromServer = (userDetails) => ({
//   type: USER_LOGGED,
//   payload: userDetails
// })

// export const loginUser = (user) => dispatch => {
//   return request
//   .post('http://localhost:4000/users')//change later to heroku url
//   .send({
//     name: user.user_name,
//   })
//   .then(response => {
//     dispatch(userFromServer(response.body))
//   })
//   .catch(console.error)
// }
