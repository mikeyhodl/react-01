import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AboutUs from './AboutUs';
import Coffee from './Coffee';
import ContactUs from './ContactUs';
import Home from './Home';

function Header() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              {' '}
              <Link to="/">Home</Link>
            </li>
            <li>
              {' '}
              <Link to="/about">About</Link>
            </li>
            <li>
              {' '}
              <Link to="/coffee">Coffee</Link>
            </li>
            <li>
              {' '}
              <Link to="/contactUs">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
      <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Coffee" element={<Coffee />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Header;
