import request from 'superagent'

//Importing the baseUrl
import setting from '../setting'

const { baseUrl } = setting


export const USER_LOGGED = 'USER_LOGGED'

const userFromServer = (userDetails) => ({
  type: USER_LOGGED,
  payload: userDetails
})

export const loginUser = (user) => dispatch => {
  return request
  .post(`${baseUrl}/users`)//change later to heroku url
  .send({
    name: user.user_name,
  })
  .then(response => {
    dispatch(userFromServer(response.body))
  })
  .catch(console.error)
}

