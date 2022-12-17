import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import img from "../../img/bg_img.png";
import Sigma_Logo_2 from "../../img/Sigma_Logo_2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const SubNav = () => {
  return (
    <nav className="flex justify-center">
      <div className="absolute container mx-auto px-4 xl:px-80 2xl:px-96 lg:px-48 md:px-12 flex items-center justify-evenly pt-16">
        <Image src={Sigma_Logo_2} style={{ width: "100px" }} />
        <div className="flex justify-between rounded-full bg-[#6F6657] px-3">
          <div className=" py-2 px-4">Home</div>
          <div className="bg-[#61594D] py-2 px-4">About</div>
          <div className=" py-2 px-4">Partners</div>
          <div className="bg-[#61594D] py-2 px-4">Contact</div>
          <div className=" py-2 px-4">Reviews</div>
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
