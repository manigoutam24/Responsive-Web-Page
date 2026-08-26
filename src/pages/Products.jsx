import React from "react";
import Card from "../components/Card";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import products from "../data/products";

const Products = ({ limit }) => {
  return (
    <>
      <div className="w-full relative">
        <h1 className="text-center font-semibold text-2xl my-10 md:text-3xl lg:text-4xl">
          Our Products
        </h1>

        <div className="w-35 md:w-50 lg:w-60 h-0.5 md:h-[2.5px] bg-zinc-500 rounded-xl absolute top-8 md:top-9 lg:top-10 left-31 md:left-79 lg:left-160"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {products.slice(0, limit || products.length).map((product) => {
            return (
              <Link to={`/products/${product.id}`}>
                <Card key={product.id} product={product} />;
              </Link>
            );
          })}
        </div>

        {limit && limit < products.length && (
          <div className="flex justify-center items-center mt-2">
            <Link
              to={`/products`}
              className="py-3 px-4 bg-gray-400 rounded-lg text-white flex justify-center items-center gap-2 my-5 hover:bg-gray-500"
            >
              Show All Products <FaArrowRightLong className="pt-1" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
