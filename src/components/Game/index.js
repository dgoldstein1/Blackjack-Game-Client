//Container for all Game components: GamePlayers and Blackjack

import React, { Component } from "react";
import { connect } from "react-redux";
//Importing action
import turnPlayed from "../../actions/turnPalyed";
import { joinUserToGame } from "../../actions/JoinGame";
import gameEnded from '../../actions/gameEnded'
//Importing components
import GamePlayersContainer from "./GamePlayersContainer";
import Lose from "./ResultPages/lose";
import Win from "./ResultPages/win";
import Draw from "./ResultPages/draw";

// import GameTurns from './GameTurns'
import Blackjack from "./Blackjack";

class Game extends Component {
  // Win or lose?
  winOrLose = () => {
    const user = this.props.userLogedIn;
    const gameresults = this.props.gameResult;
    const winner = this.props.gameResult.winner;
    const loser = this.props.gameResult.loser;

    if (winner.score === loser.score) {
      return <Draw user={user} gameresults={gameresults} onClick={this.onEndGame} />;
    } else if (winner.id === user.id) {
      return <Win user={user} gameresults={gameresults} onClick={this.onEndGame} />;
    } else {
      return <Lose user={user} gameresults={gameresults} onClick={this.onEndGame} />;
    }
  };

  // End game
  onEndGame = () => {
    this.props.gameEnded()
  }  

  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTurn: state.currentTurn,
    gameStarted: state.gameStarted,
    gameResult: state.gameResult,
    userLogedIn: state.userLogedIn
  };
};
export default connect(
  mapStateToProps,
  { turnPlayed, joinUserToGame, gameEnded }
)(Game);
