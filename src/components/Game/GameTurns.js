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
         {this.props.clientId === this.props.currentTurn &&
          <button onClick={this.onClick}>Play your turn</button>
        }
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
export default connect(mapStateToProps,{ turnPlayed })(GameTurns);