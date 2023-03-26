import React from "react";
import Footer from "../../footer/Footer";
import Navbar from "../StartupNavbar/Navbar";
import SubNavbar from "../../../components/Startup/StartupNavbar/SubNavbar";
const Layout = ({ children }) => {
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
