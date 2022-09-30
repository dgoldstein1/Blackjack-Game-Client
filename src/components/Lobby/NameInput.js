import React from 'react';

function NameInput(props) {
  return (<div>
     <h1>Hey blackjack player,<br/>
           what's your name?</h1>
    <form onSubmit={props.onSubmit}>
          
          <input type="text" 
                name="name" 
                required 
                value={props.values.name} 
                onChange={props.onChange} ></input>
          <input type="submit" value="Continue" />
    </form>


  </div>)
}

export default NameInput