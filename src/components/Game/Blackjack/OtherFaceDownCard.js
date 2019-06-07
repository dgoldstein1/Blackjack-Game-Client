// Import
import React from "react";
import "./OtherCard.css";

const OtherFaceDownCard = props => {
  // Destructure
  const { image, suit, value } = props.card;

  // Display
  return <img className="facedown" src={image} alt={suit + " " + value} />;
};

export default OtherFaceDownCard;
