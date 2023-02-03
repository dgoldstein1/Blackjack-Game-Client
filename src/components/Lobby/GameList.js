import React from 'react';
import styled, { css } from "styled-components";

function GameList(props) {
  return (
    <div className="gamelist">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Players</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {props.gameList.map(( game, index ) => {
          return (
            <tr key={index}>
              <td>{game.name}</td>
              <td>{game.players}</td>
              <td>{game.status}</td>
              <button onClick={() => {
                props.onGameSelect(game.id)
              }}>
                join
              </button>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  )
}

export default GameList