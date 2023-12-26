import React from "react";
const Sidebar = ({ pos, children, bgColor, state }) => {
  // left-0 -> hide left sidebar
  // right-0 -> hide right sidebar

  const translateClass =
    pos === "left-0" ? "-translate-x-full" : "translate-x-full";

  const leftSidebar = state.leftSidebar;
  const rightSidebar = state.rightSidebar;

  return (
    <aside
      style={{
        height: `calc(100vh - var(--header-height))`,
        transform: `translateX(${leftSidebar ? "0" : "-100%"})`,
        transform: `translateX(${rightSidebar ? "0" : "100%"})`,
      }}
      className={`border-4 border-red-500 border-rose-700 fixed z-20 top-[var(--header-height)] ${pos} w-80 bg-[${bgColor}] transition-transform duration-300 ease-in-out ${translateClass} lg:translate-x-0`}
    >
      {children}
    </aside>
  );
};
export default Sidebar;
