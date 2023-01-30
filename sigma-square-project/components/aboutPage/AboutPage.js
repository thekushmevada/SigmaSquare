import Image from "next/image";
import React from "react";
import about from "../../img/about_img.png";
const AboutPage = () => {
  return (
    <div className="w-full flex items-center bg-[#134F59] min-h-screen max-h-auto">
      <div className="max-w-7xl m-auto px-6 ">
        <h1 className="text-6xl font-sans text-white pt-7 font-semibold">
          About us ...
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center py-16 gap-5 md:gap-10">
          <div className="w-full md:w-1/2 max-w-md">
            <Image
              src={about}
              style={{ width: "100%", height: "auto" }}
              alt="about"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-8 text-white w-full md:w-1/2">
            <h1 className="text-4xl font-sans text-[#CABA93]">Our Mission</h1>
            <p>
            Our goal is to provide the jobs to those who are really deserving , primarily used for professional networking and career development , allow job seekers to post their CVs.
            </p>
            <h1 className="text-4xl font-sans text-[#CABA93]">Our Vision</h1>
            <p>To be the most reliable hiring company that provide and enhance the employment rate
            </p>
            <button className="bg-[#6F6657] w-56 h-14 rounded-2xl">
              <span className="font-sans font-medium text-xl text-[#FEFCF9]">
                Know More+
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
