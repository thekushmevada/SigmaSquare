import React from "react";
import Sigma_Logo_2 from "../../img/Sigma_Logo_2.png";
import Image from "next/image";
import { MdDescription } from "react-icons/md";
import vatsal from "../../img/vatsal.jpg";
import kush from "../../img/kush.jpg";
import maitri from "../../img/maitri.jpg";
import dishant from "../../img/dishant.jpg";
const Card = () => {
  const partnersData = [
    {
      name: "Vatsal Mavani",
      src: vatsal,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit Voluptatibus",
    },
    {
      name: "Kush Mevada",
      src: kush,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit Voluptatibus",
    },
    {
      name: "Maitri Parmar",
      src: maitri,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit Voluptatibus",
    },
    {
      name: "Dishant Korat",
      src: dishant,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit Voluptatibus",
    },
  ];

  return (
    <div className="w-full bg-[#79c0bc] min-h-screen max-h-auto">
      <div className="max-w-7xl m-auto px-6">
        <h1 className="text-6xl font-sans text-[#6F6657] py-7 font-semibold">
          Partners
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-7 place-items-center">
          {partnersData.map((data) => {
            return (
              <div className="flex flex-col items-center max-w-md rounded-3xl overflow-hidden shadow-md p-6 bg-[#134F59]">
                <Image
                  src={data.src}
                  alt="Partners"
                  style={{ height: "auto",maxHeight:"250px", maxWidth: "250px",borderRadius:"100%" }}
                />
                <div className="px-6 py-1 flex flex-col items-center">
                  <div className="font-bold text-xl mb-2 text-[#CABA93]">
                    {data.name}
                  </div>
                  <p className="text-white text-base">{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
