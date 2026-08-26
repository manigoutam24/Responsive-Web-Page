import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./route/Router";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
