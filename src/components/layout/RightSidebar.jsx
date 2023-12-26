import React from "react";

import Accordion from "../Accordian/Accordian";
const RightSidebar = ({ orders, isOpen }) => {
  const translate = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <aside
      style={{
        height: `calc(100vh - var(--header-height))`,
      }}
      className={`border-4 border-red-500 border-rose-700 fixed z-20 top-[var(--header-height)] w-80 right-0 ${translate} transition-transform duration-300 ease-in-out lg:translate-x-0`}
    >
      <div className="p-5">
        <h1 className="font-bold	 text-[#FCAF17]">Current Orders</h1>
        <Accordion orders={orders} />
      </div>
    </aside>
  );
};

export default RightSidebar;
