import React from "react";

const Button = ({ text }) => {
  return (
    <button className="text-sm bg-[#FCAF17] text-black px-4 py-2 rounded-full mt-2">
      {text}
    </button>
  );
};

export default Button;
