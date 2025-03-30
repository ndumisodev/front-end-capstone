import React, { forwardRef } from "react";

const Chicago = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about">
      <div className="about-text">
        <h2>About Little Lemon</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant in Chicago, founded by two passionate chefs, Adrian and Maria.
          With years of experience and a love for traditional recipes, they bring a modern twist to authentic Mediterranean cuisine.
        </p>
      </div>

      <div className="about-images">
        <img src="/Mario and Adrian A.jpg" alt="Chef Adrian" className="chef-photo" />
        <img src="/Mario and Adrian b.jpg" alt="Chef Maria" className="chef-photo" />
      </div>
    </section>
  );
});

export default Chicago;
































// import React, {forwardRef} from 'react';

// function Chicago() {
//   return (
//     <section className="about">
//     <div class="about-text">
//         <h2>About Little Lemon</h2>
//         <p>
//             Little Lemon is a family-owned Mediterranean restaurant in Chicago, founded by two passionate chefs, Adrian and Maria. 
//             With years of experience and a love for traditional recipes, they bring a modern twist to authentic Mediterranean cuisine.
//         </p>
//     </div>

//     <div class="about-images">
//         <img src="/Mario and Adrian A.jpg" alt="Chef Adrian" class="chef-photo" />
//         <img src="/Mario and Adrian b.jpg" alt="Chef Maria" class="chef-photo" />
//     </div>
// </section>
//   );
// }

// export default Chicago;