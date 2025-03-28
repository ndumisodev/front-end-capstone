import React from 'react';

function CallToAction() {
  return (
    <section className="promo-banner">
      <div className="promo-content">
        <div className="promo-text">
          <h1 id="name">Little Lemon</h1>
          <p id="city">Chicago</p>
          <p id="description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="cta-button">Reserve a Table</button>
        </div>
        <div className="promo-pic">
          <img src="/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;