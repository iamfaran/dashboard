import React from "react";
import { FaTruckFront } from "react-icons/fa6";

import Accordion from "../Accordian/Accordian";
const RightSidebar = ({ orders, isOpen, dispatch }) => {
  const translate = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <>
      <div
        className={`fixed top-1/2 right-0 z-0 p-4 bg-black cursor-pointer lg:hidden -translate-y-1/2 ${
          isOpen ? "translate-x-[-320px]" : "translate-x-0"
        } transition-transform duration-300 ease-in-out`}
        onClick={() => dispatch({ type: "TOGGLE_RIGHT_SIDEBAR" })}
      >
        <FaTruckFront className="text-white" size={20} />
      </div>
      <aside
        style={{
          height: `calc(100vh - var(--header-height))`,
        }}
        className={`bg-white fixed z-50 top-[var(--header-height)] w-80 right-0 ${translate}  transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="p-5">
          <h1 className="font-bold text-[#FCAF17]">Current Orders</h1>
          <Accordion orders={orders} />
        </div>
      </aside>
    </>
  );
};

export default RightSidebar;
