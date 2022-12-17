import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import img from "../../img/bg_img.png";
import Sigma_Logo_2 from "../../img/Sigma_Logo_2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImgPagination = () => {
  return (
    <div className="relative h-auto w-full">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <Image
          src={img}
          alt="main image"
          style={{ height: "90vh", width: "100%" }}
        />

        <Image
          src={img}
          alt="main image"
          style={{ height: "90vh", width: "100%" }}
        />

        <Image
          src={img}
          alt="main image"
          style={{ height: "90vh", width: "100%" }}
        />
      </Carousel>
    </div>
  );
};

export default ImgPagination;
