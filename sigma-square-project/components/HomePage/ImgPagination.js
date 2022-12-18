import Image from "next/image";
import React from "react";
// import { Carousel } from "react-responsive-carousel";
import img from "../../img/bg_img.png";
// import Sigma_Logo_2 from "../../img/Sigma_Logo_2.png";
import mainpage_img_1 from "../../img/mainpage_img_1.png";
import mainpage_img_2 from "../../img/mainpage_img_2.png";
import mainpage_img_3 from "../../img/mainpage_img_3.png";
import mainpage_img_4 from "../../img/mainpage_img_4.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
const ImgPagination = () => {
  const imgPagination = {
    items: [
      {
        src: mainpage_img_1,
        title: "Innovation",
        subtitle: "Starts here",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, debitis nihil? Neque id eius, quo labore sunt molestias perspiciatis dolor praesentium error rerum quidem eos, consequatur, fugit quas vitae aspernatur! ",
      },
      {
        src: mainpage_img_2,
        title: "Some thing",
        subtitle: "Starts here",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, debitis nihil? Neque id eius, quo labore sunt molestias perspiciatis dolor praesentium error rerum quidem eos, consequatur, fugit quas vitae aspernatur! ",
      },
      {
        src: mainpage_img_3,
        title: "Too Good",
        subtitle: "Starts here",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, debitis nihil? Neque id eius, quo labore sunt molestias perspiciatis dolor praesentium error rerum quidem eos, consequatur, fugit quas vitae aspernatur! ",
      },
      {
        src: mainpage_img_4,
        title: "Lets meet",
        subtitle: "on meet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, debitis nihil? Neque id eius, quo labore sunt molestias perspiciatis dolor praesentium error rerum quidem eos, consequatur, fugit quas vitae aspernatur! ",
      },
    ],
  };

  return (
    <div className="relative h-auto w-full">
      <Carousel>
        {imgPagination.items.map((data) => {
          return (
            <Carousel.Item>
              <Image
                src={data.src}
                alt="main image"
                style={{
                  height: "calc(100vh - 96px)",
                  width: "100%",
                  position: "absolute",
                }}
              />

              <div
                className="absolute opacity-40 bg-black w-3/4"
                style={{ height: "calc(100vh - 96px)" }}
              ></div>
              <div
                className="absolute opacity-40 bg-black w-full"
                style={{ height: "calc(100vh - 96px)" }}
              ></div>
              <div
                className="relative flex flex-col justify-center items-center text-white w-full md:w-1/2 px-4 pt-20"
                style={{ height: "calc(100vh - 96px)" }}
              >
                <div className="w-full md:w-2/3 sm:w-3/4">
                  <h1 className="text-6xl font-sans text-white font-semibold">
                    {data.title}
                  </h1>
                  <h2 className="text-4xl font-sans text-white font-semibold">
                    {data.subtitle}
                  </h2>
                  <p>{data.desc}</p>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImgPagination;
