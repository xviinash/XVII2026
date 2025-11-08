import React, { useEffect, useState } from "react";
import { Behance } from "./resources/Behance";
import PortefolioComponent from "./components/PortefolioComponent";
import "./assets/styles/portfolio.css";
import VideoWall from "./components/VideoWall.jsx"; // <-- ton composant

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const behance = new Behance();
    behance.getProjectsByUser().done((data) => {
      if (data?.projects?.length) {
        setProjects(data.projects);
      }
    });
  }, []);

  return (
    <>
      {/* === SECTION SHOWREEL === */}
      <VideoWall /> {/* ✅ on appelle ton composant avec le texte intégré */}

      {/* === SECTION PROJETS BEHANCE === */}
{/* === SECTION BANNIÈRE === */}

<section className="banner">
  <div className="banner-track">
    <p>
      Brand Designer • 3D Generalist • Motion Designer • Illustrator • UI Designer •
      Brand Designer • 3D Generalist • Motion Designer • Illustrator • UI Designer •
    </p>
  </div>
</section>


{/* === SECTION PROJETS BEHANCE === */}
<section className="projects">
  <div className="grid">
    {projects.length > 0 ? (
      projects.map((project) => (
        <PortefolioComponent key={project.id} project={project} />
      ))
    ) : (
      <p style={{ textAlign: "center", opacity: 0.6 }}>
        Chargement des projets...
      </p>
    )}
  </div>
</section>

    </>
  );
};

export default App;
