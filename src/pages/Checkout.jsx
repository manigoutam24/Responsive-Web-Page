import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { getCartTotal, getCartCount, placeOrder } = useCart();

  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fullname);
    console.log(address);
    console.log(city);
    console.log(pincode);

    setFullname("");
    setAddress("");
    setCity("");
    setPincode("");
  };

  const handleNavigate = () => {
    const order = placeOrder();
    // return order;
    navigate("/order-success", {
      state: {
        orderId: order.orderId,
        total: getCartTotal(),
      },
    });
  };

  return (
    <div>
      <div className="border-b-[0.1px] border-b-zinc-400">
        <h1 className="text-2xl text-center font-semibold my-5">Checkout</h1>
      </div>

      <div className="w-full flex justify-center items-center">
        <Form
          onSubmit={handleSubmit}
          className="my-5 bg-zinc-200 rounded-lg md:rounded-lg lg:rounded-lg p-5 w-85 md:w-120 lg:h-[82vh] md:p-5 space-y-5"
        >
          <h2 className="text-center font-semibold text-xl md:text:xl lg:text-[15px]">
            Delivery Information
          </h2>
          <div className="flex flex-col">
            <label
              className="text-lg md:text-lg lg:text-[16px] font-semibold"
              htmlFor="fullname"
            >
              Fullname <sup className="text-lg text-red-600">*</sup>
            </label>
            <input
              className="px-2 py-1 mt-1 focus:ring-1 outline-0 rounded-md focus:ring-gray-400"
              type="text"
              id="fullname"
              name="fullname"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter your name..."
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-lg md:text-lg lg:text-[16px] font-semibold"
              htmlFor="address"
            >
              Address <sup className="text-lg text-red-600">*</sup>
            </label>
            <input
              className="px-2 py-1 mt-1 focus:ring-1 outline-0 rounded-md focus:ring-gray-400"
              type="text"
              id="address"
              name="address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address..."
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-lg md:text-lg lg:text-[16px] font-semibold"
              htmlFor="city"
            >
              City <sup className="text-lg text-red-600">*</sup>
            </label>
            <input
              className="px-2 py-1 mt-1 focus:ring-1 outline-0 rounded-md focus:ring-gray-400"
              type="text"
              id="city"
              name="city"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your city..."
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-lg md:text-lg lg:text-[16px] font-semibold"
              htmlFor="pincode"
            >
              Pincode <sup className="text-lg text-red-600">*</sup>
            </label>
            <input
              className="px-2 py-1 mt-1 focus:ring-1 outline-0 rounded-md focus:ring-gray-400"
              type="text"
              id="pincode"
              name="pincode"
              required
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter your pincode..."
            />
          </div>

          <div className="rounded-lg mt-3">
            <h1 className="text-lg md:text-lg lg:text-[18px] font-semibold">
              Order Summary
            </h1>
            <div className="flex justify-between">
              <span className="text-sm font-medium mt-2">
                Subtotal ({getCartCount()})
              </span>
              <span className="text-sm font-medium mt-2">
                ₹ {getCartTotal()}
              </span>
            </div>
            <div className="flex mb-2 justify-between">
              <span className="text-sm font-medium mt-2">Shipping</span>
              <span className="text-sm font-medium mt-2">₹ 0</span>
            </div>
          </div>

          <div className="w-full">
            {/* <h2 className="text-lg font-semibold">
              Total Price : ₹ {getCartTotal()}{" "}
            </h2> */}
            <div className="flex justify-between">
              <span className="text-lg md:text-lg lg:text-[16px] font-semibold">
                Total Price
              </span>
              <span className="text-lg font-semibold">₹ {getCartTotal()}</span>
            </div>

            <div className="mt-5">
              <button
                type="submit"
                onClick={handleNavigate}
                className="w-full bg-blue-600 py-2 rounded-lg text-white font-semibold"
              >
                Place Order
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
