// Declare
export const DRAWN_CARDS = "DRAWN_CARDS";
export const REMOVE_CARD = "REMOVE_CARD";

// DRAWN_CARDS
export const drawnCards = card => {
  return {
    type: DRAWN_CARDS,
    draws: card
  };
};

// REMOVE_CARD
export const removeCard = () => {
  return {
    type: REMOVE_CARD
  };
};

// Action creator
export const drawCards = () => (dispatch, getState) => {
  // Get current deck
  const deck = getState().deck;
  // Draw first card
  dispatch(drawnCards(deck[0]));
  // And remove from deck
  dispatch(removeCard());
};
