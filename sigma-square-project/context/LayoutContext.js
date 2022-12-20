import { createContext, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const layoutStateContext = createContext();

const LayoutContext = ({ children }) => {
  return <layoutStateContext.Provider>{children}</layoutStateContext.Provider>;
};

export default LayoutContext;
