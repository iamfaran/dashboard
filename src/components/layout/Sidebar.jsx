import React from "react";
const Sidebar = ({ pos, children, isOpen }) => {
  const translateClasses =
    pos === "right-0"
      ? isOpen
        ? "translate-x-0"
        : "translate-x-full"
      : isOpen
      ? "-translate-x-0"
      : "-translate-x-full";

  return (
    <aside
      style={{ height: `calc(100vh - var(--header-height))` }}
      className={`border-4 border-red-500 border-rose-700 fixed top-[var(--header-height)] ${pos} w-64 bg-blue-gray-900 transition-transform duration-300 ease-in-out ${translateClasses} lg:translate-x-0`}
    >
      {children}
    </aside>
  );
};
export default Sidebar;
