import React, { useReducer, useEffect } from "react";
import BookingPage from "../pages/BookingPage";


// Function to generate available times based on selected date
const initializeTimes = () => ["18:00", "19:00", "20:00", "21:00"];

// Reducer to update times when date changes
const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE":
        if (!action.payload) {
            console.error("ERROR: No date received in updateTimes action!");
            return state;
          }
        const selectedDate = action.payload;

        console.log("✅ Selected Date:", selectedDate);// Check if date is received
        console.log("Selected Date:", selectedDate); // Debugging log
  
        // Example: Different times for different days (modify logic as needed)
        const newTimes =
          selectedDate.getDay() === 6 // Saturday
            ? ["17:00", "18:00", "19:00"]
            : ["18:00", "19:00", "20:00", "21:00"];
  
            console.log("✅ Updated Available Times:", newTimes); // Check new times
        return [...newTimes]; // Ensure a new state is returned
  
      default:
        return state;
    }
  };

function Main() {
  const initialTimes = initializeTimes();
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

  console.log("🎯 Initial Available Times:", availableTimes);

  return <BookingPage availableTimes={availableTimes} updateTimes={dispatch} />;
}

export default Main;










        {/* <section class="promo-banner">
          <div class="promo-content">
            <div class="promo-text">
              <h1 id="name">Little Lemon</h1>
              <p id="city">Chicago</p>
              <p id="description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a morden twist.</p>
              <button class="cta-button">Reserve a Table</button>
            </div>
            <div class="promo-pic">
              <img src="/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg"/>
            </div>
          </div>
        </section> */}

        {/* <section class="highlight">
    <div class="highlight-header">
        <h2>This Week's Specials</h2>
        <button class="menu-button">Online Menu</button>
    </div>
    
    <div class="specials"> */}
        {/* <!-- Brochette Card --> */}
        {/* <div class="special-card">
            <img src="/bruchetta.svg" alt="Brochette" />
            <div class="dish-header">
              <span class="dish-name"><h3>Bruchette</h3></span>
              <span class="dish-price">$12.99</span>
            </div>
            <p>Our Bruchette is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <a href="#" class="order-link">Order a Delivery →</a>
        </div> */}

        {/* <!-- Greek Salad Card --> */}
        {/* <div class="special-card">
            <img src="/greek-salad.jpg" alt="Greek Salad" />
            <div class="dish-header">
              <span class="dish-name"><h3>Greek Salad</h3></span>
              <span class="dish-price">$12.99</span>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and Our Chicago style feta cheese, garnished with cruncy garlic and rosemary croutons.</p>
            <a href="#" class="order-link">Order a Delivery →</a>
        </div> */}

        {/* <!-- Lemon Dessert Card --> */}
        {/* <div class="special-card">
            <img src="lemon-dessert.jpg" alt="Lemon Dessert" />
            <div class="dish-header">
              <span class="dish-name"><h3>Lemon Dessert</h3></span>
              <span class="dish-price">$12.99</span>
            </div>
            <p>This comes straight from grandms's recipe book, every last ingredient has been sourced and is as sunthetic as can be imagined.</p>
            <a href="#" class="order-link">Order a Delivery →</a>
        </div> */}
    {/* </div>
</section> */}

{/* <section class="testimonials">
    <h2>What Our Customers Say</h2>
    <div class="testimonial-container">
        <div class="testimonial-card">
            <img src="https://us.123rf.com/450wm/rawpixel/rawpixel1704/rawpixel170462225/76770585-african-descent-man-in-a-shoot.jpg?ver=6" alt="User Photo" class="user-photo" />
            <div class="user-info">
                <h3 class="user-name">Menzi Khomo</h3>
                <div class="star-rating">⭐⭐⭐⭐⭐</div>
            </div>
            <p class="review-text">
                "The food was absolutely delicious! The ambiance and service were perfect. Definitely coming back!"
            </p>
        </div>

        <div class="testimonial-card">
            <img src="https://images.unsplash.com/photo-1629145810320-aec9e63dd798?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Photo" class="user-photo" />
            <div class="user-info">
                <h3 class="user-name">Sophia Nzimande</h3>
                <div class="star-rating">⭐⭐⭐⭐⭐</div>
            </div>
            <p class="review-text">
                "Amazing experience! The Greek Salad was fresh, and the service was top-notch."
            </p>
        </div>

        <div class="testimonial-card">
            <img src="https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?cs=srgb&dl=pexels-davdkuko-2743754.jpg&fm=jpg" alt="User Photo" class="user-photo" />
            <div class="user-info">
                <h3 class="user-name">Philani Msomi</h3>
                <div class="star-rating">⭐⭐⭐⭐⭐</div>
            </div>
            <p class="review-text">
                "Grilled fish was cooked to perfection! Loved every bite."
            </p>
        </div>

        <div class="testimonial-card">
            <img src="https://images.unsplash.com/photo-1584361853901-dd1904bb7987?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D" alt="User Photo" class="user-photo" />
            <div class="user-info">
                <h3 class="user-name">Sukey Lee</h3>
                <div class="star-rating">⭐⭐⭐⭐⭐</div>
            </div>
            <p class="review-text">
                "Grilled fish was cooked to perfection! Loved every bite."
            </p>
        </div>
    </div>
</section> */}

        {/* <section class="about">
            <div class="about-text">
                <h2>About Little Lemon</h2>
                <p>
                    Little Lemon is a family-owned Mediterranean restaurant in Chicago, founded by two passionate chefs, Adrian and Maria. 
                    With years of experience and a love for traditional recipes, they bring a modern twist to authentic Mediterranean cuisine.
                </p>
            </div>

            <div class="about-images">
                <img src="/Mario and Adrian A.jpg" alt="Chef Adrian" class="chef-photo" />
                <img src="/Mario and Adrian b.jpg" alt="Chef Maria" class="chef-photo" />
            </div>
        </section> */}

