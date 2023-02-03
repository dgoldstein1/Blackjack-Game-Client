//Container for finding and creating games
import React, { Component } from 'react';
import { connect } from "react-redux";
import GameList from './GameList'
import GameCreate from './GameCreate'
import NameInput from "./NameInput"
import {listGames, createGame} from "../../actions/game"
import { v4 as uuidv4 } from 'uuid';

import {Client} from "@stomp/stompjs"
import SockJS from "sockjs-client"

class GameSelectorContainer extends Component {
	state = {
    nameSelected : true,
    name : "dsauce",
    createdGame : {
      name : "",
    },
	}

	onGameSelect = (game) => {
    var sock = new SockJS("http://localhost:8080/game")
    sock.onopen = function() {
      console.log('open');
      // sock.send('test');
    };

    sock.onmessage = function(e) {
      console.log('message', e.data);
      sock.close();
    };

    sock.onclose = function() {
      console.log('close');
    };

  }

	onGameCreate = (event) => {
    event.preventDefault()
    this.props.createGame(this.state.createdGame.name)
    setTimeout(() => {
      this.props.listGames()
    }, 300)
	}

  onGameUpdate = (event) => {
    this.setState({
      ...this.state,
      createdGame : {
        [event.target.name] : event.target.value,
      }
    })
  }

  onNameChange  = (event) => {
    this.setState({
      [event.target.name] : event.target.value,
    })
  }

  onNameSubmit = (e) => {
    e.preventDefault()
    console.log("on name submit")
    this.setState({
      nameSelected : true,
    })
  }

  componentDidMount = () => {
    this.props.listGames()
  }

  render() {
    return (
    	<>
      {!this.state.nameSelected && <NameInput values={this.state} onSubmit={this.onNameSubmit}onChange={this.onNameChange}/>}
    	{!this.props.fetchedGames && this.state.nameSelected && (<div>fetching games...</div>)}
    	{this.props.fetchedGames && this.state.nameSelected && (
	      <div>
          <GameCreate values={this.state.createdGame} onSubmit={this.onGameCreate}onChange={this.onGameUpdate}/>
          <br/>
          <GameList gameList={this.props.fetchedGames} onGameSelect={this.onGameSelect}/>
        </div>
  		)}
  		</>
    )
  }
}


const mapStateToProps = state => {
  return {
    fetchedGames : state.fetchedGames,
  }
};

export default connect(mapStateToProps, { listGames, createGame })(GameSelectorContainer);

