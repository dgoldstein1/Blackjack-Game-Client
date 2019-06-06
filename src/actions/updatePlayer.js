import request from 'superagent'

//Importing the baseUrl
import setting from '../setting'

const { baseUrl } = setting


//Send the updated user object to the server so it can be replace it in players array:
export const updatePlayer = (action) => (dispatch, getState) => {

  const { draws, score, userLogedIn, playersInGame } = getState();

  const allCalled = playersInGame.every(player => player.call)
  let isWinnerValue = null;
  let callValue = null;

  if (score > 21) {
    isWinnerValue = "lost"
  } else if (allCalled) {
   const myIndex = playersInGame.findIndex(player => player.id === userLogedIn.id)
   const otherPlayerIndex = (myIndex === 1) ? 0 : 1

   console.log('myIndex:', myIndex)
   console.log('otherPlayerIndex:', otherPlayerIndex)

    if(playersInGame[myIndex][score] > playersInGame[otherPlayerIndex][score]){

      isWinnerValue = "won"

    } else if (playersInGame[myIndex][score] === playersInGame[otherPlayerIndex][score]) {
      
      isWinnerValue = (myIndex === 1) ? 'lost' : 'won'

    } else {

      isWinnerValue = "lost"

    }

  }

  if (action === 'call') {

    callValue = true

    return request
    .post(`${baseUrl}/player_update`)
    .send({
      player: {
        id: userLogedIn.id,
        name: userLogedIn.name,
        draws: draws,
        score: score,
        call: callValue,
        isWinner: isWinnerValue
      },
    })
    .then(request
      .get(`${baseUrl}/game`)
      .then(res => console.log('get request sent for call action')))
    .catch(console.error)

  }

  return request
    .post(`${baseUrl}/player_update`)
    .send({
      player: {
        id: userLogedIn.id,
        name: userLogedIn.name,
        draws: draws,
        score: score,
        call: callValue,
        isWinner: isWinnerValue
      },
    })
    .then()
    .catch(console.error)

}
