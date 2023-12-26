import React from "react";
import { FaTruckFront } from "react-icons/fa6";

import Accordion from "../Accordian/Accordian";
const RightSidebar = ({ orders, isOpen, dispatch }) => {
  const translate = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <aside
      style={{
        height: `calc(100vh - var(--header-height))`,
      }}
      className={`border-4 bg-white border-red-500 border-rose-700 fixed z-20 top-[var(--header-height)] w-80 right-0 ${translate}  transition-transform duration-300 ease-in-out lg:translate-x-0`}
    >
      <div
        className={`fixed top-1/2 right-0 z-0 p-4 bg-black cursor-pointer lg:hidden -translate-y-1/2 translate-x-[-320px]`}
        onClick={() => dispatch({ type: "TOGGLE_RIGHT_SIDEBAR" })}
      >
        <FaTruckFront className="text-white" size={20} />
      </div>
      <div className="p-5">
        <h1 className="font-bold text-[#FCAF17]">Current Orders</h1>
        <Accordion orders={orders} />
      </div>
    </aside>
  );
};

export default RightSidebar;
