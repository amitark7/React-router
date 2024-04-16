import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 gap-1 py-4 bg-black text-white sm:px-10">
      <h1 className="text-xl font-bold sm:text-3xl">
        <NavLink to="/">Inno Tech</NavLink>
      </h1>
      <ul className="flex gap-2 text-sm font-semibold sm:text-lg sm:gap-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gray-500" : "text-white"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gray-500" : "text-white"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gray-500" : "text-white"
            }
            to="/messages"
          >
            Messages
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
