// Import
import request from "superagent";

// Declare
export const SET_CARDS = "SET_CARDS";

// API url
const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=10";

// SET_CARDS
export const setCards = cards => {
  return {
    type: SET_CARDS,
    deck: cards
  };
};

// Action creator
export const getCards = () => dispatch => {
  // Request
  request(url)
    .then(response => {
      // Set deck
      dispatch(setCards(response.body.cards));
    })
    .catch(console.error);
};
