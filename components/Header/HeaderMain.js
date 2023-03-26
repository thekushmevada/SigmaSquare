import React from "react";
import Nav from "./Nav";
import SubNav from "./SubNav";

const HeaderMain = () => {
  return (
    <div className="relative z-50">
      <Nav />
      <SubNav />
    </div>
  );
};

export default HeaderMain;
