import React from "react";
import SpecialCard from "./SpecialCard";

function Specials({ specials }) {
  return (
    <section className="highlight">
      <div className="highlight-header">
        <h2>This Week's Specials</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      
      <div className="specials">
        {specials.map((item, index) => (
          <SpecialCard 
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Specials;
