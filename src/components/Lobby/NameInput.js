import React from 'react';


function NameInput(props) {
  return (<div>
     <h1>What's your name?</h1>
    <form onSubmit={props.onSubmit}>
          <label htmlFor="name">Name :</label>
          <input type="text" 
                name="name" 
                required 
                value={props.values.name} 
                onChange={props.onChange} ></input>
          <input type="submit" value="Enter"/>
    </form>


  </div>)
}

export default NameInput