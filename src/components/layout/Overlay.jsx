import React from "react";
// Toggle block and hidden class to show/hide overlay
const Overlay = ({ isOverlay, dispatch }) => {
  if (isOverlay) {
    return (
      <div
        className="w-screen z-30 fixed bg-opacity-80 h-screen bg-black"
        onClick={() => dispatch({ type: "TOGGLE_OVERLAY" })}
      ></div>
    );
  }
};

export default Overlay;
