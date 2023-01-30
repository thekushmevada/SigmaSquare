import React from "react";
import Sigma_Logo_2 from "../../img/Sigma_Logo_2.png";
import Image from "next/image";
import { MdDescription } from "react-icons/md";

const Card = () => {
  const partnersData = [
    {
      name: "Vatsal Mavani",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil.",
    },
    {
      name: "Kush Mevada",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil.",
    },
    {
      name: "Maitri Parmar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil.",
    },
    {
      name: "Dishant Korat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil.",
    },
  ];

  return (
    <div className="w-full bg-[#79c0bc] min-h-screen max-h-auto">
      <div className="max-w-7xl m-auto px-6">
        <h1 className="text-6xl font-sans text-[#6F6657] py-7 font-semibold">
          Partners
        </h1>
        <div className="grid grid-cols-2 gap-4 py-7 place-items-center">
          {partnersData.map((data) => {
            return (
              <div className="flex flex-col items-center max-w-md rounded-3xl overflow-hidden shadow-md px-6 bg-white">
                <Image
                  src={Sigma_Logo_2}
                  alt="Partners"
                  style={{ height: "auto", width: "180px" }}
                />
                <div className="px-6 py-4 flex flex-col items-center">
                  <div className="font-bold text-xl mb-2">{data.name}</div>
                  <p className="text-gray-700 text-base">{data.description}</p>
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
