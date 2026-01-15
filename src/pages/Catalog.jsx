import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/catalog.css";
import { translations, collections } from "../utils/translations";

const Catalog = ({ userLang }) => {
  const { collectionId } = useParams();
  const navigate = useNavigate();
  const t = translations[userLang];

  // Buscar la colección por ID
  const collection = collections.find((col) => col.id === collectionId);

  if (!collection) {
    return (
      <section className="catalog-section">
        <div className="error-message">
          <h2>{userLang === "es" ? "Colección no encontrada" : "Collection not found"}</h2>
          <button onClick={() => navigate("/")} className="back-btn">
            {t.catalog.backToCollections}
          </button>
        </div>
      </section>
    );
  }

  const collectionName = userLang === "es" ? collection.nameEs : collection.nameEn;
  const whatsappMessage = `${t.whatsapp.message} ${collectionName}`;
  const whatsappUrl = `https://wa.me/50247967384?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="catalog-section">
      <div className="catalog-header">
        <button onClick={() => navigate("/")} className="back-btn">
          ← {t.catalog.backToCollections}
        </button>
        <h1 className="catalog-title">{collectionName}</h1>
      </div>

      <div className="catalog-content">
        {/* Contenedor del PDF */}
        <div className="pdf-container">
          <iframe
            src={`${collection.pdfPath}#toolbar=1`}
            title={collectionName}
            className="pdf-iframe"
          />
        </div>

        {/* Botones de acción */}
        <div className="catalog-actions">
          <a
            href={collection.pdfPath}
            download
            className="download-btn"
          >
            📥 {t.catalog.download}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            💬 {t.catalog.interested}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;

