import React from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";

const PortefolioComponent = ({ project }) => {
  return (
    <Link
      to={`/project/${project.id}`}
      state={{ project }}
      className="grid-item"
    >
<img
  src={
    project.covers["808"] ||
    project.covers["808_webp"] ||
    project.covers["404_webp"] ||
    project.covers["404"]
  }
  alt={project.slug}
/>
      <div className="project_footer">
        <div className="arrow_project">
          <ArrowDownRight /> View project
        </div>
        <h4>{project.name}</h4>
        <div className="fields_container">
          {project.fields.map((e, index) => (
            <div key={index} className="fields">
              {e}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PortefolioComponent;
