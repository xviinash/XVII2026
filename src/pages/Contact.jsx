import { useContext } from "react";
import ContactComponant from "../components/ContactComponant";
import IconComponant from "../components/IconComponant";
import DataContext from "../context/dataContext";
import Titre from "../components/TitreComponant";

const Contact = () => {
  const { contact } = useContext(DataContext);
  return (
    <section id="contact">
      <Titre titre={"Contact me"} idDiv={"contact_container"} />
      <div id="contact_container">
        {contact.map((c, index) => (
          <ContactComponant contact={c} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
