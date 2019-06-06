// Import
import React, { Component } from "react";
import { connect } from "react-redux";
import { getDeck } from "../../../actions/Getdeck";
import { drawCard } from "../../../actions/Drawcard";
import { updatePlayer } from "../../../actions/updatePlayer";
import turnPlayed from '../../../actions/turnPalyed'
import FaceDownCard from "./FaceDownCard";
import VisibleCard from "./VisibleCard";


class Blackjack extends Component {
  componentDidMount() {
    this.props.getDeck();
  }

  // Draw card
  draw = () => {
    this.props.drawCard();
    this.props.updatePlayer()
    this.props.turnPlayed()
  };

  // Call game
  call = () => {
    console.log("call the game");
  };

  render() {
    // Get deck
    const deck = this.props.deck;

    // Get draws
    const draws = this.props.draws;

    // Get score
    const score = this.props.score;

    //Get user name
    const userName = this.props.userLogedIn.name

    //Get current player name
    const currentPlayer = this.props.currentTurn.name

    // Display draws
    const displayDraws =
      draws &&
      [...draws].map(card => <VisibleCard key={card.code} card={card} />);

    return (
      <div>
        <h1>{userName}'s cards</h1>

        <div>
          {!deck && <p>Hold on, shuffeling cards..</p>}
          {deck && draws.length >= 0 && (
            <span>
              Current turn: {currentPlayer}
              <br /> <br />
              <b>Card amount</b>: {score}
            </span>
          )}
        </div>

        {deck && draws.length === 0 && (
          <div>
            <FaceDownCard card={deck[0]} />
            <FaceDownCard card={deck[0]} />
          </div>
        )}

        {deck && draws.length === 1 && (
          <div>
            <VisibleCard card={draws[0]} />
            <FaceDownCard card={deck[0]} />
          </div>
        )}

        <div>{deck && draws.length > 1 && displayDraws}</div>



        {deck && this.props.userLogedIn.id === this.props.currentTurn.id && (
          <div>
            <button onClick={this.draw}>Draw</button>
            <button onClick={this.call}>Call</button>
          </div>
        )}
        {deck && this.props.userLogedIn.id !== this.props.currentTurn.id && (
          <div>
            <p>Waiting for {currentPlayer}'s move..  </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deck: state.deck,
    draws: state.draws,
    score: state.score,
    userLogedIn: state.userLogedIn,
    currentTurn: state.currentTurn
  };
};

export default connect(
  mapStateToProps,
  { getDeck, drawCard, updatePlayer, turnPlayed}
)(Blackjack);
