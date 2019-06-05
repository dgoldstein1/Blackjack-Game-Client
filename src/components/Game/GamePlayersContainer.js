//Container for GamePlayers

import React, { Component } from 'react';
import { connect } from "react-redux";
//importing action
import { joinUserToGame } from '../../actions/JoinGame'
import GamePlayers from './GamePlayers'


class GamePlayersContainer extends Component {

// componentDidMount() {
//   const randomNumber = Math.floor(Math.random() * 100)
//   this.props.joinUserToGame(randomNumber)
  
// }

onJoin = () => {
  console.log('player clicked join game')
  // this.props.turnPlayed()

}

onStart = () => {
  console.log('player clicked start game')
  // this.props.turnPlayed()

}

  render() {
    return (
      <div>
        <GamePlayers onJoin={this.onJoin} onStart={this.onStart} />
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
export default connect(mapStateToProps,{ joinUserToGame })(GamePlayersContainer);


