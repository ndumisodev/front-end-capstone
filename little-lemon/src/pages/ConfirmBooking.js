import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="confirmation-banner">
      <div className="confirmation-content">
        <h1>Booking Confirmed 🎉</h1>
        <p>Thank you for reserving a table at Little Lemon!</p>
        <Link to="/" className="cta-button">
          Return to Homepage
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;

