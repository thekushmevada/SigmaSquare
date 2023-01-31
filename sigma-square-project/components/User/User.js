import React from "react";
import Navbar from "./UserNavbar/Navbar";
import Footer from "../footer/Footer";
import MainPage from "./UserMain/MainPage";
import SubNavbar from "./UserNavbar/SubNavbar";
const User = () => {
  return (
    <>
      <Navbar />
      <SubNavbar/>
      <MainPage />
      <Footer />
    </>
  );
};

export default User;
