//Container for GameDetails

import React, { Component } from 'react';

class Game extends Component {
state = {}

componentDidMount() {
  this.setState({player: 1})
}

onClick = () => {

}

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Play your turn</button>
      </div>
    );
  }
}

export default Game;

