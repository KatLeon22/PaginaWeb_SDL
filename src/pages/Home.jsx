import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import "../styles/home.css";
import { FaTruck, FaShieldAlt, FaThumbsUp } from "react-icons/fa"; // Eliminamos FaClock

import F1 from "../assets/F12.jpeg";
import F2 from "../assets/F2.jpg";
import F3 from "../assets/F8.jpg";

const slides = [F1, F2, F3];

const icons = [
  <FaTruck size={40} />,
  <FaShieldAlt size={40} />,
  <FaThumbsUp size={40} />, // Eliminamos el icono de seguimiento
];

const content = {
  es: {
    welcomeTitle: "Bienvenidos a S DE LEON",
    welcomeText:
      "S DE LEON se especializa en transporte y entregas confiables, adaptadas a las necesidades de cada cliente. Seguridad, rapidez y profesionalismo en cada servicio.",
    welcomeBtn: "Contáctanos",
    whyTitle: "¿Por qué elegirnos?",
    whyItems: [
      "Puntualidad y confiabilidad en cada entrega",
      "Equipo profesional y experimentado",
      "Atención personalizada a cada cliente", // Eliminado "Tecnología y seguimiento"
    ],
  },
  en: {
    welcomeTitle: "Welcome to S DE LEON",
    welcomeText:
      "S DE LEON specializes in reliable transportation and deliveries tailored to each client's needs. Safety, speed, and professionalism in every service.",
    welcomeBtn: "Contact Us",
    whyTitle: "Why Choose Us?",
    whyItems: [
      "Punctuality and reliability in every delivery",
      "Professional and experienced team",
      "Personalized attention for every client", // Eliminado "Technology and real-time tracking"
    ],
  },
};

const Home = ({ userLang }) => {
  const [current, setCurrent] = useState(0);
  const text = content[userLang];
  const navigate = useNavigate(); // Hook para navegación

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-section">
      {/* Bienvenida */}
      <div className="welcome-modern">
        <h1>{text.welcomeTitle}</h1>
        <p>{text.welcomeText}</p>
        <button
          className="btn-modern"
          onClick={() => navigate("/contact")} // Redirecciona a la ruta de Contact
        >
          {text.welcomeBtn}
        </button>
      </div>

      {/* Carrusel */}
      <div className="carousel-container">
        <img
          src={slides[current]}
          alt={`Slide ${current + 1}`}
          className="carousel-image"
        />
        <button
          className="carousel-btn left"
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
        >
          &#10094;
        </button>
        <button
          className="carousel-btn right"
          onClick={() => setCurrent((current + 1) % slides.length)}
        >
          &#10095;
        </button>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${current === i ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>
      </div>

      {/* Por qué elegirnos */}
      <div className="why-choose-us">
        <h2>{text.whyTitle}</h2>
        <div className="why-cards">
          {text.whyItems.map((itemText, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{icons[index]}</div>
              <p>{itemText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
