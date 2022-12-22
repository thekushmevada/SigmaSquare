import Link from "next/link";
import Login from "../loginpage/Login";
import Join from "../joinPage/Join";
import { useContext } from "react";
import { layoutStateContext } from "../../context/LayoutContext";
const Nav = () => {
  const {
    showLogin,
    handleCloseLogin,
    handleShowLogin,
    showJoin,
    handleCloseJoin,
    handleShowJoin,
  } = useContext(layoutStateContext);
  return (
    <nav className="bg-[#4E4A3F]">
      <div className="container mx-auto px-4 lg:px-24 md:px-12 sm:w-6 flex items-center justify-between font-sans h-24 ">
        <div className="text-[#CABA93] font-bold text-4xl">Sigma Square</div>
        <div className="flex gap-2">
          <button
            className={`${
              showLogin ? "hidden" : "block"
            } bg-[#6F6657] hover:bg-[#4E4A3F] text-[#BBB093] font-bold py-2 rounded-full w-full md:w-40 sm:w-20 px-3 sm:px-2`}
            onClick={handleShowLogin}
          >
            Login
          </button>
          <Login showLogin={showLogin} handleCloseLogin={handleCloseLogin} />

          <button
            className={`${
              showJoin ? "hidden" : "block"
            } bg-[#6F6657] hover:bg-[#4E4A3F] text-[#BBB093] font-bold py-2 rounded-full w-full md:w-40 sm:w-20 px-3 sm:px-2`}
            onClick={handleShowJoin}
          >
            Join
          </button>
          <Join showJoin={showJoin} handleCloseJoin={handleCloseJoin} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
