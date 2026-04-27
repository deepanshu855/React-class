import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-24 bg-red-800 flex justify-around between items-center gap-4 mb-4">
      <button
        className="text-3xl cursor-pointer"
        onClick={() => {
          navigate("/home");
        }}
      >
        Navbar
      </button>
      <div>
        <NavLink
          className="text-3xl m-2"
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
          })}
        >
          Home
        </NavLink>
        {/* <Link className='text-3xl m-2' to='/home'>Home</Link> */}
        <NavLink
          className="text-3xl m-2"
          to="/product"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
          })}
        >
          Product
        </NavLink>
        <NavLink
          className="text-3xl m-2"
          to="/courses"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
          })}
        >
          Courses
        </NavLink>
        <NavLink
          className="text-3xl m-2"
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
          })}
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
