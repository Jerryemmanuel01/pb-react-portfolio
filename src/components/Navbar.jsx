const Navbar = ({ setIsLoggedin }) => {
  return (
    <div className=" py-4 ">
      <div className=" mx-auto max-w-6xl flex justify-between gap-3 px-6">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
            J
          </div>
          <h2 className="text-xl font-semibold font-montserrat">John</h2>
        </div>

        {/* Nav Links */}
        <ul className="flex text-sm">
          <li className="py-2 px-4 cursor-pointer">Home</li>
          <li className="py-2 px-4 cursor-pointer">About</li>
          <li className="py-2 px-4 cursor-pointer">Process</li>
          <li className="py-2 px-4 cursor-pointer">Portfolio</li>
          <li className="py-2 px-4 cursor-pointer">Blog</li>
          <li className="py-2 px-4 cursor-pointer">Services</li>
          <button
            className="py-2 px-4 bg-primary rounded text-white"
            onClick={() => setIsLoggedin(false)}
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
