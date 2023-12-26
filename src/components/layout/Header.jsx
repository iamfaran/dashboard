import React from "react";

const HeaderComponent = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-gray-900 p-5 flex justify-between items-center md:justify-start">
      <h1 className="text-white text-center flex-1 md:flex-none">Header</h1>
    </header>
  );
};

export default HeaderComponent;
