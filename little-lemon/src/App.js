import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Navi';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes> 
      <Route path="/" element={<main><Homepage /></main>} />
      <Route path="/reservations" element={<main><BookingPage /></main>} />
        <Route path="/menu" element={<div>Menu Page</div>} />
        <Route path="/order-online" element={<div>Order Online Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




















// import './App.css';
// import React from 'react';
// import Header from './components/Header';
// import Nav from './components/Navi';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Homepage from './pages/Homepage';
// import BookingPage from './pages/BookingPage';

// function App() {
//   return (
//       <>
//       <Header />
//       <Nav />
//       <Main />
//       <Footer />
//       </>
//   );
// }

// export default App;
