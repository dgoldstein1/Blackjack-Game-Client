import { v4 as uuidv4 } from 'uuid';

export const USER_LOGGED = 'USER_LOGGED'

const userFromServer = (userDetails) => ({
  type: USER_LOGGED,
  payload: userDetails
})

export const loginUser = (user) => dispatch => {
  // log in user locally
  dispatch(userFromServer({
    name : user.user_name,
    id : `player-${uuidv4()}`,
  }))
}

