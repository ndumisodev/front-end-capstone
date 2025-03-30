import React from "react";
import { useLocation, Link } from "react-router-dom";
// import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  const location = useLocation();
  const bookingDetails = location.state;

  return (
    <section className="confirmation-banner">
      <div className="confirmation-content">
        <div className="confirmation-text">
          <h1 id="confirmation-title">Booking Confirmed 🎉</h1>
          <p id="confirmation-subtitle">Thank you for reserving a table at Little Lemon!</p>
          {bookingDetails && (
            <div className="booking-details">
              <p><strong>Date:</strong> {bookingDetails.date?.toDateString()}</p>
              <p><strong>Time:</strong> {bookingDetails.time}</p>
              <p><strong>Guests:</strong> {bookingDetails.guests}</p>
              <p><strong>Occasion:</strong> {bookingDetails.occasion}</p>
            </div>
          )}
          <Link to="/" className="cta-button">
            Return to Homepage
          </Link>
        </div>
        <div className="confirmation-pic">
          <img
            src="/reserve2.jpg" // Replace with your image path
            alt="Booking Confirmation"
          />
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBooking;