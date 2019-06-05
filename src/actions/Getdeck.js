// Import
import request from "superagent";

// Declare
export const SET_DECK = "SET_DECK";

// API url
const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=10";

// SET_DECK
export const setDeck = cards => {
  return {
    type: SET_DECK,
    cards: cards
  };
};

// Action creator
export const getDeck = () => dispatch => {
  // Request
  request(url)
    .then(response => {
      // Set deck
      dispatch(setDeck(response.body.cards));
    })
    .catch(console.error);
};
