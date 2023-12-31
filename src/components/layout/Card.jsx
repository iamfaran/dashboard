import React, { useState } from "react";
import { Slider } from "@material-tailwind/react";
import Button from "../Button/Button";
const Card = ({ order }) => {
  const [distance, setDistance] = useState(50);

  const handleSliderChange = (event) => {
    setDistance(Math.round(Number(event.target.value)));
  };
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(32, 38, 44,0.9), rgba(32, 38, 44,0.9)), url(${order.imgSrc})`,
      }}
      className="border-2 rounded-lg border-black w-full p-8 mb-6"
    >
      {/* TITLE */}
      <h1 className="text-white text-2xl font-bold">{order.title}</h1>
      {/* Description */}
      <p className="text-white my-8">{order.description}</p>

      {/* SEARCH SETTINGS */}
      <div className="flex items-center flex-wrap ">
        <div className="mr-8 my-4">
          <Button text="SEARCH SETTINGS" />
        </div>
        <div>
          <Slider
            color="amber"
            value={distance}
            onChange={handleSliderChange}
          />
          <span className="inline-block border-2 bg-black text-white mt-2">
            {distance} KM
          </span>
        </div>
      </div>

      {/* FILTER */}
      <div className="mt-8">
        <h1 className="text-white font-bold">Filter</h1>
        <div className="flex items-center justify-between flex-wrap">
          <div>
            <ul className="flex">
              <li className="text-white underline">Nearby</li>
              <li className="text-white ml-4">Alphabetical</li>
              <li className="text-white ml-4">Cashback</li>
            </ul>
          </div>

          <div>
            <Button text="SHOP NOW" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
