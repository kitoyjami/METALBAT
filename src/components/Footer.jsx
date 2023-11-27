import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer= () => {
    return (
        <footer className="footer-container">
        <div className="footer-logo">
          <img src={"https://res.cloudinary.com/dtkojle4f/image/upload/v1701032126/LOGO_vmy0wi.png"} alt="Logo de la empresa" />
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>Descubre más sobre nuestra empresa y nuestros valores.</p>
          </div>
          <div className="footer-section">
            <h4>Privacy Policy</h4>
            <p>Consulta nuestra política de privacidad y cómo protegemos tus datos.</p>
          </div>
          <div className="footer-section">
            <h4>Returns</h4>
            <p>Información sobre políticas de devolución y reembolsos.</p>
          </div>
        </div>
        <div className="footer-social">
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-icons">
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </footer>
        
    )
}

export default Footer