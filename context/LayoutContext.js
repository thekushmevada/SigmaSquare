import { createContext, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export const layoutStateContext = createContext();

const LayoutContext = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const [showJoin, setShowJoin] = useState(false);
  const handleCloseJoin = () => setShowJoin(false);
  const handleShowJoin = () => setShowJoin(true);
  return (
    <layoutStateContext.Provider
      value={{
        showLogin,
        setShowLogin,
        handleCloseLogin,
        handleShowLogin,
        showJoin,
        setShowJoin,
        handleCloseJoin,
        handleShowJoin,
      }}
    >
      {children}
    </layoutStateContext.Provider>
  );
};

export default LayoutContext;
