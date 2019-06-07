import React from 'react';
import "./Lobby.css";

function Lobby(props) {
  return (<div>
     <h1>Hey blackjack player,<br/>
           what's your name?</h1>
    <form onSubmit={props.onSubmit}>
          
          <input type="text" 
                name="user_name" 
                required 
                value={props.values.user_name} 
                onChange={props.onChange} ></input>
          <input type="submit" value="Continue" />
    </form>


  </div>)
}

export default Lobby