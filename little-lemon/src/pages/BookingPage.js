import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookingPage({ availableTimes = [], updateTimes, submitForm }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [numDiners, setNumDiners] = useState("2");
  const [occasion, setOccasion] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [dinersError, setDinersError] = useState("");
  const [occasionError, setOccasionError] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDateError(!date ? "Please select a date." : "");
    if (typeof updateTimes === "function") {
      updateTimes({ type: "UPDATE", payload: date });
    } else {
      console.error("❌ ERROR: updateTimes is not a function");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;

    if (!selectedDate) {
      setDateError("Please select a date.");
      hasErrors = true;
    }
    if (!selectedTime) {
      setTimeError("Please select a time.");
      hasErrors = true;
    }
    if (!numDiners) {
      setDinersError("Please select the number of diners.");
      hasErrors = true;
    }
    if (!occasion) {
      setOccasionError("Please select an occasion.");
      hasErrors = true;
    }

    if (!hasErrors) {
      const formData = {
        date: selectedDate,
        time: selectedTime,
        guests: numDiners,
        occasion: occasion,
      };
      submitForm(formData);
    }
  };

  const isSubmitDisabled = !selectedDate || !selectedTime || !numDiners || !occasion;

  return (
    <section className="booking-banner">
      <div className="booking-content">
        <div className="booking-text">
          <h1 id="booking-title">Reserve a Table</h1>
          <p id="booking-subtitle">
            Enjoy a memorable dining experience at Little Lemon
          </p>

          <form onSubmit={handleSubmit} className="booking-form">
            <label htmlFor="date">Select a Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()}
              placeholderText="Select a date"
              id="date"
              required
            />
            {dateError && <p className="error">{dateError}</p>}

            <fieldset>
              <legend>Number of Diners:</legend>
              {[1, 2, 4, 6].map((num) => (
                <label key={num}>
                  <input
                    type="radio"
                    value={num}
                    checked={numDiners == num}
                    onChange={(e) => setNumDiners(e.target.value)}
                    required
                  />
                  {num} {num === 1 ? "person" : "people"}
                </label>
              ))}
              {dinersError && <p className="error">{dinersError}</p>}
            </fieldset>

            <label htmlFor="time">Select a Time:</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              id="time"
              required
            >
              <option value="">-- Select Time --</option>
              {availableTimes.length > 0 ? (
                availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))
              ) : (
                <option disabled>No available times</option>
              )}
            </select>
            {timeError && <p className="error">{timeError}</p>}

            <label htmlFor="occasion">Occasion:</label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              id="occasion"
              required
            >
              <option value="">-- Select Occasion --</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {occasionError && <p className="error">{occasionError}</p>}

            <button
              className="cta-button"
              type="submit"
              disabled={isSubmitDisabled}
            >
              Confirm Reservation
            </button>
          </form>
        </div>
        <div className="booking-pic">
          <img src="/pexels-max-griss-16866522-13669062.jpg" alt="Restaurant" />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;