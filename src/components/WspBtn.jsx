// WhatsAppButton.js

import React from 'react';

const WspBtn= () => {
  const env=import.meta.env.VITE_NUMERO
  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/${env}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button type="button" className="button primary-btn" onClick={handleWhatsAppRedirect}>
      Contactar 
    </button>
  );
};

export default WspBtn;
