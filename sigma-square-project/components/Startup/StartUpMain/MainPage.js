import Link from "next/link";
import Image from "next/image";
import React from "react";
// import { RiPagesLine } from "react-icons/ri";
import Carousel from "react-bootstrap/Carousel";
import { FaPlus } from "react-icons/fa";
import mainpage_img_1 from "../../../img/mainpage_img_1.png";
import mainpage_img_2 from "../../../img/mainpage_img_2.png";
import mainpage_img_3 from "../../../img/mainpage_img_3.png";
import mainpage_img_4 from "../../../img/mainpage_img_4.png";
const MainPage = () => {
  const imgPagination = {
    items: [
      {
        src: mainpage_img_1,
      },
      {
        src: mainpage_img_2,
      },
      {
        src: mainpage_img_3,
      },
      {
        src: mainpage_img_4,
      },
    ],
  };
  return (
    <div className="w-full flex h-auto pb-24 pt-44 bg-[#fefcf9]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex justify-evenly w-full gap-8">
          <div className="w-3/4">
            <Carousel>
              <Carousel.Item>
                <Image
                  src={mainpage_img_1}
                  alt="main image"
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "12px",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={mainpage_img_2}
                  alt="main image"
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "12px",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={mainpage_img_3}
                  alt="main image"
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "12px",
                  }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="border-2 border-black mx-8"></div>
          <div className="flex flex-col bg-[#134F59] rounded-xl w-1/4">
            <div className="bg-[#0b2f35] w-full flex flex-col rounded-t-xl py-3">
              <div className="w-full flex justify-center">
                <FaPlus
                  size="120px"
                  color="white"
                  style={{
                    backgroundColor: "#79C0BC",
                    padding: "20px",
                    margin: "10px",
                    borderRadius: "9999px",
                  }}
                />
              </div>
              <div className="text-white font-semibold text-center text-xl">
                Hire now
              </div>
            </div>
            <div className="py-4 px-6 space-y-4">
              <button className=" bg-[#79C0BC] hover:bg-[#0b2f35] text-lg text-white font-semibold py-2 rounded-xl w-full">
                Setup profile
              </button>
              <button className=" bg-[#79C0BC] hover:bg-[#0b2f35] text-lg text-white font-semibold py-2 rounded-xl w-full">
                Application list
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
