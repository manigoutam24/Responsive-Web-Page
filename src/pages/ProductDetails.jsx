// import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { MdFavoriteBorder } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import Specification from "../components/Specification";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { addToCart } = useCart();

  const { id } = useParams();
  const product = products.find((item) => item?.id === Number(id));

  // console.log("ID:", id);
  // console.log("Selected Product:", product);

  const handleCart = () => {
    addToCart(product);
    toast.success("Add to cart Successfully");
  };

  return (
    <div>
      <div>
        <div className="flex justify-end mt-2.5 mr-5 gap-3">
          <div className="bg-zinc-100 p-1 shadow-lg rounded-lg">
            <MdFavoriteBorder className="text-red-500 text-2xl" />
          </div>
          <div className="bg-zinc-100 p-1 shadow-lg rounded-lg">
            <IoShareSocialOutline className="text-2xl" />
          </div>
        </div>
        <div className="w-full p-3">
          <img
            className="w-full rounded-lg object-cover h-55"
            src={product?.image}
            alt=""
          />
        </div>
        <div className="flex justify-between my-2 px-5 pr-8">
          <h1 className="text-xl font-semibold">{product?.title}</h1>
          <p className="bg-purple-200 px-2 text-purple-600 font-semibold rounded-lg">
            New
          </p>
        </div>
        <p className="px-5 text-[13px] text-zinc-500">{product?.description}</p>
        <p className="px-5 font-semibold text-xl mt-1 text-purple-600">
          ₹{(product?.price).toLocaleString("en-In")}
        </p>

        <div className="flex items-center gap-2 mx-5 mt-1.5 text-green-500">
          <p>
            <IoShieldCheckmark />
          </p>
          <p className="font-semibold my-2">1 years official warrenty</p>
        </div>

        <div>
          <Specification />
        </div>

        <div className="w-80 mx-auto my-3">
          <button
            className="w-full bg-purple-400 text-white font-semibold py-3 rounded-lg px-5"
            onClick={handleCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
