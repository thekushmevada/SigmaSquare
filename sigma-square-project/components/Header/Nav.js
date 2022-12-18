import Link from "next/link";
const Nav = () => {
  return (
    <nav className="bg-[#4E4A3F]">
      <div className="container mx-auto px-4 lg:px-24 md:px-12 sm:w-6 flex items-center justify-between font-sans h-24 ">
        <div className="text-[#CABA93] font-bold text-4xl">Sigma Square</div>
        <div className="flex gap-2">
          <Link href="/login">
            <button className="bg-[#6F6657] hover:bg-[#4E4A3F] text-[#BBB093] font-bold py-2 rounded-full w-full md:w-40 sm:w-20 px-3 sm:px-2">
              Login
            </button>
          </Link>
          <Link href="/join">
            <button className="bg-[#6F6657] hover:bg-[#4E4A3F] text-[#BBB093] font-bold py-2 rounded-full w-full md:w-40 sm:w-20 px-3 sm:px-2">
              Join
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
