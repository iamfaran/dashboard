import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar pos={"left-0"}>
        <div className="flex flex-col justify-between h-full p-5">
          <div>
            <div className="text-gray-500">WELCOME BACK</div>
            <div className="text-xl font-bold mb-4">Hannah</div>

            <div className="text-gray-500">BALANCE</div>
            <div className="text-xl font-bold mb-4">$79.87</div>

            <div className="flex items-center justify-between">
              <div className="text-gray-500">ADDRESS</div>
            </div>
            <div className="mb-4">123 ABC ST.</div>

            <div className="text-blue-500 cursor-pointer">+ ADD ADDRESS</div>
          </div>

          <div>
            <div className="uppercase font-bold text-gray-500 mb-2">
              More options
            </div>
            <ul>
              <li className="mb-2">Profile Settings</li>
              <li className="mb-2">My Orders</li>
              <li className="mb-2">Earnings</li>
              <li className="mb-2">FAQ</li>
              <li className="mb-2">Partner Program</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Log Out</li>
            </ul>
          </div>
        </div>
      </Sidebar>
      <Sidebar pos={"right-0"}></Sidebar>
    </>
  );
}

export default App;
