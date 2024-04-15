import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-black text-white">
      <h1 className="text-3xl font-bold">
        <Link to="/">Inno Tech</Link>
      </h1>
      <ul className="flex gap-4 text-lg font-semibold">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
