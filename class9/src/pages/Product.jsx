import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1 className="text-3xl mb-2 underline flex top-0 left-1/2 translate-x-1/2">
        Product Page
      </h1>
      <div className="flex flex-col">
        <Link className="text-3xl underline" to="/product/men">
          Men's Collection
        </Link>
        <Link className="text-3xl underline" to="/product/women">
          Women's Collection
        </Link>
      </div>
    </div>
  );
};

export default Product;
