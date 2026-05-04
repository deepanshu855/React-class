import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <div className="navbar">
      <h1>This is Navbar ~ {theme}</h1>
      <button
        onClick={() => {
          if (theme === "Light") setTheme("Dark");
          else setTheme("Light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
