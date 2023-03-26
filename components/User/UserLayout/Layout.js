import React from "react";
import Footer from "../../footer/Footer";
import Navbar from "../UserNavbar/Navbar";
import SubNavbar from "../UserNavbar/SubNavbar";
const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
