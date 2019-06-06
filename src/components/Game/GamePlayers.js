import React from "react";

function GamePlayers(props) {
  //Deconstructing players array from props
  const { players } = props
  //maping over players array.on each player displaying his name in <li> item
  const playersArrey =players && players.map(player => {
    return <li key={player.id}>{player.name}</li>
  })
  return (
    <div>
    
    {!players[0] && <h1>Be the first to join the table</h1>}
    {/* <ul>{!players[0] && 'There are no players in this game yet'}</ul> */}
    {players[0] && 
      <div>
      <h1>Players already on the table:</h1>
      <ul>{playersArrey}</ul>
      </div>
    }
      <p>{props.userJoinedGame && players.length === 1 && 'Waiting for the other player.. hopefully it will not take long...'}</p>
      
      
      {!props.userJoinedGame && 
        <button onClick={props.onJoin}>Join Table</button>
      }
      {props.userJoinedGame && players.length === 2 &&
    <div>
        <button onClick={props.onStart}>Start blackjackin!</button>

    </div>
      }
      
      </div>
      )  
    }
    
    export default GamePlayers
    