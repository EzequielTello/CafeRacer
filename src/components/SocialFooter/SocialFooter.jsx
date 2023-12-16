import React from "react";

export const SocialFooter = () => {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/public/imagenes/logoFacebook.jpg" alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/public/imagenes/logoInstagram.jpg" alt="Instagram" />
        </a>
        <a
          href="https://www.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="public/imagenes/logoWhatsapp.jpg" alt="WhatsApp" />
        </a>
      </div>
      <div className="logo">
        <img
          src="/public/imagenes/logocaferacer.png"
          alt="Logo de CafeRacer2023"
        />
        CafeRacer2023
      </div>
      <div className="derechos">Todos los derechos reservados</div>
    </footer>
  );
};
