import React from "react";
import "../styles/location.css"; // Asegúrate de crear este CSS

const content = {
  es: {
    title: "Ubicación",
   
   
  },
  en: {
    title: "Location",
    
   
  },
};

const Location = ({ userLang }) => {
  const text = content[userLang];

  return (
    <section className="location-section">
      <h2>{text.title}</h2>
      <p className="location-intro">{text.intro}</p>

      <div className="location-container">
        {/* Mapa de Google */}
        <iframe
          title="Ubicación de S DE LEON"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d942.2950822429913!2d-90.41643473043513!3d14.6763229991137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQwJzM0LjgiTiA5MMKwMjQnNTYuOSJX!5e1!3m2!1ses!2sgt!4v1758349226869!5m2!1ses!2sgt" 
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Información resumida */}
        <div className="location-info">
          <p>{text.address}</p>
          <p>{text.phone}</p>
          <p>{text.email}</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
