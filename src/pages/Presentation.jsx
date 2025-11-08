import { useContext } from "react";
import DataContext from "../context/dataContext";
import IconComponant from "../components/IconComponant";
import { ArrowDownToLine, ArrowDownRight } from 'lucide-react';
import Tete from "../components/TeteComponant";

const Presentation = () => {
  const { presentation } = useContext(DataContext);

  return (
    <section id="presentation_section">
      <div id="phrase_general">
        <div>
          Hello, <br />
          I'm{" "}
          <span>
            {presentation.prenom} {presentation.nom}
          </span> <br />
          aka <span>xviinash</span>
        </div>
        <p id="activite_presentation">{presentation.activite}</p>
      </div>

      <div id="background_tete" className="position_tete"></div>
      <div id="reseaux_container">
        {presentation.resaux.map((e, index) => (
          <IconComponant icon={e} key={index} />
        ))}
      </div>
      <div id="lien_pdf">
        <a target="_blank" href="/assets/pdf/portfolio_xviinash_FR.pdf"><ArrowDownToLine /> Portfolio [FR] (PDF)</a>
        <a target="_blank" href="/assets/pdf/cv_xviinash_EN.pdf"><ArrowDownToLine /> Curriculum vitæ (PDF)</a>
      </div>
      <div id="lien_youtube">
        <a href="https://youtu.be/gqHbLykAh5c?si=7wofxV4uo4YJMp2U" target="_blank"><ArrowDownRight /> Check my latest project on YouTube </a>
      </div>

    </section>
  );
};

export default Presentation;

/* <img src={presentation.photo} alt={presentation.prenom} />*/
