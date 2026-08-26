import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useCart();

  const { id } = useParams();
  const product = products.find((item) => item?.id === Number(id));

  console.log("ID:", id);
  console.log("Selected Product:", product);

  return (
    <div>
      <img className="w-50" src={product?.image} alt="" />
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <p>₹{product?.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
