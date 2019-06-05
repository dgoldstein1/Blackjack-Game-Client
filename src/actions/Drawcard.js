// Declare
export const DRAW_CARD = "DRAW_CARD";
export const REMOVE_FROM_DECK = "REMOVE_FROM_DECK";
export const UPDATE_SCORE = "UPDATE_SCORE";

// DRAW_CARD
export const drawnCard = card => {
  return {
    type: DRAW_CARD,
    card: card
  };
};

// REMOVE_FROM_DECK
export const removeCard = () => {
  return {
    type: REMOVE_FROM_DECK
  };
};

// UPDATE_SCORE
export const updateScore = score => {
  return {
    type: UPDATE_SCORE,
    score: score
  };
};

// Action creator
export const drawCard = () => (dispatch, getState) => {
  // Get current deck
  const deck = getState().deck;
  // Draw first card
  dispatch(drawnCard(deck[0]));
  // Remove from deck
  dispatch(removeCard());
  // Get draws from state
  const draws = getState().draws;
  // Sum draws
  const sum = draws.reduce((total, card) => {
    // Face cards value 10
    const faceCards = ["JACK", "QUEEN", "KING"];
    if (faceCards.includes(card.value)) {
      return total + 10;
      // Ace values 11
    } else if (card.value === "ACE") {
      return total + 11;
    } else {
      return total + parseFloat(card.value);
    }
  }, 0);

  // Update score
  dispatch(updateScore(sum));
};
