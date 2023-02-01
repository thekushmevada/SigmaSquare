import React from "react";
import Navbar from "./UserNavbar/Navbar";
import Footer from "../footer/Footer";
import MainPage from "./UserMain/MainPage";
import SubNavbar from "./UserNavbar/SubNavbar";
import Layout from "./UserLayout/Layout";
const User = () => {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
};

export default User;
