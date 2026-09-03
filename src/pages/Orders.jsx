import React from "react";
import { useCart } from "../context/CartContext";

const Orders = () => {
  const { orders } = useCart();

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
              </div>

              <div className="flex justify-between border-b pb-3 mb-3">
                <p>
                  <span className="font-semibold">Date:</span> {order.date}
                </p>

                <p>
                  <span className="font-semibold">Total:</span> ₹ {order.total}
                </p>
              </div>

              <h3 className="font-semibold mb-2">Products</h3>

              <div className="space-y-2">
                {order.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center bg-white rounded-md p-3"
                  >
                    <div>
                      <p className="font-medium">{product.title}</p>

                      <p className="text-sm text-gray-500">
                        Quantity: {product.quantity}
                      </p>
                    </div>

                    <p className="font-medium">
                      ₹ {product.price * product.quantity}
                    </p>
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
