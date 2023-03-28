//Container for finding and creating games
import React, { Component } from 'react';
import { connect } from "react-redux";
import GameList from './GameList'
import GameCreate from './GameCreate'
import NameInput from "./NameInput"
import {listGames, createGame, joinGame} from "../../actions/game"
import { setPlayerInfo } from "../../actions/player"
import { v4 as uuidv4 } from 'uuid';

import {Client} from "@stomp/stompjs"
import SockJS from "sockjs-client"

class GameSelectorContainer extends Component {
	state = {
    name : this.props.player.name,
    createdGame : {
      name : "",
    },
	}

	onJoinGame = (game) => {
    this.props.joinGame(game, this.state.name)
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
    this.props.setPlayerInfo(uuidv4(), this.state.name)
  }

  componentDidMount = () => {
    this.props.listGames()
  }

  render() {
    return (
    	<>
      {!this.props.player.name && <NameInput values={this.state} onSubmit={this.onNameSubmit}onChange={this.onNameChange}/>}
    	{!this.props.fetchedGames && this.props.player.name && (<div>fetching games...</div>)}
    	{this.props.fetchedGames && this.props.player.name && (
	      <div>
          <GameCreate values={this.state.createdGame} onSubmit={this.onGameCreate}onChange={this.onGameUpdate}/>
          <br/>
          <GameList gameList={this.props.fetchedGames} onJoinGame={this.onJoinGame}/>
        </div>
  		)}
  		</>
    )
  }
}


const mapStateToProps = state => {
  return {
    fetchedGames : state.fetchedGames,
    player : state.player,
  }
};

export default connect(mapStateToProps, { listGames, createGame, joinGame, setPlayerInfo })(GameSelectorContainer);

