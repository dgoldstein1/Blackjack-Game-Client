//Container for the lobby
import React, { Component } from 'react';
import { connect } from "react-redux";
import Lobby from './Lobby'
import { loginUser } from '../../actions/Login'


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

  render() {
    return (
      <div>
        <Lobby onChange={this.onChange} onSubmit={this.onSubmit} values={this.state}/>

      </div>
    )
  }
}



export default connect(null, { loginUser })(LobbyContainer);

