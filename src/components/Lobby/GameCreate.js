import React from 'react';

function GameCreate(props) {
  return (<div>
     <h1>Create New Game</h1>
    <form onSubmit={props.onSubmit}>
          <label htmlFor="name">Game Name :</label>
          <input type="text" 
                name="name" 
                required 
                value={props.values.name} 
                onChange={props.onChange} ></input>
          <input type="submit" value="Create!"/>
    </form>


  </div>)
}

export default GameCreate