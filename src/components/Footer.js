import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <div className="footer-content">
                    <div className='image_footer'>
                        <img src={ Logo } alt="Little Lemon logo" />
                    </div>
                    <div className="links">
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>Menu</a></li>
                            <li><a href='/reservations'>Reservations</a></li>
                            <li><a href='/'>Order Online</a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>715 Church St</li>
                            <li>Tel: (669)-238-3749</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
                    <div className="locations">
                        <h5>SOCIAL MEDIA</h5>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <hr></hr>
                <p>© Little Lemon Ltd 2023. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer