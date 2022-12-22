import Image from "next/image";
import React, { useEffect, useState } from "react";
import Sigma_Logo_2 from "../../img/Sigma_Logo_2.png";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdReviews } from "react-icons/md";
const SubNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const [scrolled, setScrolled] = React.useState(false);
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
          className={`absolute container mx-auto px-4 gap-10 flex items-start md:items-center justify-between md:justify-center ${
            scrolled ? "pt-2" : "pt-16"
          } `}
        >
          <Image src={Sigma_Logo_2} style={{ width: "100px" }} />
          <div className="hidden md:flex justify-between rounded-full bg-[#6F6657] px-3 text-[#FEFCF9]">
            <div className=" py-2 px-4">Home</div>
            <div className="bg-[#61594D] py-2 px-4">About</div>
            <div className=" py-2 px-4">Partners</div>
            <div className="bg-[#61594D] py-2 px-4">Contact</div>
            <div className=" py-2 px-4">Reviews</div>
          </div>
          <div>
            <div className="flex flex-col md:hidden items-end">
              {!open ? (
                <RiMenu3Line
                  size="80px"
                  color="white"
                  style={{
                    backgroundColor: "#61594D",
                    padding: "20px",
                    margin: "10px",
                    borderRadius: "9999px",
                  }}
                  onClick={handleOpen}
                />
              ) : (
                <RxCross1
                  size="80px"
                  color="white"
                  style={{
                    backgroundColor: "#61594D",
                    padding: "20px",
                    margin: "10px",
                    borderRadius: "9999px",
                  }}
                  onClick={handleOpen}
                />
              )}
            </div>
            {open ? (
              <div className="flex flex-col md:hidden text-center text-white gap-2">
                <div className="flex items-center gap-2 bg-[#6F6657] px-4 py-2 rounded-full">
                  <AiFillHome color="white" />
                  <span>Home</span>
                </div>
                <div className="flex items-center gap-2 bg-[#61594D] px-4 py-2 rounded-full">
                  <AiOutlineInfoCircle color="white" />
                  <span>About</span>
                </div>
                <div className="flex items-center gap-2 bg-[#6F6657] px-4 py-2 rounded-full">
                  <FaHandsHelping color="white" />
                  <span>Partners</span>
                </div>
                <div className="flex items-center gap-2 bg-[#61594D] px-4 py-2 rounded-full">
                  <IoIosContact color="white" />
                  <span>Contact</span>
                </div>
                <div className="flex items-center gap-2 bg-[#6F6657] px-4 py-2 rounded-full">
                  <MdReviews color="white" />
                  <span>Reviews</span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
