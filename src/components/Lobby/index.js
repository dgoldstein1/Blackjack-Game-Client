//Container for the lobby
import React, { Component } from 'react';
import { connect } from "react-redux";
import Lobby from './Lobby'
import { loginUser } from '../../actions/Login'

//DELETE later
import gameEnded from '../../actions/gameEnded'


class LobbyContainer extends Component {
  state = {
    user_name: '',
  }

   onChange  = (event) => {
     this.setState({
      [event.target.name] : event.target.value
     })
   }

   onSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state)
    this.setState({
      user_name: '',
    })
  }

  //DELETE later
  onEndGame = () => {
    this.props.gameEnded()
  } 

  render() {
    return (
      <div>
        {/* DELETE later */}
        <button onClick={this.onEndGame}>End game</button>
        <Lobby onChange={this.onChange} onSubmit={this.onSubmit} values={this.state}/>

      </div>
    )
  }
}


//DELETE gameEnded later
export default connect(null, { loginUser ,gameEnded})(LobbyContainer);

