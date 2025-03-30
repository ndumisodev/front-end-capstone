// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function BookingPage() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState("");
//   const [numDiners, setNumDiners] = useState("2");
//   const [occasion, setOccasion] = useState("");
//   const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Table booked for ${numDiners} people on ${selectedDate?.toDateString()} at ${selectedTime} for ${occasion}`
//     );
//   };

//   return (
//     <section className="booking-banner">
//       <div className="booking-content">
//         <div className="booking-text">
//           <h1 id="booking-title">Reserve a Table</h1>
//           <p id="booking-subtitle">
//             Enjoy a memorable dining experience at Little Lemon
//           </p>

//           <form onSubmit={handleSubmit} className="booking-form">
//             <label htmlFor="date">Select a Date:</label>
//             <DatePicker
//               selected={selectedDate}
//               onChange={(date) => setSelectedDate(date)}
//               minDate={new Date()}
//               placeholderText="Select a date"
//               id="date"
//             />

//             <fieldset>
//               <legend>Number of Diners:</legend>
//               {[1, 2, 4, 6].map((num) => (
//                 <label key={num}>
//                   <input
//                     type="radio"
//                     value={num}
//                     checked={numDiners == num}
//                     onChange={(e) => setNumDiners(e.target.value)}
//                   />
//                   {num} {num === 1 ? "person" : "people"}
//                 </label>
//               ))}
//             </fieldset>

//             <label htmlFor="time">Select a Time:</label>
//             <select
//               value={selectedTime}
//               onChange={(e) => setSelectedTime(e.target.value)}
//               id="time"
//             >
//               <option value="">-- Select Time --</option>
//               {availableTimes.map((time) => (
//                 <option key={time} value={time}>
//                   {time}
//                 </option>
//               ))}
//             </select>

//             <label htmlFor="occasion">Occasion:</label>
//             <select
//               value={occasion}
//               onChange={(e) => setOccasion(e.target.value)}
//               id="occasion"
//             >
//               <option value="">-- Select Occasion --</option>
//               <option value="Birthday">Birthday</option>
//               <option value="Anniversary">Anniversary</option>
//             </select>

//             <button
//               className="cta-button"
//               type="submit"
//               disabled={!selectedDate || !selectedTime}
//             >
//               Confirm Reservation
//             </button>
//           </form>
//         </div>
//         <div className="booking-pic">
//           <img
//             src="/pexels-max-griss-16866522-13669062.jpg"
//             alt="Restaurant"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BookingPage;





import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookingPage({ availableTimes = [], updateTimes }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [numDiners, setNumDiners] = useState("2");
  const [occasion, setOccasion] = useState("");

 const handleDateChange = (date) => {
  setSelectedDate(date);

  // Ensure updateTimes is a function before calling it
  if (typeof updateTimes === "function") {
    console.log("🔄 Dispatching updateTimes action with:", date);
    updateTimes({ type: "UPDATE", payload: date });
  } else {
    console.error("❌ ERROR: updateTimes is not a function");
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Table booked for ${numDiners} people on ${selectedDate?.toDateString()} at ${selectedTime} for ${occasion}`
    );
  };

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
            />

            <fieldset>
              <legend>Number of Diners:</legend>
              {[1, 2, 4, 6].map((num) => (
                <label key={num}>
                  <input
                    type="radio"
                    value={num}
                    checked={numDiners == num}
                    onChange={(e) => setNumDiners(e.target.value)}
                  />
                  {num} {num === 1 ? "person" : "people"}
                </label>
              ))}
            </fieldset>

            <label htmlFor="time">Select a Time:</label>
<select
  value={selectedTime}
  onChange={(e) => setSelectedTime(e.target.value)}
  id="time"
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


            <label htmlFor="occasion">Occasion:</label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              id="occasion"
            >
              <option value="">-- Select Occasion --</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>

            <button
              className="cta-button"
              type="submit"
              disabled={!selectedDate || !selectedTime}
            >
              Confirm Reservation
            </button>
          </form>
        </div>
        <div className="booking-pic">
          <img
            src="/pexels-max-griss-16866522-13669062.jpg"
            alt="Restaurant"
          />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;




































// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function BookingPage() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState("");
//   const [numDiners, setNumDiners] = useState("2");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Table booked for ${numDiners} people on ${selectedDate?.toDateString()} at ${selectedTime}`);
//   };

//   return (
//     <section className="booking-banner">
//       <div className="booking-content">
//         <div className="booking-text">
//           <h1 id="booking-title">Reserve a Table</h1>
//           <p id="booking-subtitle">Enjoy a memorable dining experience at Little Lemon</p>
          
//           <form onSubmit={handleSubmit} className="booking-form">
//             <label>Select a Date:</label>
//             <DatePicker 
//               selected={selectedDate} 
//               onChange={(date) => setSelectedDate(date)}
//               minDate={new Date()} 
//               placeholderText="Select a date"
//             />

//             <fieldset>
//               <legend>Number of Diners:</legend>
//               {[1, 2, 4, 6].map((num) => (
//                 <label key={num}>
//                   <input 
//                     type="radio" 
//                     value={num} 
//                     checked={numDiners == num} 
//                     onChange={(e) => setNumDiners(e.target.value)}
//                   />
//                   {num} {num === 1 ? "person" : "people"}
//                 </label>
//               ))}
//             </fieldset>

//             <label>Select a Time:</label>
//             <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
//               <option value="">-- Select Time --</option>
//               <option value="18:00">6:00 PM</option>
//               <option value="19:00">7:00 PM</option>
//               <option value="20:00">8:00 PM</option>
//               <option value="21:00">9:00 PM</option>
//             </select>

//             <button className="cta-button" type="submit" disabled={!selectedDate || !selectedTime}>
//               Confirm Reservation
//             </button>
//           </form>
//         </div>
//         <div className="booking-pic">
//           <img 
//             // src="/pexels-magda-ehlers-pexels-3822749.jpg" 
//             src="/pexels-max-griss-16866522-13669062.jpg"
//             alt="Restaurant" 
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BookingPage;
