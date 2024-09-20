import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-2 bg-white border-b border-gray-200">
      <h1 className="text-lg font-medium text-[#343433] leading-5">
        Dashboard
      </h1>
      <div className="flex items-center">
        <div className="relative">
          <MdNotifications className="text-2xl text-gray-700" />
          <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
        </div>

        <div className="h-6 w-px bg-gray-300 mx-4" />

        <FaUserCircle className="text-2xl text-gray-700" />
      </div>
    </div>
  );
};

export default Navbar;
