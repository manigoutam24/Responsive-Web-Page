import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./route/Router";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
};

export default App;
