// Import
import React, { Component } from "react";
import { connect } from "react-redux";
import { getDeck } from "../../../actions/Getdeck";
import { drawCard } from "../../../actions/Drawcard";
import FaceDownCard from "./FaceDownCard";
import VisibleCard from "./VisibleCard";

class Blackjack extends Component {
  componentDidMount() {
    this.props.getDeck();
  }

  // Draw card
  draw = () => {
    this.props.drawCard();
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

    // Display draws
    const displayDraws =
      draws &&
      [...draws].map(card => <VisibleCard key={card.code} card={card} />);

    return (
      <div>
        <h1>Blackjack</h1>

        <div>
          {!deck && <p>Hold on, shuffeling cards..</p>}
          {deck && draws.length === 0 && <p>Yes, draw a card cowboy..</p>}
          {deck && draws.length > 0 && (
            <span>
              Demmy, your time to shine again!
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

        {deck && (
          <div>
            <button onClick={this.draw}>Draw</button>
            <button onClick={this.call}>Call</button>
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
    score: state.score
  };
};

export default connect(
  mapStateToProps,
  { getDeck, drawCard }
)(Blackjack);
