//Container for GameDetails

import React, { Component } from 'react';
import { connect } from "react-redux";
//importing action
import turnPlayed from '../../actions/turnPalyed'


class Game extends Component {
state = {}

componentDidMount() {
  this.setState({player: 1})
  
}

onClick = () => {
  console.log(this.state)
  this.props.turnPlayed(this.state.player)
}

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Play your turn</button>
      </div>
    );
  }
}

export default connect(null,{ turnPlayed })(Game);


