import { useContext } from "react";
import ParagrapheComponant from "../components/ParagrapheComponant";
import DataContext from "../context/dataContext";
import Titre from "../components/TitreComponant";

const Apropos = () => {
  const { apropos } = useContext(DataContext);

  return (
    <section>
      <Titre titre={"About me"} idDiv={"apropos_container"} />
      <div id="apropos_container">
        {apropos.information.map((e, index) => (
          <ParagrapheComponant contain={e} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Apropos;
