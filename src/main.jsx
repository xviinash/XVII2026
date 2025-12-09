import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles/portfolio.css";

// Note : Le <link> pour les fonts doit être dans index.html, pas ici.
// Mais si tu utilises Adobe Fonts ou ton CSS local, tu n'as pas besoin de la ligne Google Fonts Inter ci-dessous.

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);