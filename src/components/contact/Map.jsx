import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <>
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30015.79763663531!2d74.7885!3d19.88329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc702270bc0bb3%3A0x18abfd03d6cda191!2sJambargaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1659241491080!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
