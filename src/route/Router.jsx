import { createBrowserRouter } from "react-router-dom";
import Hero from "../pages/Hero/Hero";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../layouts/NotFound";
import Products from "../pages/Products";
// import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/auth/Login";
import Cart from "../pages/Cart";
import About from "../pages/About/About";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/order-success",
    element: <OrderSuccess />,
  },
]);

export default router;
