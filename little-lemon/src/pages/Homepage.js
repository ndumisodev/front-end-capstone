// import React from 'react';
import React, { useRef } from 'react';
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';
import specialsData from './specialData';
import testimonialsData from './testimonialsData';
import BookingPage from './BookingPage';

function Homepage() {
  const aboutRef = useRef(null);
  return (
    <main>
      <CallToAction />
      <Specials specials={specialsData}/>
      <CustomersSay testimonials={testimonialsData} />
      <Chicago ref={aboutRef}/>
    </main>
  );
}

export default Homepage;