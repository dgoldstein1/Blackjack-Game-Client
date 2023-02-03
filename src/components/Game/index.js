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
import SockJS from "sockjs-client";
import {setConnection} from "../../actions/game"

class Game extends Component {

  componentDidMount() {
    let setConn= c =>  {
      this.props.setConnection(c)
    }
    var sock = new SockJS("http://localhost:8080/game")
    sock.onopen = function() {
      setConn({
        success : true,
      })
    };

    sock.onmessage = function(e) {
      console.log('message', e.data);
      sock.close();
    };

    sock.onclose = function() {
      setConn({
        success : false,
        error : "socket closed",
      })
    };

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
    game : state.game,
  };
};
export default connect(
  mapStateToProps,
  { setConnection }
)(Game);
