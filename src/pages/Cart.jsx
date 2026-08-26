import React from "react";
import { useCart } from "../context/CartContext";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Cart = () => {
  // const { cart } = useCart();
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreassQuantity,
    getCartTotal,
    getCartCount,
  } = useCart();

  console.log(cart);

  return (
    <div className="w-full">
      <h1 className="text-center text-2xl my-5 font-semibold">
        My Cart ({getCartCount()}){" "}
      </h1>

      <div className="flex flex-col ">
        <div className="">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex p-5  outline outline-zinc-400 mx-2 rounded-lg"
            >
              <div className="w-70">
                <img
                  className="w-full h-40 rounded-lg"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="space-y-3 mx-5">
                <h2 className="text-lg font-semibold">{product.title}</h2>

                <p className="text-base font-medium">₹ {product.price}</p>

                <p className="text-[15px] flex gap-3">
                  <span className="text-sm font-semibold">Subtotal:</span>{" "}
                  <span className="font-medium">
                    ₹{product.price * product.quantity}
                  </span>
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex gap-2 bg-gray-300 py-2 px-3 rounded-lg">
                    <button
                      className="border rounded-lg px-2"
                      onClick={() => decreassQuantity(product.id)}
                    >
                      <span className="text-center text-lg flex justify-center items-center font-semibold">
                        -
                      </span>
                    </button>

                    <span className="text-[20px] font-semibold">
                      {product.quantity}
                    </span>

                    <button
                      className="border rounded-lg px-2"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      <span className="text-center text-lg flex justify-center items-center font-semibold">
                        +
                      </span>
                    </button>
                  </div>

                  <button
                    className="flex gap-2 bg-gray-300 py-2 px-3 rounded-lg text-[25px]"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-2 rounded-lg mt-5 outline outline-zinc-400 px-5 py-2">
          <h1 className="text-xl font-semibold">Order Summary</h1>
          <div className="flex justify-between">
            <span className="text-sm font-medium mt-2">
              Subtotal ({getCartCount()})
            </span>
            <span className="text-sm font-medium mt-2">₹ {getCartTotal()}</span>
          </div>
          <div className="flex mb-2 justify-between">
            <span className="text-sm font-medium mt-2">Shipping</span>
            <span className="text-sm font-medium mt-2">₹ 0</span>
          </div>
        </div>
      </div>

      <div className="w-[90%] h-[0.1px] mt-5 bg-zinc-400 mx-auto"></div>

      <div className="w-full mt-5 mx-2 px-5">
        <h2 className="text-lg font-semibold">
          Total Price : ₹ {getCartTotal()}{" "}
        </h2>

        <div className="mt-5">
          <NavLink
            to={"/checkout"}
            className="bg-blue-600  px-5 py-3 rounded-lg text-white font-semibold"
          >
            Proceed to Checkout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
