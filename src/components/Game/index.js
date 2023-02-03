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
import Stomp from "stompjs"
import {setConnection} from "../../actions/game"


var stompClient = null

class Game extends Component {



  componentDidMount() {
    let gameID = this.props.game.id
    var sock = new SockJS("http://localhost:8080/game")
    stompClient = Stomp.over(sock);
    stompClient.connect({},function (frame) {

      stompClient.send("/app/action/" + gameID, {}, JSON.stringify({
        id : "test",
        action : "START_GAME",
      }))

      stompClient.subscribe('/topic/game/' + gameID, function(action){
        action = JSON.parse(action.body)
        console.log(action)
      });
    });


  }

  render() {
    return (
      <div>
        {!this.props.connection && <h1>Connecting..</h1>}
        {this.props.connection && this.props.connection.error && <h1>{"Error : " + this.props.connection.error}</h1>}
        {/*{this.props.connection && this.props.connection.success && <Blackjack/>}*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    game : state.game,
    connection : state.connection,
  };
};
export default connect(
  mapStateToProps,
  { setConnection }
)(Game);
