import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectPage from "./resources/ProjectPage"; // tu le créeras après
import "./assets/styles/portfolio.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  </BrowserRouter>
);
