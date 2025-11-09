import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectPage from "./resources/ProjectPage"; // tu le créeras après
import "./assets/styles/portfolio.css";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
/>

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  </BrowserRouter>
);
