// Services.jsx
import React from "react";
import "../styles/services.css"; // crea este archivo para los estilos
import { FaTruck, FaBoxOpen, FaClock, FaTools } from "react-icons/fa";
// Importa tus imágenes aquí


const content = {
  es: {
    title: "Nuestros Servicios",
    services: [
      { icon: <FaTruck size={40} />, title: "Transporte Seguro", description: "Ofrecemos transporte confiable y seguro para todos tus envíos." },
      { icon: <FaBoxOpen size={40} />, title: "Entregas", description: "Recogemos y entregamos  de manera rápida y eficiente." },
      { icon: <FaClock size={40} />, title: "Envíos Puntuales", description: "Garantizamos entregas a tiempo, cumpliendo tus horarios." },
      { icon: <FaTools size={40} />, title: "Logística Personalizada", description: "Soluciones logísticas adaptadas a las necesidades de tu empresa." },
    ],
  },
  en: {
    title: "Our Services",
    services: [
      { icon: <FaTruck size={40} />, title: "Safe Transport", description: "We provide reliable and safe transport for all your shipments." },
      { icon: <FaBoxOpen size={40} />, title: "Deliveries", description: "We pick up and deliver  quickly and efficiently." },
      { icon: <FaClock size={40} />, title: "On-Time Delivery", description: "We guarantee timely deliveries, meeting your schedule." },
      { icon: <FaTools size={40} />, title: "Custom Logistics", description: "Logistics solutions tailored to your business needs." },
    ],
  },
};

const Services = ({ userLang }) => {
  const text = content[userLang];

  return (
    <section className="services-section">
      <h2>{text.title}</h2>
      <div className="services-cards">
        {text.services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

   



    </section>
  );
};

export default Services;
