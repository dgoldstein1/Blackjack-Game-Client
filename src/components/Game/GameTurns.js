import React, { Component } from 'react';
import { connect } from "react-redux";
import turnPlayed from '../../actions/turnPalyed'

class GameTurns extends Component {
  onClick = () => {
    console.log('player played his turn')
    this.props.turnPlayed()
  }

  render() {
    return (
      <div>
        <h1>GAME</h1>
         {this.props.userLogedIn.id === this.props.currentTurn.id &&
          <button onClick={this.onClick}>Play your turn</button>
        }
        
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
export default connect(mapStateToProps,{ turnPlayed })(GameTurns);