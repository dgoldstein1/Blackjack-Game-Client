//Container for finding and creating games
import React, { Component } from 'react';
import { connect } from "react-redux";
import GameList from './GameList'
import GameCreate from './GameCreate'
import NameInput from "./NameInput"
import {listGames, createGame} from "../../actions/game"
import { v4 as uuidv4 } from 'uuid';

class GameSelectorContainer extends Component {
	state = {
    name : "",
    createdGame : {
      name : "",
    },
	}

	onGameSelect = (event) => {

	}

	onGameCreate = (event) => {
    event.preventDefault()
    this.props.createGame(this.state.createdGame.name)
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

  componentDidMount = () => {
    this.props.listGames()
  }

  render() {
    return (
    	<>
    	{this.state.fetchedGames && (<div>fetchedGames...</div>)}
      {!this.state.fetchedGames && <NameInput values={this.state} onChange={this.onNameChange}/>}
    	{!this.state.fetchedGames && this.state.name !== "" && (
	      <div>
	        <GameList values={this.state} onGameSelect={this.onGameSelect}/>
	        <GameCreate values={this.state.createdGame} onSubmit={this.onGameCreate}onChange={this.onGameUpdate}/>
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

