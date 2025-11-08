import data from "../resources/data.json";
import { createContext } from "react";

const DataContext = createContext({
  contact: data.contact,
  apropos: {
    information: data.informations,
    parcours: data.parcours,
    logiciel: data.logiciel
  },
  presentation: data.presentation
});

export default DataContext;
