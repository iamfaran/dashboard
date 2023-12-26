import React from "react";
import { MdMenu } from "react-icons/md";

const HeaderComponent = ({ toggleRightSidebar }) => {
  return (
    <header className="border-4 border-red-500 fixed top-0 left-0 w-full bg-blue-gray-900 p-5 flex justify-between items-center lg:justify-start">
      <button onClick={toggleRightSidebar} className="text-white lg:hidden">
        <MdMenu size={24} />
      </button>
      <h1 className="text-white text-center flex-1 lg:flex-none">Header</h1>
    </header>
  );
};

export default HeaderComponent;
