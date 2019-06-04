//Container for GameDetails

import React, { Component } from 'react';
import { connect } from "react-redux";
//importing action
import turnPlayed from '../../actions/turnPalyed'
import { joinUserToGame } from '../../actions/JoinGame'


class Game extends Component {

state = {
  user:{
    id:2,
    name:'yossef'
  }
}

componentDidMount() {
  const randomNumber = Math.floor(Math.random() * 100)
  this.props.joinUserToGame(randomNumber)
  
}

onClick = () => {
  console.log(this.state)
  this.props.turnPlayed(this.state.player)
}

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Play your turn</button>
      </div>
    );
  }
}

export default connect(null,{ turnPlayed,joinUserToGame })(Game);


