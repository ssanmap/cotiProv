import React from "react";
import { createContext, useState } from "react";

const CotizadorContext = React.createContext();

export function CotizadorProvider({ children }) {
  const [datos, setDatos] = useState({ asd: "asd" });
  return (
    <CotizadorContext.Provider value={{ datos, setDatos }}>
      {children}
    </CotizadorContext.Provider>
  )
}

export default CotizadorContext;
