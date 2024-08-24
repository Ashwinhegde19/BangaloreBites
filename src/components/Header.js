import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

const [BtnNameReact, setBtnNameReact] = useState("Login");
const online = useOnlineStatus()
    return (
      
      <div className="flex justify-between bg-blue-400 shadow-lg mb-2 ">
        <div className="logo-container">
          <img
            className="w-20"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items items-center">
          <ul className="flex p-4 m-4">
            <li className="p-1">
              Status: {online ? "🟢": "🔴"}
            </li>
            <li className="p-1">
              <Link to="/">Home</Link>
            </li>
            <li className="p-1">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-1">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="p-1">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="p-1">Cart</li>
            <button className="login" 
            onClick={() => {
              BtnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
            }}
            >{BtnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header
