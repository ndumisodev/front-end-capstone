import React from 'react';

function Specials() {
  return (
    <section class="highlight">
    <div class="highlight-header">
        <h2>This Week's Specials</h2>
        <button class="menu-button">Online Menu</button>
    </div>
    
    <div class="specials">
        {/* <!-- Brochette Card --> */}
        <div class="special-card">
            <img src="/bruchetta.svg" alt="Brochette" />
            <div class="dish-header">
              <span class="dish-name"><h3>Bruchette</h3></span>
              <span class="dish-price">$12.99</span>
            </div>
            <p>Our Bruchette is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <a href="#" class="order-link">Order a Delivery →</a>
        </div>

        {/* <!-- Greek Salad Card --> */}
        <div class="special-card">
            <img src="/greek-salad.jpg" alt="Greek Salad" />
            <div class="dish-header">
              <span class="dish-name"><h3>Greek Salad</h3></span>
              <span class="dish-price">$12.99</span>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and Our Chicago style feta cheese, garnished with cruncy garlic and rosemary croutons.</p>
            <a href="#" class="order-link">Order a Delivery →</a>
        </div>

        {/* <!-- Lemon Dessert Card --> */}
        <div class="special-card">
            <img src="lemon-dessert.jpg" alt="Lemon Dessert" />
            <div class="dish-header">
              <span class="dish-name"><h3>Lemon Dessert</h3></span>
              <span class="dish-price">$12.99</span>
            </div>
            <p>This comes straight from grandms's recipe book, every last ingredient has been sourced and is as sunthetic as can be imagined.</p>
            <a href="#" class="order-link">Order a Delivery →</a>
        </div>
    </div>
</section>
  );
}

export default Specials;