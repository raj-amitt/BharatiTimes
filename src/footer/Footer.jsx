import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
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
