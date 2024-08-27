import React from "react";
import "./Card.css";

const Card = ({ image, title }) => {
  return (
    <div className="card-content">
      <img src={image} alt={title} className="card-img" />
      <div className="card-title-container">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
