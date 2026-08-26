import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AiFillCheckCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  //   console.log(state);

  const handleNavigate = () => {
    navigate("/products");
  };
  return (
    <>
      <Header />
      <div className="my-5">
        <div className="w-[90%] h-[70%] mx-auto">
          <div className="flex justify-center">
            <AiFillCheckCircle className="text-green-600 text-9xl" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl font-semibold text-center my-1">
              Order Placed!
            </h2>
            <p className="text-center mt-2 text-zinc-500">
              Your order has been placed <br />
              successfully.
            </p>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="flex gap-5 mt-3">
              <div className="w-12 h-12 rounded-full text-center bg-zinc-200 relative">
                <FaClipboardList className="text-blue-600 text-2xl text-center absolute top-6 translate-[-50%] left-5.75" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold">Order ID</h2>
                <span>#{state.orderId}</span>
              </div>
            </div>
            <div className="flex gap-5 mt-3">
              <div className="w-12 h-12 rounded-full text-center bg-zinc-200 relative">
                <IoWallet className="text-blue-600 text-2xl text-center absolute top-6 translate-[-50%] left-5.75" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold">Total Price</h2>
                <span> ₹ {state.total}</span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-8">
            <button
              onClick={handleNavigate}
              className="px-5 py-3 rounded-lg text-white font-semibold bg-blue-600"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderSuccess;
