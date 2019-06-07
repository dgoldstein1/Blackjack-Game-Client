// Import
import React from "react";

const Win = props => {
  // Destructure
  const { user, gameresults, onClick } = props;
  const { winner, loser } = gameresults;

  console.log(user, gameresults, winner, loser);

  // Display
  return (
    <div>
      <h1>Congrats {user.name}, you rock! </h1>

      <p>You have kicked {loser.name}'s ass with a card amount of {winner.score}.</p>

    <h3>Feeling lucky?</h3>
    <button onClick={onClick}>Play again</button>
    </div>
  );
};

export default Win;
