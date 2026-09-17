import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Orders = () => {
  const { orders } = useCart();

  // Not Responsive right now working on Responsive
  return (
    <div className="min-h-screen p-5">
      <h1 className="text-3xl font-semibold text-center mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 text-lg">
            You haven't placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-5">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-zinc-100 rounded-lg p-5 shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  Order ID: #{order.orderId}
                </h2>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {order.status}
                </span>

                <Link
                  to={`/orders/${order.orderId}`}
                  className="hidden md:block lg:block bg-blue-300 text-blue-700 md:text-sm lg:text-sm px-2 py-2 md:px-5 md:py-2 lg:px-5 lg:py-2 md:rounded-lg lg:rounded-lg md:hover:bg-blue-400"
                >
                  View Details
                </Link>

                <Link className="bg-blue-100 text-blue-700 md:hidden lg:hidden px-3 py-1 rounded-full text-sm">
                  View
                </Link>
              </div>

              <div className="flex justify-between border-b pb-3 mb-3">
                <p className="font-medium text-[14px] text-gray-500 md:hidden">
                  <span className="font-semibold text-black">Date:</span>{" "}
                  {order.date}, {order.time}
                </p>
                <p className="font-medium text-gray-500 hidden md:block md:text-sm">
                  <span className="font-semibold text-black">Placed on </span>{" "}
                  {order.date}, {order.time}
                </p>

                <p>
                  <span className="font-semibold">Total:</span> ₹{" "}
                  {order.total.toLocaleString("en-IN")}
                </p>
              </div>

              <h3 className="font-semibold mb-2">Products</h3>

              <div className="space-y-2">
                {order.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center bg-white rounded-md p-3"
                  >
                    <div className="flex gap-5">
                      <div>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-32 rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="font-medium">{product.title}</p>
                        <p className="text-sm text-gray-500">
                          Quantity: {product.quantity}
                        </p>
                        <p className="font-medium">
                          ₹{" "}
                          {(product.price * product.quantity).toLocaleString(
                            "en-IN",
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block lg:block h-18 ml-40 bg-gray-500 w-[0.5px]"></div>

                    <div className="hidden md:block lg:block">
                      <h2>Total amount</h2>
                      <p className="font-medium">
                        ₹{" "}
                        {(product.price * product.quantity).toLocaleString(
                          "en-IN",
                        )}
                      </p>

                      <p>
                        {" "}
                        {product.quantity}{" "}
                        <span className="text-sm text-gray-500 font-semibold">
                          items
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
