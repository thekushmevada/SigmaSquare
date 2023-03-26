import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import { IoIosChatboxes } from "react-icons/io";

const SubNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`${scrolled ? "fixed flex justify-center w-full top-0" : ""}`}
    >
      <div className="flex justify-center">
        <div
          className={`absolute container mx-auto px-4 gap-10 flex items-center justify-center ${
            scrolled ? "pt-2" : "pt-8"
          } `}
        >
          <RiMenu3Line
            size="80px"
            color="white"
            style={{
              backgroundColor: "#61594D",
              padding: "20px",
              margin: "10px",
              borderRadius: "9999px",
            }}
          />

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white text-3xl"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className="w-full rounded-full bg-[#6F6657] pl-10 pr-3 py-2 text-[#FEFCF9]"
            />
          </div>
          <div className="flex">
            <FiFilter
              size="65px"
              color="white"
              style={{
                backgroundColor: "#61594D",
                padding: "15px",
                margin: "10px",
                borderRadius: "9999px",
              }}
            />
            <IoIosChatboxes
              size="65px"
              color="white"
              style={{
                backgroundColor: "#61594D",
                padding: "15px",
                margin: "10px",
                borderRadius: "9999px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
