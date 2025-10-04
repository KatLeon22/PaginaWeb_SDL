import React, { useState } from "react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-2">
      {/* Botón Guatemala */}
      <a
        href="https://wa.me/50247967384"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-center"
      >
        🇬🇹 WhatsApp GT
      </a>

     
    </div>
  );
};

export default WhatsAppButton;
