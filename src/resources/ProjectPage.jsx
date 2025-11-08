import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Behance } from "../resources/Behance";
import "../assets/styles/portfolio.css";

const ProjectPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(state?.project || null);
  const [loading, setLoading] = useState(!project);

useEffect(() => {
  // on recharge si pas de modules, même si project existe déjà
  if ((!project || !project.modules) && id) {
    const behance = new Behance();
    behance.getProjectById(id).done((data) => {
      console.log("Requête Behance:", data);
      setProject(data.project);
      setLoading(false);
    });
  }
}, [id]);
console.log("Project reçu depuis le state :", project);



  return (
    <div className="project-page">
      {/* bouton Back toujours présent */}
      <header className="project-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Back
        </button>
        <h2>{project?.name || "Chargement..."}</h2>
      </header>

      {loading && !project && <p style={{ opacity: 0.6 }}>Chargement du projet…</p>}

      {project && (
        <div className="project-content">
{project.modules?.map((mod, i) => {
  if (mod.type === "image") {
    const bestSrc =
      mod.sizes?.max_1920 ||
      mod.sizes?.max_1240 ||
      mod.src;
    return (
      <img
        key={i}
        src={bestSrc}
        alt={`module-${i}`}
        className="project-module-img"
        loading="lazy"
      />
    );
  }

  // 🔥 Gère les grilles Behance (responsive containers)
  else if (
    mod.type === "image_grid" ||
    mod.type === "media_collection" ||
    mod.type === "grid"
  ) {
    const images = mod.components || mod.elements || mod.images;
    if (!images || images.length === 0) return null;

    return (
      <div key={i} className="project-module-grid">
        {images.map((img, j) => {
          const bestSrc =
            img.sizes?.max_1920 ||
            img.sizes?.max_1240 ||
            img.src;
          return (
            <img
              key={j}
              src={bestSrc}
              alt={`grid-${i}-${j}`}
              className="project-grid-img"
              loading="lazy"
            />
          );
        })}
      </div>
    );
  }

  else if (mod.type === "text") {
    return (
      <div
        key={i}
        className="project-module-text"
        dangerouslySetInnerHTML={{ __html: mod.text }}
      />
    );
  }

  else if (mod.type === "embed") {
    return (
      <div
        key={i}
        className="project-module-embed"
        dangerouslySetInnerHTML={{ __html: mod.embed }}
      />
    );
  }

  return null;
})}




          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="view-on-behance"
          >
            View on Behance ↗
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
