import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/portfolio.css"; // Assure-toi que le chemin vers ton CSS est bon

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Nothing to see here.</p>
        
        {/* Bouton retour vers l'accueil */}
        <Link to="/" className="not-found-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;