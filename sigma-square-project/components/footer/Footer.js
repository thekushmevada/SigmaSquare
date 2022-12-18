import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sigma_Logo_2 from "../../img/Sigma_Logo_2.png";
const Footer = () => {
  return (
    <>
      <div className="bg-[#134F59]">
        <div className="max-w-7xl m-auto px-6 flex items-center justify-evenly h-96">
          <div className="w-1/3 text-center flex flex-col items-center gap-1">
            <Image
              src={Sigma_Logo_2}
              style={{ height: "auto", width: "180px" }}
            />
            <h1 className="text-3xl font-sans text-[#CABA93]">Sigma Square</h1>
            <p className="text-[#FEFCF9]"> A smarter way to move forward</p>
            <button className="rounded-full bg-[#635D52] py-1">
              <Link href="/login">
                <span className="py-1 px-3 text-[#FEFCF9] border-r-2">
                  Log in
                </span>
              </Link>
              <Link href="/login">
                <span className="px-4 text-[#FEFCF9]">Join</span>
              </Link>
            </button>
          </div>
          <div className="flex justify-evenly w-2/3">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-sans text-[#CABA93]">Site Map</h1>
              <ul className="text-[#FEFCF9] space-y-2">
                <li>Home Page</li>
                <li>About us</li>
                <li>Partners</li>
                <li>Reviews</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-sans text-[#CABA93]">Legal</h1>
              <ul className="text-[#FEFCF9] space-y-2">
                <li>Terms & conditions</li>
                <li>Privacy & policy statement</li>
                <li>Use guide</li>
                <li>Report </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0F3C43]">
        <div className="max-w-7xl m-auto px-6 py-3 font-sans font-normal text-2xl text-[#9C9F84]">
          ©️ copyright 2022 - Sigma Square
        </div>
      </div>
    </>
  );
};

export default Footer;
