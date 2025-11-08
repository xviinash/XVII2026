import { useContext } from "react";
import IconComponant from "../components/IconComponant";
import DataContext from "../context/dataContext";
import Titre from "../components/TitreComponant";

const Logiciel = () => {
  const { apropos } = useContext(DataContext);
  return (
      <section id="software">
        <Titre titre={"Software"} idDiv={"logiciel_container"} display="grid" />
        <div id="logiciel_container">
          {apropos.logiciel.map((e, index) => (
            <IconComponant icon={e} key={index} />
          ))}
        </div>
      </section>
  );
};

export default Logiciel;
