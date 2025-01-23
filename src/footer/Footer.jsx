import React from 'react';
import './Footer.css';
import footerImage from '../assets/footer.png'; // Ensure the path to the footer image is correct

const Footer = () => {
    return (
        <footer className="footer">
            {/* Image for Desktop */}
            <img src={footerImage} alt="Footer" className="footer-image" />

            {/* Text for Mobile/Tablet */}
            <div className="footer-text">
                <p className="footer-address">
                    A-4, Paschim Vihar, Opp. Paschim Vihar (East) Metro Station, Rohtak Road, New Delhi, Delhi 110063
                </p>
                <p className="footer-social">
                    Follow us on <span className="social-highlight">Social Media</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
