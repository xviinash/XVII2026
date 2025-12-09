import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Behance } from "../resources/Behance";
import "../assets/styles/portfolio.css";

const ProjectPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [project, setProject] = useState(state?.project || null);
  const [loading, setLoading] = useState(!project);
  // État pour stocker l'URL de l'image de fond
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    // Si on n'a pas le projet complet ou ses modules, on fetch
    if ((!project || !project.modules) && id) {
      const behance = new Behance();
      behance.getProjectById(id).done((data) => {
        console.log("Requête Behance:", data);
        setProject(data.project);
        setLoading(false);
      });
    }
  }, [id, project]);

  // === 🎨 LOGIQUE AMBIENT BACKGROUND ===
  useEffect(() => {
    if (project) {
      // 1. On cherche d'abord dans les "covers" officielles de Behance
      let imageSource = project.covers?.original || project.covers?.['404'] || project.covers?.['202'];

      // 2. Si pas de cover, on prend la première image des modules
      if (!imageSource && project.modules) {
        const firstImageModule = project.modules.find(mod => mod.type === "image");
        if (firstImageModule) {
           imageSource = firstImageModule.sizes?.max_1920 || firstImageModule.src;
        }
      }

      setBgImage(imageSource);
    }
  }, [project]);

  return (
    <div className="project-page">
      
      {/* === AMBIENT BACKGROUND LAYERS === */}
      <div 
        className="ambient-background" 
        style={{ 
          backgroundImage: bgImage ? `url(${bgImage})` : 'none',
          opacity: bgImage ? 1 : 0 
        }} 
      />
      <div className="ambient-overlay" />

{/* === HEADER (Back - Titre - Behance) === */}
      <header className="project-header">
        
        {/* 1. Bouton Back */}
        <button 
          className="header-btn back-btn-wrapper" // On applique la classe commune
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} /> Back
        </button>
        
        {/* 2. Titre du Projet */}
        <h2>{project?.name || "Chargement..."}</h2>

        {/* 3. Bouton Behance */}
{project?.url && (
  <a 
    href={project.url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="header-btn behance-btn-wrapper"
  >
    {/* On remplace "View on Behance ↗" par ceci : */}
    View on Behance <ArrowUpRight size={18} strokeWidth={1.5} />
  </a>
)}
      </header>

      {/* Message de chargement si pas encore de projet */}
      {loading && !project && <p style={{ opacity: 0.6, textAlign: 'center' }}>Chargement du projet…</p>}

      {/* Contenu du projet */}
      {project && (
        <div className="project-content">
          {project.modules?.map((mod, i) => {
            
            // --- MODULE IMAGE ---
            if (mod.type === "image") {
              const bestSrc = mod.sizes?.max_1920 || mod.sizes?.max_1240 || mod.src;
              return (
                <div key={i} className="project-module-img">
                    <img src={bestSrc} alt={`module-${i}`} loading="lazy" />
                </div>
              );
            }

            // --- MODULE GRID ---
            else if (mod.type === "image_grid" || mod.type === "media_collection" || mod.type === "grid") {
              const images = mod.components || mod.elements || mod.images;
              if (!images || images.length === 0) return null;

              return (
                <div key={i} className="project-module-grid">
                  {images.map((img, j) => {
                    const bestSrc = img.sizes?.max_1920 || img.sizes?.max_1240 || img.src;
                    return (
                        <div key={j} className="project-grid-item-wrapper">
                             <img src={bestSrc} alt={`grid-${i}-${j}`} className="project-grid-img" loading="lazy" />
                        </div>
                    );
                  })}
                </div>
              );
            }

            // --- MODULE TEXTE ---
            else if (mod.type === "text") {
              return (
                <div key={i} className="project-module-text" dangerouslySetInnerHTML={{ __html: mod.text }} />
              );
            }

            // --- MODULE EMBED (Vidéo, etc.) ---
            else if (mod.type === "embed") {
              return (
                <div key={i} className="project-module-embed" dangerouslySetInnerHTML={{ __html: mod.embed }} />
              );
            }

            return null;
          })}
          
          {/* L'ancien bouton Behance qui était ici a été supprimé car déplacé dans le header */}
        </div>
      )}
    </div>
  );
};

export default ProjectPage;