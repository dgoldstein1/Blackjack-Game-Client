import request from 'superagent'

//Importing the baseUrl
import setting from '../setting'

const { baseUrl } = setting


//Send the updated user object to the server so it can be replace it in players array:
export const updatePlayer = () => (dispatch, getState) => {

  const {draws, score, userLogedIn} = getState();
  console.log('draws:',draws,'score:', score,'userLogedIn:', userLogedIn)

  return request
  .post(`${baseUrl}/player_update`)
  .send({
    player: {
      id: userLogedIn.id,
      name: userLogedIn.name,
      draws: draws,
      score: score,
      call: null,
      isWinner: null
    },
  })
  .then()
  .catch(console.error)

}
