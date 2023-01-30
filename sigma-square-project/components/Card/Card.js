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
        "Vatsal Mavani is our Team Leader and very important pillar of our whole project, who managed whole Frontend part. A great Team Leader who knows how manage things, how to divide work and great at all the Frontend work.",
    },
    {
      name: "Kush Mevada",
      src: kush,
      description:
        "Kush Mevada is also very important pillar of our whole project, as he managed the whole Backend part of the project also a very great communicator has an incredible ability to manage things under pressure.",
    },
    {
      name: "Maitri Parmar",
      src: maitri,
      description:
        "Maitri Parmar is the 3rd member of our team, who managed to do all the documentation and communication work. All content was done by her, her thinking & writing skill is just amazing.",
    },
    {
      name: "Dishant Korat",
      src: dishant,
      description:
        "Dishant Korat is the 4th team member of our project, who has an excellent knowledge about all the design work, he manages to do all the designing part of our project- a great UI designer.",
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
