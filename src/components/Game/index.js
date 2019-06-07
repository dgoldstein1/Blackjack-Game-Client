//Container for all Game components: GamePlayers and Blackjack

import React, { Component } from "react";
import { connect } from "react-redux";
//Importing action
import turnPlayed from "../../actions/turnPalyed";
import { joinUserToGame } from "../../actions/JoinGame";
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
    const winner = this.props.gameResult.winner;
    const loser = this.props.gameResult.loser;

    if (winner.score === loser.score) {
      return <Draw />;
    } else if (winner.id === user.id) {
      return <Win />;
    } else {
      return <Lose />;
    }
  };

  render() {
    return (
      <div>
        {!this.props.gameStarted && <GamePlayersContainer />}

        {this.props.gameStarted && !this.props.gameResult && (
          <div>
            <Blackjack />
          </div>
        )}

        {this.props.gameStarted && this.props.gameResult && (
          <div>{this.winOrLose()}</div>
        )}
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
  { turnPlayed, joinUserToGame }
)(Game);
