
export const GAME_RESULT = 'GAME_RESULT'


const gameResult = (result) => ({
  type: GAME_RESULT,
  payload: result
})

export const getResults = () => (dispatch, getState) => {
  
  const { playersInGame } = getState();
  
  //check index of is winner in case of going over 21
  const LoserIndex = playersInGame.findIndex(player => player.isWinner === 'lost')
  const WinnerIndex = playersInGame.findIndex(player => player.isWinner !== 'lost')
  
  //check index of is winner in case of 2 players called
  const findWinnerIndex = playersInGame.findIndex(player => player.isWinner === 'won')
  const findLoserIndex = playersInGame.findIndex(player => player.isWinner !== 'won')
  
  let result 
  
  // if statement in case of going over 21
  if(LoserIndex >= 0){
    const Loser = playersInGame[LoserIndex]
    const Winner = playersInGame[WinnerIndex]
    const { id, name, score } = Winner
    result = { 
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
    dispatch(gameResult(result))
  }  

  // if statement in case of 2 players called
  if (findWinnerIndex >= 0) {
    const Loser = playersInGame[findLoserIndex]
    const Winner = playersInGame[findWinnerIndex]
    const { id, name, score } = Winner
    result = { 
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
    dispatch(gameResult(result))
  }
}
  
  