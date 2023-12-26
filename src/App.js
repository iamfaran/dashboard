import { useState } from "react";

import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";
import { FaTruckFront } from "react-icons/fa6";
import Accordion from "./components/Accordian/Accordian";
import Button from "./components/Button/Button";

function App() {
  const currentOrders = [
    { orderNum: "12345", storeName: "Store A", status: "In Progress" },
    { orderNum: "45645", storeName: "Store B", status: "Shipped" },
    // ... other orders
  ];

  return (
    <>
      <Header />
      <div
        className="fixed right-0 z-50 p-4 bg-black cursor-pointer lg:hidden"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <FaTruckFront className="text-white" size={20} />
      </div>

      <div className="flex">
        <Sidebar pos={"left-0"} bgColor="#20262C">
          <div className="flex flex-col justify-between h-full p-5">
            <div>
              {/* 1st col */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-light">Welcome Back</h3>
                  <h1 className="font-black text-white">Hannah</h1>
                  <p className="text-white font-light">Address</p>
                  <Button text="123 ABC ST" />
                  <span className="block font-light text-[#FCAF17]">
                    +Address
                  </span>
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
        </Sidebar>
        <div className="p-5 w-full mt-[var(--header-height)] lg:ml-80 lg:mr-80 lg:flex lg:flex-col lg:items-center">
          <Main />
        </div>
        <Sidebar pos={"right-0"} bgColor="#fff">
          <div className="p-5">
            <h1 className="font-bold	 text-[#FCAF17]">Current Orders</h1>
            <Accordion orders={currentOrders} />
          </div>
        </Sidebar>
      </div>
    </>
  );
}

export default App;
