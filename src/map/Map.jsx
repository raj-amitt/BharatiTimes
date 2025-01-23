import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-container">
      <h2>Visit Us</h2>
      <div className="map">
        <iframe
          title="Bharati Vidyapeeth's Institute Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.903035494995!2d77.10189115820313!3d28.652613299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0330c8a81ab7%3A0x8d827bafc74f6475!2sBharati%20Vidyapeeth&#39;s%20Institute%20of%20Computer%20Applications%20and%20Management%20(BVICAM)!5e0!3m2!1sen!2sin!4v1615462498775!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="address">
        <p>
          Bharati Vidyapeeth's Institute of Computer Applications and
          Management (BVICAM)
        </p>
        <p>A-4, Paschim Vihar, Opp. Paschim Vihar (East) Metro Station</p>
        <p>Rohtak Road, New Delhi, Delhi 110063</p>
        <p>
          Tel.: +91-11-25275055 | Fax: +91-11-25255056 | Mobile:
          +91-9212022066
        </p>
      </div>
    </div>
  );
};

export default Map;
