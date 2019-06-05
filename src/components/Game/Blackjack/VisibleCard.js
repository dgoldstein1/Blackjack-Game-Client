// Import
import React from "react";
import "./Card.css";

const VisibleCard = props => {
  // Destructure
  const { image, suit, value } = props.card;

  // Display
  return <img className="visible" src={image} alt={suit + " " + value} />;
};

export default VisibleCard;
