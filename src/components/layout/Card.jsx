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
      <div className="flex items-center">
        <div className="mr-8">
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
    </div>
  );
};

export default Card;
