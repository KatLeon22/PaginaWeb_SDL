//quienes somos
import React from "react";
import "../styles/aboutUs.css"; // Asegúrate de crear este archivo CSS
import Img1 from "../assets/F13.jpeg";
import Img2 from "../assets/F6 .jpeg";

const content = {
  es: {
    title: "¿Quiénes Somos?",
    intro:
      "S DE LEON es una empresa especializada en transporte y entregas confiables. Nos enfocamos en brindar seguridad, rapidez y profesionalismo en cada servicio.",
    missionTitle: "Misión",
    mission:
      "Ofrecer transporte y entregas confiables, rápidas y adaptadas a cada cliente con tecnología y excelencia.",
    visionTitle: "Visión",
    vision:
      "Ser reconocidos en Guatemala como líderes en logística, destacando por innovación y compromiso con la satisfacción del cliente.",
    valuesTitle: "Valores",
    values: ["Puntualidad", "Confianza", "Innovación", "Servicio al cliente"],
  },
  en: {
    title: "About Us",
    intro:
      "S DE LEON is a company specialized in reliable transportation and delivery services. We focus on safety, speed, and professionalism in every service.",
    missionTitle: "Mission",
    mission:
      "Provide reliable, fast, and tailored transportation and delivery services with technology and excellence.",
    visionTitle: "Vision",
    vision:
      "Be recognized in Guatemala as a logistics leader, standing out for innovation and customer commitment.",
    valuesTitle: "Values",
    values: ["Punctuality", "Trust", "Innovation", "Customer Service"],
  },
};

const AboutUs = ({ userLang }) => {
  const text = content[userLang];

  return (
    <section className="aboutus-section">
      <div className="aboutus-container">
        <h2>{text.title}</h2>
        <p className="aboutus-intro">{text.intro}</p>

        <div className="aboutus-cards">
          <div className="card">
            <h3>{text.missionTitle}</h3>
            <p className="aboutus-text">{text.mission}</p>
          </div>
          <div className="card">
            <h3>{text.visionTitle}</h3>
            <p className="aboutus-text">{text.vision}</p>
          </div>
          <div className="card">
            <h3>{text.valuesTitle}</h3>
            <div className="values-container">
              {text.values.map((value, index) => (
                <div key={index} className="value-item">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


         {/* Sección de fotos */}
            <h3 className="services-photos-title">{text.photosTitle}</h3>
            <div className="services-photos">
              <img src={Img1} alt="Servicio 1" className="service-photo" />
              <img src={Img2} alt="Servicio 2" className="service-photo" />
            </div>
      
    </section>
  );
};

export default AboutUs;