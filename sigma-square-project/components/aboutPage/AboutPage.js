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
        <div className="flex justify-center items-center py-16 gap-10">
          <div className="w-1/2">
            <Image
              src={about}
              style={{ width: "100%", height: "auto" }}
              alt="about"
            />
          </div>
          <div className="flex flex-col gap-8 text-white w-1/2">
            <h1 className="text-4xl font-sans text-[#CABA93]">Our Goal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              reiciendis recusandae quam, odit nesciunt consequuntur cumque
              fugit eligendi culpa quae provident officiis cupiditate fugiat
              soluta earum illum? Odio soluta animi tempora a saepe ab illo,
              illum nostrum sunt, sequi cupiditate? Voluptatibus sequi maiores
              dicta porro. Quasi, minus. Ipsum, atque repellat?
            </p>
            <h1 className="text-4xl font-sans text-[#CABA93]">Optimism</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              reiciendis recusandae quam, odit nesciunt consequuntur cumque
              fugit eligendi culpa quae provident officiis cupiditate fugiat
              soluta earum illum? Odio soluta animi tempora a saepe ab illo,
              illum nostrum sunt, sequi cupiditate? Voluptatibus sequi maiores
              dicta porro. Quasi, minus. Ipsum, atque repellat?
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
