import React from "react";

const Card = ({ product }) => {
  // console.log(product);
  return (
    <>
      <div className="w-[80%] mx-auto bg-zinc-100  hover:bg-zinc-200 rounded-lg p-5 mb-3">
        <div className="w-full h-52">
          <img
            className="w-full h-full object-cover md:object-cover rounded-lg"
            src={product.image}
            alt={product.image}
          />
        </div>

        <div className="mt-3 flex flex-col">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>₹ {product.price}</p>
          <button className="py-2 px-3 bg-gray-400 rounded-lg mt-2 w-25 hover:bg-gray-500 cursor-pointer text-white">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
