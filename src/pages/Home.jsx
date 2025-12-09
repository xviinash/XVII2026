import React, { useEffect, useState } from "react";
import { Behance } from "../resources/Behance"; 
// ⚠️ Vérifie tes chemins d'import ci-dessous selon où tu places ce fichier Home.jsx
import PortefolioComponent from "../components/PortefolioComponent";
import Banner from "../components/Banner.jsx";
import VideoWall from "../components/VideoWall.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const [projects, setProjects] = useState([]);
  
  const jobs = [
    "ART DIRECTOR", "BRAND DESIGNER", "3D GENERALIST", 
    "MOTION DESIGNER", "ILLUSTRATOR", "UI/UX DESIGNER",
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
      <VideoWall />
      <Banner items={jobs.map((job) => ({ text: job }))} />
      
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

      <Footer />
    </>
  );
};

export default Home;