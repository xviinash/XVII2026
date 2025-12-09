import React, { useState } from "react"; // Plus besoin de useEffect pour ça

// 1. IMPORT DU FICHIER JSON (Décommente cette ligne si elle l'était)
import projectsData from "../data/projects.json"; 

import PortefolioComponent from "../components/PortefolioComponent";
import Banner from "../components/Banner.jsx";
import VideoWall from "../components/VideoWall.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  // 2. UTILISATION DES DONNÉES JSON
  // On initialise le state directement avec les données importées
  const [projects] = useState(projectsData);

  const jobs = [
    "ART DIRECTOR", "BRAND DESIGNER", "3D GENERALIST", 
    "MOTION DESIGNER", "ILLUSTRATOR", "UI/UX DESIGNER",
  ];

  return (
    <>
      <VideoWall />
      <Banner items={jobs.map((job) => ({ text: job }))} />
      
      <section className="projects">
        <div className="grid">
          {projects.length > 0 ? (
            projects.map((project) => (
              <PortefolioComponent key={project.id} project={project} />
            ))
          ) : (
            // Ce message ne devrait plus apparaitre si ton JSON est rempli
            <p style={{ textAlign: "center", opacity: 0.6 }}>
              Aucun projet trouvé.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;