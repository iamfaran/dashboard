import React from "react";
import { Icon } from "@material-tailwind/react";

const Sidebar = ({ pos, children }) => {
  console.log(pos);
  return (
    <aside
      style={{ height: `calc(100vh - var(--header-height))` }}
      className={`border-4 border-red-500 border-rose-700  fixed top-[var(--header-height)] ${pos} w-64 bg-blue-gray-900`}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
