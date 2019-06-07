// Import
import React from "react";

const Draw = props => {
  // Destructure
  const { user, gameresults, onClick } = props;
  const { winner, loser } = gameresults;

  // Determine other person's name
  const otherPersonName = () => {
    if (user.name === winner.name) {
      return loser.name;
    } else {
      return winner.name;
    }
  };

  // Display
  return (
    <div>
      <h1>What the hell {user.name}.. it's a draw.. </h1>

      <p>
        Both you and {otherPersonName()} have {winner.score} points. Boring...
      </p>

      <h3>This demands a rematch:</h3>
      <button onClick={onClick}>Play again!</button>
    </div>
  );
};

export default Draw;
