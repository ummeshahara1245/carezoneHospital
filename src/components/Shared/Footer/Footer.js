import React from 'react';
import './Footer.css';

const Footer = () => {
    // ডায়নামিক বছর দেখানোর জন্য
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer className="footer-distributed">

                {/* Left Section */}
                <div className="footer-left">
                    <h3>CareZone<span>Hospital</span></h3>

                    <p className="footer-links">
                        <a href="/">Home</a>
                        ·
                        <a href="/blog">Blog</a>
                        ·
                        <a href="/about">About</a>
                        ·
                        <a href="/contact">Contact</a>
                    </p>

                    <p className="footer-company-name">CareZone Hospital &copy; {currentYear}</p>
                </div>

                {/* Center Section */}
                <div className="footer-center">
                    <div>
                        <i className="fas fa-map-marker-alt"></i>
                        <p><span>Mirpur-10, Dhaka</span> Bangladesh</p>
                    </div>

                    <div>
                        <i className="fas fa-phone-alt"></i>
                        <p>+88 02 9830706</p>
                    </div>

                    <div>
                        <i className="fas fa-envelope"></i>
                        <p><a href="mailto:carezonehelp@gmail.com">carezonehelp@gmail.com</a></p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the Hospital</span>
                        CareZone Hospital is one of the most trusted healthcare providers in Bangladesh, dedicated to delivering top-notch medical assistance and professional 24/7 support.
                    </p>

                    <div className="footer-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;