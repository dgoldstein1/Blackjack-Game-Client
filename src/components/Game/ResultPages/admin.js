// Import
import React, { Component } from "react";
import { connect } from "react-redux";
import gameEnded from "../../../actions/gameEnded";

class Admin extends Component {
  onEndGame = () => {
    this.props.gameEnded();
  };

  render() {

    // Display
    return (
      <div>
        <button onClick={this.onEndGame}>Play again!</button>
      </div>
    );
  }
}

export default connect(
  null,
  { gameEnded }
)(Admin);
