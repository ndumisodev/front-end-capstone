import React from "react";

function SpecialCard({ image, name, price, description }) {
  return (
    <div className="special-card">
      <img src={image} alt={name} />
      <div className="dish-header">
        <h3 className="dish-name">{name}</h3>
        <span className="dish-price">${price}</span>
      </div>
      <p>{description}</p>
      <a href="#" className="order-link">Order a Delivery →</a>
    </div>
  );
}

export default SpecialCard;
