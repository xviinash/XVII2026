import React from "react";

const IconComponant = ({ icon }) => {
  return (
    <a href={icon.lien} target="_blank">
      <img src={icon.icon} alt={icon.name} />
    </a>
  );
};

export default IconComponant;
