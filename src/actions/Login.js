import request from 'superagent'

export function loginUser (user) {

  return {
    type: 'USER_LOGGED',
    payload: user
  }//delete the return later and uncomment the request part
  
  // request
  // .post('http://localhost:4000/users')//change later to heroku url
  // .send({
  //   user_name: user.user_name,
  // })
  // .then(response => {
  //   const userDetails = response.body
  //   return {
  //     type: 'USER_LOGGED',
  //     payload: userDetails
  //   }
  // })

}


