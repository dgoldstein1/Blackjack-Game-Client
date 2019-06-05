//Container for GamePlayers

import React, { Component } from 'react';
import { connect } from "react-redux";
import GamePlayers from './GamePlayers'

//importing action
import { joinUserToGame } from '../../actions/JoinGame'
import { startGame } from '../../actions/startGame'
import { stat } from 'fs';


class GamePlayersContainer extends Component {

onJoin = () => {
  this.props.joinUserToGame(this.props.user)

}

onStart = () => {
  console.log('player clicked start game')
  this.props.startGame()

}

  render() {
    return (
      <div>
        <GamePlayers 
          onJoin={this.onJoin} 
          onStart={this.onStart} 
          players={this.props.players} 
          userJoinedGame={this.props.userJoinedGame}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {  
    user: state.userLogedIn,
    players: state.playersInGame,
    userJoinedGame: state.userJoinedGame,
    currentTurn: state.currentTurn
  }
}
export default connect(mapStateToProps,{ joinUserToGame, startGame })(GamePlayersContainer);


