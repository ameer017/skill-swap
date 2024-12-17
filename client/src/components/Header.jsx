import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-6 border-b-2 flex justify-around items-center">
      <Link to="/" aria-label="Home">
        <h1 className="text-2xl font-bold">Skill Swap</h1>
      </Link>

      <nav
        className=" flex justify-between"
        role="navigation"
        aria-label="Main Navigation"
      >
        <ul className="flex gap-4">
          <li className="text-[15px] hover:transition-all hover:-translate-y-2 ">
            <Link to="/about">About</Link>
          </li>
          <li className="text-[15px] hover:transition-all hover:-translate-y-2">
            <Link to="/bookings">Bookings</Link>
          </li>
          <li className="text-[15px] hover:transition-all hover:-translate-y-2">
            <Link to="/chat">Chat</Link>
          </li>
          <li className="text-[15px] hover:transition-all hover:-translate-y-2">
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-6 items-center">
        <button
          className="bg-green-500 px-4 py-2 rounded-lg text-[#fff] hover:transition-all hover:-translate-y-2"
          aria-label="Register"
        >
          Register
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded-lg text-[#fff] hover:transition-all hover:-translate-y-2"
          aria-label="Login"
        >
          Login
        </button>
        <button
          className="bg-red-500 px-4 py-2 rounded-lg text-[#fff] hover:transition-all hover:-translate-y-2"
          aria-label="Logout"
        >
          Logout
        </button>
        <div>
          <Link to="#" aria-label="Profile Page">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="profile"
              className="w-8"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
