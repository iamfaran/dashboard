import React from "react";

const Sidebar = ({ pos, children, isOpen }) => {
  console.log(pos);
  return (
    <aside
      style={{ height: `calc(100vh - var(--header-height))` }}
      className={`border-4 border-red-500 border-rose-700 fixed top-[var(--header-height)] ${pos} w-64 bg-blue-gray-900 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
