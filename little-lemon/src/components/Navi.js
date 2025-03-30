import React from "react";
import { Link, useLocation } from "react-router-dom"; 

function Nav() {

    const location = useLocation();

  const handleAboutClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const aboutSection = document.querySelector(".about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#about"; // Redirect if not on homepage
    }
  };



  return (

    <nav id="nav-header">
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/about">About</Link></li> */}
        <li><a href="#" onClick={handleAboutClick}>About</a></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
