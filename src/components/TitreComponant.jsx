import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const Titre = ({ titre, idDiv, display = "flex" }) => {
  const [fleche, setFleche] = useState(<ChevronDown />);
  const [isHovered, setIsHovered] = useState(false);


  function changeFleche() {
    setFleche(fleche.type === ChevronDown ? shadow() : show())
  }

  function show() {
    document.querySelector(`#${idDiv}`).style = `display:${display};`;
    document.querySelector(`#${idDiv}`).parentElement.style = "height:auto;";
    return <ChevronDown />
  }

  function shadow() {
    document.querySelector(`#${idDiv}`).style = "display:none;";
    document.querySelector(`#${idDiv}`).parentElement.style = "height:3em;";
    return <ChevronRight />
  }

  return (
    <h2
      style={{
        textDecoration: isHovered ? "underline" : "none",
        cursor: "pointer"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={changeFleche}
    >
      {fleche} {titre}
    </h2>
  );
};

export default Titre;
