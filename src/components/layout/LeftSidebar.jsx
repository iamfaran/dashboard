import React from "react";
import Button from "../Button/Button";
import { ImCross } from "react-icons/im";

const LeftSidebar = ({ isOpen, dispatch }) => {
  const translate = isOpen ? "translate-x-0" : "-translate-x-full";
  return (
    <aside
      style={{
        height: `calc(100vh - var(--header-height))`,
      }}
      className={`border-4 border-red-500 border-rose-700 fixed z-50 bg-[#20262C] top-[var(--header-height)] w-80 left-0 ${translate} transition-transform duration-300 ease-in-out lg:translate-x-0`}
    >
      <div className="fixed p-5 right-0 lg:hidden">
        <ImCross
          onClick={() => {
            dispatch({ type: "TOGGLE_LEFT_SIDEBAR" });
          }}
          className="text-white"
          size={20}
        />
      </div>
      <div className="flex flex-col justify-between h-full p-5">
        <div>
          {/* 1st col */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-light">Welcome Back</h3>
              <h1 className="font-black text-white">Hannah</h1>
              <p className="text-white font-light">Address</p>
              <Button text="123 ABC ST" />
              <span className="block font-light text-[#FCAF17]">+Address</span>
            </div>
            {/* 2nd col */}
            <div className="flex flex-col">
              <span className="text-white">Balance</span>
              <span className="font-bold text-[#FCAF17]">$0.00</span>
            </div>
          </div>
        </div>

        <div>
          <div className="uppercase font-bold text-gray-500 mb-2 text-[#FCAF17]">
            More options
          </div>
          <ul>
            <li className="mb-2 text-white">Profile Settings</li>
            <li className="mb-2 text-white">My Orders</li>
            <li className="mb-2 text-white">Earnings</li>
            <li className="mb-2 text-white">FAQ</li>
            <li className="mb-2 text-white">Partner Program</li>
            <li className="mb-2 text-white">Contact Us</li>
            <li className="mb-2 text-white">Log Out</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
export default LeftSidebar;
