import React, { Component } from 'react';
import { connect } from "react-redux";
import turnPlayed from '../../actions/turnPalyed'
import gameEnded from '../../actions/gameEnded'

class GameTurns extends Component {
  onClick = () => {
    this.props.turnPlayed()
  }

  onEndGame = () => {
    this.props.gameEnded()
  }


  render() {
    return (
      <div>
        <h1>GAME</h1>
        <h3>It's {this.props.currentTurn.name}'s turn</h3>
         {this.props.userLogedIn.id === this.props.currentTurn.id &&
          <button onClick={this.onClick}>Play your turn</button>
        }

        <button onClick={this.onEndGame}>End game</button>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {  
    userLogedIn: state.userLogedIn,
    currentTurn: state.currentTurn
  }
}
export default connect(mapStateToProps,{ turnPlayed, gameEnded })(GameTurns);