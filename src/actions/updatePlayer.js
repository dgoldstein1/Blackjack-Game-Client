import request from 'superagent'

//Importing the baseUrl
import setting from '../setting'

const { baseUrl } = setting


//Send the updated user object to the server so it can be replace it in players array:
export const updatePlayer = () => (dispatch, getState) => {

  const { draws, score, userLogedIn } = getState();

  let isWinnerValue = null;

  if (score > 21) {
    isWinnerValue = "lost"
  }

  return request
    .post(`${baseUrl}/player_update`)
    .send({
      player: {
        id: userLogedIn.id,
        name: userLogedIn.name,
        draws: draws,
        score: score,
        call: null,
        isWinner: isWinnerValue
      },
    })
    .then()
    .catch(console.error)

}
