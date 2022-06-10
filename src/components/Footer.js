import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
            <footer>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="/AboutUs">About Us</a></li>
                        <li><a href="/Coffee">My Coffee</a></li>
                        <li><a href="/ContactUs">Contact us</a></li>
                    </ul>
                </nav>
            </footer>
  );
}

export default Footer;