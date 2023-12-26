import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2">
      <button
        className="flex justify-between items-center w-full p-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <div className={`p-5 ${isOpen ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
};

const Accordion = ({ orders }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-5">
      {orders.map((order, index) => (
        <AccordionItem
          key={index}
          title={`#${order.orderNum} - ${order.storeName} - ${order.status}`}
        >
          {/* Content here */}
          <p>Details for order #{order.orderNum}</p>
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
