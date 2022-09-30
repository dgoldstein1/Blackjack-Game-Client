//Container for finding and creating games
import React, { Component } from 'react';
import { connect } from "react-redux";
import GameList from './GameList'
import GameCreate from './GameCreate'
import NameInput from "./NameInput"

class GameSelectorContainer extends Component {
	state = {
    name : "",
	}

	onGameSelect = (event) => {

	}

	onGameCreate = (event) => {

	}

  onNameChange  = (event) => {
    this.setState({
      [event.target.name] : event.target.value,
    })
  }

  componentDidMount = () => {
    return new Promise(r => {
      setTimeout(r, 1000)
    })
  }

  render() {
    return (
    	<>
    	{this.state.fetchingGames && (<div>fetchingGames...</div>)}
      {!this.state.fetchingGames && <NameInput values={this.state} onChange={this.onNameChange}/>}
    	{!this.state.fetchingGames && this.state.name !== "" && (
	      <div>
	        <GameList values={this.state} onGameSelect={this.onGameSelect}/>
	        <GameCreate values={this.state} onGameCreate={this.onGameCreate}/>
	      </div>
  		)}
  		</>
    )
  }
}


const mapStateToProps = state => {
  return {
    fetchinGames : state.fetchingGames,
  }
};

export default connect(mapStateToProps)(GameSelectorContainer);

