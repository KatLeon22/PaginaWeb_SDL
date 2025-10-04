import React, { useState } from "react";
import logo from "../assets/logo1.png"; // Asegúrate de tener un logo en esta ruta
import "../styles/header.css"; // Asegúrate de tener los estilos necesarios
import { Link } from "react-router-dom";
import flagEs from "../assets/guatemala.png"; // Bandera de español
import flagEn from "../assets/usa.png"; // Bandera de inglés


const Header = ({ lang, setLang }) => {
  const [open, setOpen] = useState(false); // Estado para abrir/cerrar dropdown

  // Idiomas disponibles
  const languages = [
    { code: "es", label: "Español", flag: flagEs },
    { code: "en", label: "English", flag: flagEn },
  ];

  const currentLang = languages.find((l) => l.code === lang);

  const handleSelect = (code) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="container flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logotipo" className="h-12 w-auto" />
          <div className="company-text">
            <span className="company-name">S DE LEON</span>
            <span className="company-tagline"></span>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><Link to="/">{lang === "es" ? "Inicio" : "Home"}</Link></li>
            <li><Link to="/about">{lang === "es" ? "¿Quiénes Somos?" : "About Us"}</Link></li>
            <li><Link to="/services">{lang === "es" ? "Servicios" : "Services"}</Link></li>
            <li><Link to="/contact">{lang === "es" ? "Contacto" : "Contact"}</Link></li>
            <li><Link to="/location">{lang === "es" ? "Ubicación" : "Location"}</Link></li>
          </ul>

          {/* Selector de idioma */}
        {/* Selector de idioma */}
<div className="relative ml-6 flex items-center">
  <span className="mr-2 font-semibold text-white">
    {lang === "es" ? "Idioma:" : "Language:"}
  </span>

  <button
    onClick={() => setOpen(!open)}
    className="flex items-center space-x-2 border border-gray-500 rounded px-3 py-1 bg-gray-800 text-white hover:bg-gray-700"
  >
    <img src={currentLang.flag} alt={currentLang.label} className="h-5 w-5" />
    <span>{currentLang.label}</span>
    <span className="ml-1">&#9662;</span>
  </button>

  {open && (
    <div className="absolute right-0 mt-1 w-36 bg-gray-800 border border-gray-600 rounded shadow-lg z-50">
      {languages.map((l) => (
        <div
          key={l.code}
          onClick={() => handleSelect(l.code)}
          className="flex items-center px-3 py-2 hover:bg-gray-700 cursor-pointer text-white"
        >
          <img src={l.flag} alt={l.label} className="h-5 w-5 mr-2" />
          <span>{l.label}</span>
        </div>
      ))}
    </div>
  )}
</div>
      
        </nav>
      </div>
    </header>
  );
};

export default Header;