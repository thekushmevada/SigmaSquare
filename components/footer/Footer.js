import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sigma_Logo_2 from "../../img/Sigma_Logo_2.png";
import Join from "../joinPage/Join";
import Login from "../loginpage/Login";
import { useContext } from "react";
import { layoutStateContext } from "../../context/LayoutContext";
const Footer = () => {
  const {
    showLogin,
    handleCloseLogin,
    handleShowLogin,
    showJoin,
    handleCloseJoin,
    handleShowJoin,
  } = useContext(layoutStateContext);
  return (
    <>
      <div className="bg-[#134F59] py-3">
        <div className=" flex md:flex-row gap-3 md:gap-1 flex-col items-center justify-evenly min-h-96 mx-h-auto">
          <div className="w-full text-center flex flex-col items-center gap-1">
            <Image
              src={Sigma_Logo_2}
              style={{ height: "auto", width: "180px" }}
            />
            <h1 className="text-3xl font-sans text-[#CABA93]">Sigma Square</h1>
            <p className="text-[#FEFCF9]"> A smarter way to move forward</p>
            <button className="rounded-full bg-[#635D52] py-1">
              <span className="py-1 px-3 text-[#FEFCF9] border-r-2" onClick={handleShowLogin}>
                Log in
              </span>
              <Login
                showLogin={showLogin}
                handleCloseLogin={handleCloseLogin}
              />
              <span className="px-4 text-[#FEFCF9]" onClick={handleShowJoin}>Join</span>
              <Join showJoin={showJoin} handleCloseJoin={handleCloseJoin} />
            </button>
          </div>
          <div className="flex justify-between sm:justify-evenly w-full px-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-sans text-[#CABA93]">Site Map</h1>
              <div className="text-[#FEFCF9] space-y-2">
                <div>Home Page</div>
                <div>About us</div>
                <div>Partners</div>
                <div>Reviews</div>
                <div>Contact us</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-sans text-[#CABA93]">Legal</h1>
              <div className="text-[#FEFCF9] space-y-2">
                <div>Terms & conditions</div>
                <div>Privacy & policy statement</div>
                <div>Use guide</div>
                <div>Report </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0F3C43]">
        <div className="max-w-7xl m-auto px-6 py-3 font-sans font-normal text-lg sm:text-2xl text-[#9C9F84]">
          ©️ copyright 2022 - Sigma Square
        </div>
      </div>
    </>
  );
};

export default Footer;
