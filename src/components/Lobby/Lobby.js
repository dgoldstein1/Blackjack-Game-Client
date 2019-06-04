import React from 'react';

function Lobby(props) {
  return (<div>
     <h1>Choose a user name</h1>
    <form onSubmit={props.onSubmit}>
          <label>User name: </label>
          <input type="text" 
                name="user_name" 
                required 
                value={props.values.user_name} 
                onChange={props.onChange} ></input>
          <input type="submit" value="Log in" />
    </form>

    <h1>Available Rooms:</h1>
    <ul>
      
    </ul>
  </div>)
}

export default Lobby