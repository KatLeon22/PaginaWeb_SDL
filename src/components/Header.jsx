import React, { useState } from "react";
import logo from "../assets/logo1.png";
import "../styles/header.css";
import { Link } from "react-router-dom";
import flagEs from "../assets/guatemala.png";
import flagEn from "../assets/usa.png";
import { trackLanguageChange } from '../utils/analytics';

const Header = ({ lang, setLang }) => {
  const [open, setOpen] = useState(false); // Estado para abrir/cerrar dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para menú móvil

  // Idiomas disponibles
  const languages = [
    { code: "es", label: "Español", flag: flagEs },
    { code: "en", label: "English", flag: flagEn },
  ];

  const currentLang = languages.find((l) => l.code === lang);

  const handleSelect = (code) => {
    setLang(code);
    setOpen(false);
    trackLanguageChange(code);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Logotipo" className="logo" />
          <div className="company-text">
            <span className="company-name">S DE LEON</span>
            <span className="company-tagline"></span>
          </div>
        </div>

        {/* Botón hamburguesa para móvil */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Navegación Desktop */}
        <nav className="desktop-nav">
          <ul className="menu">
            <li><Link to="/">{lang === "es" ? "Inicio" : "Home"}</Link></li>
            <li><Link to="/about">{lang === "es" ? "¿Quiénes Somos?" : "About Us"}</Link></li>
            <li><Link to="/services">{lang === "es" ? "Servicios" : "Services"}</Link></li>
            <li><Link to="/contact">{lang === "es" ? "Contacto" : "Contact"}</Link></li>
            <li><Link to="/location">{lang === "es" ? "Ubicación" : "Location"}</Link></li>
          </ul>

          {/* Selector de idioma Desktop */}
          <div className="language-selector">
            <span className="language-label">
              {lang === "es" ? "Idioma:" : "Language:"}
            </span>
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="language-button"
              >
                <img src={currentLang.flag} alt={currentLang.label} className="flag-icon" />
                <span>{currentLang.label}</span>
                <span className="dropdown-arrow">&#9662;</span>
              </button>

              {open && (
                <div className="language-dropdown">
                  {languages.map((l) => (
                    <div
                      key={l.code}
                      onClick={() => handleSelect(l.code)}
                      className="language-option"
                    >
                      <img src={l.flag} alt={l.label} className="flag-icon" />
                      <span>{l.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Navegación Móvil */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-menu">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>{lang === "es" ? "Inicio" : "Home"}</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>{lang === "es" ? "¿Quiénes Somos?" : "About Us"}</Link></li>
            <li><Link to="/services" onClick={() => setMobileMenuOpen(false)}>{lang === "es" ? "Servicios" : "Services"}</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>{lang === "es" ? "Contacto" : "Contact"}</Link></li>
            <li><Link to="/location" onClick={() => setMobileMenuOpen(false)}>{lang === "es" ? "Ubicación" : "Location"}</Link></li>
          </ul>

          {/* Selector de idioma Móvil */}
          <div className="mobile-language-selector">
            <span className="language-label">
              {lang === "es" ? "Idioma:" : "Language:"}
            </span>
            <div className="language-options">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    handleSelect(l.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`language-option-mobile ${lang === l.code ? 'active' : ''}`}
                >
                  <img src={l.flag} alt={l.label} className="flag-icon" />
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;