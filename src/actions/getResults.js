
export const GAME_RESULT = 'GAME_RESULT'


const gameResult = (result) => ({
  type: GAME_RESULT,
  payload: result
})

export const getResults = () => (dispatch, getState) => {

  const { playersInGame } = getState();

  const LoserIndex = playersInGame.findIndex(player => player.isWinner === 'lost')
  const WinnerIndex = playersInGame.findIndex(player => player.isWinner !== 'lost')
  console.log('loser',LoserIndex)

 

  if(LoserIndex >= 0){
    const Loser = playersInGame[LoserIndex]
    const Winner = playersInGame[WinnerIndex]
    const { id, name, score } = Winner
    const result = { 
      winner:{
        id:id,
        name:name,
        score:score
      },
      loser:{
        id: Loser.id,
        name: Loser.name,
        score: Loser.score
      }
    }
    console.log('loser:', Loser)
    console.log('winner:', Winner)
    console.log('result:', result)
    dispatch(gameResult(result))
  }


}

