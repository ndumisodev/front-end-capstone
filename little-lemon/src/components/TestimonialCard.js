import React from "react";

function TestimonialCard({ image, name, rating, review }) {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="user-photo" />
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <div className="star-rating">{"⭐".repeat(rating)}</div>
      </div>
      <p className="review-text">"{review}"</p>
    </div>
  );
}

export default TestimonialCard;
