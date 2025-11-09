import React, { useEffect, useState } from "react";
import { Behance } from "./resources/Behance";
import PortefolioComponent from "./components/PortefolioComponent";
import "./assets/styles/portfolio.css";
import Banner from "./components/Banner.jsx"; // ✅ On importe la bannière
import VideoWall from "./components/VideoWall.jsx"; // <-- ton composant
import Footer from "./components/Footer.jsx"; // ✅ on importe le footer

const App = () => {
  const [projects, setProjects] = useState([]);
const jobs = [
  "ART DIRECTOR",
  "BRAND DESIGNER",
  "3D GENERALIST",
  "MOTION DESIGNER",
  "ILLUSTRATOR",
  "UI/UX DESIGNER",
];
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
    <>
      {/* VideoWall, projets, etc. */}
      <Banner items={jobs.map(job => ({ text: job }))} />
      {/* Autres sections */}
    </>


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
      {/* === SECTION FOOTER === */}
      <Footer /> {/* ✅ ajout du footer ici */}

    </>
  );
};

export default App;
