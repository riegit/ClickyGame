import React from "react";
import "./FlowerCard.css";

const FlowerCard = props => (
  <div className="card">
    <div className="img-container">
      <a onClick={() => props.selectFlower(props.breed)}>
        <img alt={props.breed} src={props.image} />
      </a>
    </div>
  </div>
);

export default FlowerCard;
