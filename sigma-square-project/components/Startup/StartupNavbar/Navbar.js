const Navbar = () => {
  return (
    <nav className="bg-[#134F59]">
      <div className="container mx-auto px-4 lg:px-24 md:px-12 sm:w-6 flex items-center justify-between font-sans h-24 ">
        <div className="text-[#CABA93] font-bold text-2xl sm:text-4xl">
          SigmaSquare
        </div>
        <div className="flex text-[#CABA93] justify-between gap-4 font-semibold text-xl cursor-pointer">
          <div>Home</div>
          <div>About</div>
          <div>Jobs</div>
          <div>Profiles</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
