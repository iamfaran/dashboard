import { useReducer } from "react";

import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { FaTruckFront } from "react-icons/fa6";
import Overlay from "./components/layout/Overlay";
import LeftSidebar from "./components/layout/LeftSidebar";
import RightSidebar from "./components/layout/RightSidebar";

function App() {
  // useReducer for sidebars

  const initialState = {
    leftSidebar: false,
    rightSidebar: false,
    overlay: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_LEFT_SIDEBAR":
        return {
          ...state,
          leftSidebar: !state.leftSidebar,
          overlay: !state.overlay,
        };
      case "TOGGLE_RIGHT_SIDEBAR":
        return {
          ...state,
          rightSidebar: !state.rightSidebar,
          overlay: !state.overlay,
        };
      case "TOGGLE_OVERLAY":
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  // ==============================

  const currentOrders = [
    { orderNum: "12345", storeName: "Store A", status: "In Progress" },
    { orderNum: "45645", storeName: "Store B", status: "Shipped" },
    // ... other orders
  ];

  return (
    <>
      <Header dispatch={dispatch} />
      {/* <Overlay /> */}
      <div
        className="fixed right-0 z-0 p-4 bg-black cursor-pointer lg:hidden"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        onClick={() => dispatch({ type: "TOGGLE_RIGHT_SIDEBAR" })}
      >
        <FaTruckFront className="text-white" size={20} />
      </div>

      <div className="flex">
        <LeftSidebar isOpen={state.leftSidebar} />
        <div className="p-5 w-full mt-[var(--header-height)] lg:ml-80 lg:mr-80 lg:flex lg:flex-col lg:items-center">
          <Main />
        </div>
        <RightSidebar isOpen={state.rightSidebar} orders={currentOrders} />
      </div>
    </>
  );
}

export default App;
