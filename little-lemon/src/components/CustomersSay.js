import React from "react";
import TestimonialCard from "./TestimonialCard";

function CustomersSay({ testimonials }) {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <TestimonialCard 
            key={index}
            image={item.image}
            name={item.name}
            rating={item.rating}
            review={item.review}
          />
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
