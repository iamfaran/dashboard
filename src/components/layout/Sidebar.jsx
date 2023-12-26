import React from "react";
const Sidebar = ({ pos, children, bgColor }) => {
  // left-0 -> hide left sidebar
  // right-0 -> hide right sidebar

  const translateClass =
    pos === "left-0" ? "-translate-x-full" : "translate-x-full";
  return (
    <aside
      style={{ height: `calc(100vh - var(--header-height))` }}
      className={`border-4 border-red-500 border-rose-700 fixed top-[var(--header-height)] ${pos} w-80 bg-[${bgColor}] transition-transform duration-300 ease-in-out ${translateClass} lg:translate-x-0`}
    >
      {children}
    </aside>
  );
};
export default Sidebar;
