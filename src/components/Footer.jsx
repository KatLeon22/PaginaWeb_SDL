// Footer.jsx
import React from "react";
import "../styles/footer.css"; // Estilos específicos del footer
import { Link } from "react-router-dom";

const content = {
  es: {
    linksTitle: "Enlaces",
    contactTitle: "Contacto",
    rights: "Todos los derechos reservados.",
    usa: "Estados Unidos",
    guate: "Guatemala"
  },
  en: {
    linksTitle: "Links",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    usa: "United States",
    guate: "Guatemala"
  }
};

const Footer = ({ userLang }) => {
  const text = content[userLang];

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo - izquierda */}
        <div className="footer-logo">
          <img src={require("../assets/logo1.png")} alt="S DE LEON Logo" className="logo" />
          <span className="logo-text"></span>
        </div>

        {/* Contacto - centro */}
        <div className="footer-contact">
          <h4>{text.contactTitle}</h4>
          <div className="contact-item">
            <strong>{text.guate}:</strong>
              <p>Tel: <a href="tel:+50247967384">+502 4796-7384</a></p>
            <p>Email: <a href="mailto:sdeleon.gt@globalsdl.com">sdeleon.gt@globalsdl.com</a></p>
          </div>
         
        </div>

        {/* Enlaces rápidos - derecha */}
        <div className="footer-links">
         
          <ul>
            
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} S DE LEÓN. {text.rights}
      </div>
    </footer>
  );
};

export default Footer;