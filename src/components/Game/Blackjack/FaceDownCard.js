// Import
import React from "react";
import "./Card.css";

const FaceDownCard = props => {
  // Destructure
  const { image, suit, value } = props.card;

  // Display
  return <img className="facedown" src={image} alt={suit + " " + value} />;
};

export default FaceDownCard;
