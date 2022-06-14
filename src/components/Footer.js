import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {

  return (
            <footer>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutUs">About Us</Link></li>
                        <li><Link to="/coffee">My Coffee</Link></li>
                        <li><Link to="/contactUs">Contact us</Link></li>
                        {/* <Link to="/">Home</Link>
                        <Link to="/AboutUs">About</Link>
                        <Link to="/coffee">Coffee</Link>
                        <Link to="/contactUs">Contact Us</Link> */}

                    </ul>
                </nav>
            </footer>
  );
}

export default Footer;