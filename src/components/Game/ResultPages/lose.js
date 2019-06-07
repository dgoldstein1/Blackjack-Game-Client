// Import
import React from "react";

const Lose = props => {
  // Destructure
  const { user, gameresults, onClick } = props;
  const { winner, loser } = gameresults;

  const points = winner.score - loser.score;

  const messageFollowingPoints = points => {
    if (winner.score === 21) {
      return "with a blackjack! Amazing!";
    }

    if (points > 0) {
      return "with " + (winner.score - loser.score) + " points more.";
    } else {
      return "because you don't know when to stop!";
    }
  };

  // Display
  return (
    <div>
      <h1>Tough luck {user.name}.. :( </h1>

      <p>
        You got owned by {winner.name} {messageFollowingPoints(points)}
      </p>

      <h3>Fancy revenge?</h3>
      <button onClick={onClick}>Play again!</button>
    </div>
  );
};

export default Lose;
