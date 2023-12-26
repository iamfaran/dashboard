import React from "react";

const Card = () => {
  return (
    <div className="bg-black bg-opacity-75 text-white p-6 rounded-lg w-full">
      <h2 className="text-xl font-bold mb-4">MARKETPLACE</h2>
      <p className="mb-4">
        Dive into our Marketplace, where style meets convenience. Shop for shoes
        that step up your game, home decor that transforms spaces, and
        kitchenware that sparks joy. Your perfect find awaits!
      </p>
      <div className="flex items-center justify-between mb-4">
        <button className="text-yellow-500 bg-opacity-50 px-4 py-2 rounded shadow">
          SEARCH SETTINGS
        </button>
        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full">
          100KM
        </span>
      </div>
      <div className="flex justify-between">
        <button className="bg-transparent text-yellow-500 px-4 py-2 rounded shadow">
          Nearby
        </button>
        <button className="bg-transparent text-yellow-500 px-4 py-2 rounded shadow">
          Alphabetical
        </button>
        <button className="bg-transparent text-yellow-500 px-4 py-2 rounded shadow">
          Cash Back
        </button>
      </div>
      <button className="w-full bg-yellow-500 text-black px-4 py-2 rounded shadow mt-4">
        SHOP NOW
      </button>
    </div>
  );
};

export default Card;
