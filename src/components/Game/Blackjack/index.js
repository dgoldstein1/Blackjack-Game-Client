// Import
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards } from "../../../actions/Getcards";
import { drawCards } from "../../../actions/Drawcards";

class Blackjack extends Component {
  // Local state
  state = { drawnCards: [], score: 0 };
  componentDidMount() {
    this.props.getCards();
  }

  // Draw
  draw = () => {
    this.props.drawCards();

    
  };

  // Call
  call = () => {
    console.log("call");
  };

  render() {
    // Get cards
    const deck = this.props.deck;
    deck && console.log("Deck from redux: ", deck);


    // const initialCard = deck && <li>{deck[0].code}</li>;

    return (
      <div>
        <h1>Blackjack</h1>

        <h2>CARD / CARD</h2>

 {/*        {!initialCard && "Loading cards..."}
        <ul>{initialCard}</ul> */}

        <button onClick={this.draw}>Draw</button>
        <button onClick={this.call}>Call</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deck: state.deck
  };
};

export default connect(
  mapStateToProps,
  { getCards, drawCards }
)(Blackjack);
