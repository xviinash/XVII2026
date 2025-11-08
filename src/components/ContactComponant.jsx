import React from "react";
import { ArrowDownRight } from "lucide-react";

const ContactComponant = ({ contact }) => {
  return (
    <div className="contact_componant">
      <ArrowDownRight />
      <a href={contact.lien} target="_blank">{contact.name}</a>
    </div>
  );
};

export default ContactComponant;
