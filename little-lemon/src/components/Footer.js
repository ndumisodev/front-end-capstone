import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return (
        <footer class="footer">
    <div class="footer-container">
        {/* <!-- Logo --> */}
        <div class="footer-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vTQQKswoaJXT5OQWWVtvyH9GKBoKlxMk1g&s" alt="Little Lemon Logo" />
        </div>

        {/* <!-- Doormat Navigation --> */}
        <nav class="footer-nav">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="reservations.html">Reservations</a></li>
                <li><a href="order.html">Order Online</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
        </nav>

        {/* <!-- Contact Details --> */}
        <div class="footer-contact">
            <h3>Contact Us</h3>
            <p>123 Mediterranean St, Chicago, IL</p>
            <p>Email: contact@littlelemon.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>

        {/* <!-- Social Media Links --> */}
        <div class="footer-social">
            <h3>Follow Us</h3>
            <a href="https://facebook.com" target="_blank" className="social-link"><FontAwesomeIcon icon={faFacebook} /><img src="/facebook-icon.png" alt="Facebook" /></a>
        <a href="https://instagram.com" target="_blank" className="social-link">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://pinterest.com" target="_blank" className="social-link">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        </div>
    </div>
</footer>
    )
}

export default Footer;