import React from "react";

function GamePlayers(props) {
  const { players } = props
  const playersArrey =players && players.map(player => {
    return <li key={player.id}>{player.name}</li>
  })
  return (
    <div>
      <h1>Players in this game:</h1>
      <ul>{!players[0] && 'There are no players in this game yet'}</ul>
      <ul>{playersArrey}</ul>
      
      <h3>Want to play with them?</h3>
      <p>Click on the 'join game' buttun and see your name on the list</p>
      <p>When you have enought players click on 'start game' and start playing!</p>

      {!props.userJoinedGame && 
      <button onClick={props.onJoin}>Join Game</button>
      }

      <button onClick={props.onStart}>Start Game</button>
    </div>
  )  
}

export default GamePlayers
