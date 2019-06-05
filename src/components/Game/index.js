//Container for GameDetails

import React, { Component } from 'react';
import { connect } from "react-redux";
//importing action
import turnPlayed from '../../actions/turnPalyed'
import { joinUserToGame } from '../../actions/JoinGame'
import GamePlayersContainer from './GamePlayersContainer'


class Game extends Component {

componentDidMount() {
  // const randomNumber = Math.floor(Math.random() * 100)
  // this.props.joinUserToGame(randomNumber)
  
}

onClick = () => {
  // console.log('player played his turn')
  // this.props.turnPlayed()

}

  render() {
    return (
      <div>
        <GamePlayersContainer/>
          {/* <button onClick={this.onClick}>Start Game</button>
        
        {this.props.clientId === this.props.currentTurn &&
          <button onClick={this.onClick}>Play your turn</button>
        } */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {  
    clientId: state.clientId,
    currentTurn: state.currentTurn
  }
}
export default connect(mapStateToProps,{ turnPlayed,joinUserToGame })(Game);


