import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {

  return (
            <footer>
                <nav>
                    <ul>
                        {/* <li><a href="index.html">Home</a></li>
                        <li><a href="aboutUs.html">About Us</a></li>
                        <li><a href="coffee.html">My Coffee</a></li>
                        <li><a href="contactUs.html">Contact us</a></li> */}
                        <Link to="/">Home</Link>
                        <Link to="/AboutUs">About</Link>
                        <Link to="/coffee">Coffee</Link>
                        <Link to="/contactUs">Contact Us</Link>

                    </ul>
                </nav>
            </footer>
  );
}

export default Footer;