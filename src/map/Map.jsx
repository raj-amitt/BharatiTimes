import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-container">
      <h2>Visit Us</h2>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d77.1106681!3d28.6755037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038b9232e7cd%3A0x34ebc68df4428491!2sBharati%20Vidyapeeth's%20Institute%20of%20Computer%20Applications%20and%20Management%20(BVICAM)!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
          style={{ border: 0, width: "100%", height: "100%" }} // Updated styles
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="address">
        <p>Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM)</p>
        <p>Address: A-4, Paschim Vihar, New Delhi, Delhi 110063</p>
      </div>
    </div>
  );
};

export default Map;
