//Container for all Game components: GamePlayers and Blackjack

import React, { Component } from 'react';
import { connect } from "react-redux";
//Importing action
import turnPlayed from '../../actions/turnPalyed'
import { joinUserToGame } from '../../actions/JoinGame'
//Importing components
import GamePlayersContainer from './GamePlayersContainer'
import GameTurns from './GameTurns'


class Game extends Component {

  render() {
    return (
      <div>
        {!this.props.gameStarted && 
          <GamePlayersContainer/>
        }

{/* later implement GameTurns logic inside blackjack component and render him instead */}
        {this.props.gameStarted &&
          <GameTurns/> 
        }
         
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {  
    currentTurn: state.currentTurn,
    gameStarted: state.gameStarted
  }
}
export default connect(mapStateToProps,{ turnPlayed,joinUserToGame })(Game);


