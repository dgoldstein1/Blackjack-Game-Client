//Container for GameDetails

import React, { Component } from 'react';
import { connect } from "react-redux";
//importing action
import turnPlayed from '../../actions/turnPalyed'
import { joinUserToGame } from '../../actions/JoinGame'


class Game extends Component {

componentDidMount() {
  const randomNumber = Math.floor(Math.random() * 100)
  this.props.joinUserToGame(randomNumber)
  
}

onClick = () => {
  console.log('player played his turn')
  this.props.turnPlayed()
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


