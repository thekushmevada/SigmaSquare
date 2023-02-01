import React from "react";
import { RiPagesLine } from "react-icons/ri";
const MainPage = () => {
  return (
    <div className="w-full flex h-auto pb-24 pt-44 bg-[#fefcf9]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col bg-[#134F59] rounded-xl p-12 gap-4 w-1/3">
            <div className="flex justify-between">
              <div className="flex flex-col w-1/2 justify-center gap-2 border-r-2 border-white pr-6">
                <div className="text-6xl font-bold text-white text-center">
                  10
                </div>
                <div className="font-semibold text-[#CABA93] text-center">
                  Applied
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <div className="text-3xl font-bold text-white text-center">
                  5
                </div>
                <div className="font-semibold text-[#CABA93] text-center">
                  Pending
                </div>
              </div>
            </div>
            <div className="flex justify-between border-t-2 border-white">
              <div className="flex flex-col gap-0.5 w-1/2">
                <div className="pt-3 px-2 text-lg text-[#CABA93] font-semibold">
                  Skills
                </div>
                <div className="font-semibold text-xs text-white">- UI/UX</div>
                <div className="font-semibold text-xs text-white">
                  - Web-dev
                </div>
                <div className="font-semibold text-xs text-white">
                  - Full stack
                </div>
                <div className="font-semibold text-xs text-white">- Html</div>
              </div>
              <div className="flex items-center">
                <RiPagesLine size="75px" color="white" />
                <div className="text-[#CABA93] font-semibold">
                  Review Resume
                </div>
              </div>
            </div>
            <button className=" bg-[#6F6657] hover:bg-[#4E4A3F] text-white font-bold py-2 rounded-full w-full">
              Apply more
            </button>
          </div>
          <div className="border-2 border-black"></div>
          <div className="flex flex-col gap-3 w-1/3 bg-[#6F6657] px-8 rounded-xl py-5">
            <div className="text-4xl font-semibold text-[#CABA93] mb-3 underline">
              Aquire new skills
            </div>
            <div className="flex flex-col gap-2 text-lg text-white">
              <div>
                - Flutter{" "}
                <span className="text-[#CABA93] px-2">
                  (Android/Ios Application)
                </span>
              </div>
              <div>
                - NextJs{" "}
                <span className="text-[#CABA93] px-2">(Front-end Web-app)</span>
              </div>
              <div>
                - MongoDB{" "}
                <span className="text-[#CABA93] px-2">(Database)</span>
              </div>
              <div>
                - NestJs{" "}
                <span className="text-[#CABA93] px-2">(Back-end Web-app)</span>
              </div>
              <div>
                - Tailwind Css{" "}
                <span className="text-[#CABA93] px-2">(UI Framework)</span>
              </div>
              <div>
                - Python{" "}
                <span className="text-[#CABA93] px-2">
                  (Programming Language)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
