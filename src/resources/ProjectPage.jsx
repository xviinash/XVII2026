import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Behance } from "../resources/Behance";
import "../assets/styles/portfolio.css";
// On importe ton fichier de données local
import projectsData from "../data/projects.json"; 

const ProjectPage = () => {
  const { state } = useLocation();
  const { id } = useParams(); // Ici, 'id' peut être "jooxter" ou "152245933"
  const navigate = useNavigate();
  
  const [project, setProject] = useState(state?.project || null);
  const [loading, setLoading] = useState(!project);
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    // 1. On cherche d'abord dans ton JSON quel projet correspond au slug (ou à l'ID) de l'URL
    const projectInfo = projectsData.find(p => 
      p.slug === id || p.id.toString() === id
    );

    // 2. Si on ne trouve aucune correspondance dans le JSON, on va vers la 404
    if (!projectInfo) {
      navigate("/404", { replace: true });
      return;
    }

    // 3. Si on a trouvé le projet mais qu'on n'a pas encore les modules (images/vidéos)
    if ((!project || !project.modules)) {
      setLoading(true);
      const behance = new Behance();
      
      // On utilise l'ID NUMÉRIQUE stocké dans le JSON pour appeler l'API
      behance.getProjectById(projectInfo.id).done((data) => {
        console.log("Requête Behance réussie pour l'ID:", projectInfo.id);
        setProject(data.project);
        setLoading(false);
      });
    }
  }, [id, project, navigate]); // On surveille le changement d'ID dans l'URL

  // === 🎨 LOGIQUE AMBIENT BACKGROUND (Inchangée) ===
  useEffect(() => {
    if (project) {
      let imageSource = project.covers?.original || project.covers?.['404'] || project.covers?.['202'];
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
      <div 
        className="ambient-background" 
        style={{ 
          backgroundImage: bgImage ? `url(${bgImage})` : 'none',
          opacity: bgImage ? 1 : 0 
        }} 
      />
      <div className="ambient-overlay" />

      <header className="project-header">
        <button className="header-btn back-btn-wrapper" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Back
        </button>
        
        <h2>{project?.name || "Chargement..."}</h2>

        {project?.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="header-btn behance-btn-wrapper">
            View on Behance <ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        )}
      </header>

      {loading && !project && (
        <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ opacity: 0.6 }}>Chargement du workflow…</p>
        </div>
      )}

      {project && (
        <div className="project-content">
          {project.modules?.map((mod, i) => {
            if (mod.type === "image") {
              const bestSrc = mod.sizes?.max_1920 || mod.sizes?.max_1240 || mod.src;
              return (
                <div key={i} className="project-module-img">
                    <img src={bestSrc} alt={`module-${i}`} loading="lazy" />
                </div>
              );
            }
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
            else if (mod.type === "text") {
              return (
                <div key={i} className="project-module-text" dangerouslySetInnerHTML={{ __html: mod.text }} />
              );
            }
            else if (mod.type === "embed") {
              return (
                <div key={i} className="project-module-embed" dangerouslySetInnerHTML={{ __html: mod.embed }} />
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectPage;