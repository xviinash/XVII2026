import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// === IMPORTS DES PAGES ===
// Vérifie bien que tes fichiers sont à ces endroits !
import Home from "./pages/Home";           // On va créer ce fichier juste après
import ProjectPage from "./resources/ProjectPage"; // Ton chemin actuel selon ton ancien main.jsx
import NotFound from "./pages/NotFound";   // La page 404 qu'on a créée

const App = () => {
  const location = useLocation();

  // Petite astuce UX : Quand on change de page, on remonte tout en haut
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
// Dans App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  {/* On garde :id, mais cette variable pourra contenir "jooxter" ou "152245933" */}
  <Route path="/project/:id" element={<ProjectPage />} />
  <Route path="*" element={<NotFound />} />
</Routes>
  );
};

export default App;