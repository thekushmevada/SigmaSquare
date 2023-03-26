import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#4E4A3F]">
      <div className="container mx-auto px-4 lg:px-24 md:px-12 sm:w-6 flex items-center justify-between font-sans h-24 ">
        <div className="text-[#CABA93] font-bold text-2xl sm:text-4xl">
          SigmaSquare
        </div>
        <div className="flex text-xl">
          <Link href="/startup" style={{textDecoration:"none"}}>
            <div className="text-[#CABA93] font-semibold flex items-end px-2">
              Home
            </div>
          </Link>
          <Link href="/startup/hire" style={{textDecoration:"none"}}>
            <div className="text-[#CABA93] font-semibold flex items-end px-2">
              Hire
            </div>
          </Link>
          <Link href="/" style={{textDecoration:"none"}}>
            <div className="text-[#CABA93] font-semibold flex items-end px-2">
              Logout
            </div>
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="text-2xl text-white font-semibold">Welcome ,</div>
          <div className="flex items-end text-xl text-[#CABA93] font-semibold">
            @vatsal mavani
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
