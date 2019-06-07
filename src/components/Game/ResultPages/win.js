// Import
import React from "react";

const Win = props => {
  // Destructure
  const { user, gameresults, onClick } = props;
  const { winner, loser } = gameresults;

  const points = winner.score - loser.score;

  const messageFollowingPoints = points => {
    if (winner.score === 21) {
      return "Because you got blackjack! Amazing!";
    }

    if (points > 0) {
      return "with " + (winner.score - loser.score) + " points more.";
    } else {
      return " because " + loser.name + " has overdrawn!";
    }
  };

  // Display
  return (
    <div>
      <h1>Congrats {user.name}, you rock! </h1>

      <p>
        You kicked {loser.name}'s ass {messageFollowingPoints(points)}
      </p>

      <h3>Can you pull this of again?</h3>
      <button onClick={onClick}>Play again!</button>
    </div>
  );
};

export default Win;
