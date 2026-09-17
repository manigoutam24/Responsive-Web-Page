import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderDetails = () => {
  const { orderId } = useParams();
  const { orders } = useCart();

  const order = orders.find((item) => item.orderId === orderId);

  const steps = [
    "Placed",
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  const currentStep = steps.indexOf(order?.status);

  if (!order) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-semibold">Order Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-5">
      {/* Order Header */}
      <div className="max-w-5xl mx-auto bg-zinc-100 rounded-lg p-5 shadow">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">
              Order ID: #{order.orderId}
            </h1>

            <p className="text-gray-500 mt-1">
              Placed on {order.date} {order.time}
            </p>
          </div>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
            {order.status}
          </span>
        </div>

        {/* Shipping Progress */}
        <div className="mt-10 flex items-start justify-between">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex-1 flex flex-col items-center relative"
            >
              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`absolute top-5 left-1/2 w-full h-1 ${
                    index < currentStep ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              )}

              {/* Circle */}
              <div
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  index <= currentStep
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index + 1}
              </div>

              {/* Step Name */}
              <p
                className={`mt-3 text-sm text-center ${
                  index <= currentStep
                    ? "font-semibold text-black"
                    : "text-gray-500"
                }`}
              >
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
