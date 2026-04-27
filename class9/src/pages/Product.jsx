import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1 className="text-3xl mb-2 underline flex top-0 left-1/2 translate-x-1/2">
        Product Page
      </h1>
      <div className="flex justify-around gap-2 mb-4">
        <NavLink
          className={({ isActive }) =>
            `text-3xl m-2 ${isActive ? "text-yellow-400" : "text-white"}`
          }
          to="/product/men"
        >
          Men's Collection
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-3xl m-2 ${isActive ? "text-yellow-400" : "text-white"}`
          }
          to="/product/men"
        >
          Women's Collection
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;
