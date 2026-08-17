import React from "react";
import Card from "../components/Card";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Products = ({ limit }) => {
  const products = [
    {
      id: 1,
      title: "MacBook Pro 16",
      description: "Powerful laptop for developers and creators.",
      price: 249999,
      category: "Laptop",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    },
    {
      id: 2,
      title: "iPhone 16 Pro",
      description: "Premium smartphone with powerful performance.",
      price: 119999,
      category: "Smartphone",
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
    },
    {
      id: 3,
      title: "Sony WH-1000XM5",
      description: "Wireless headphones with premium noise cancellation.",
      price: 29999,
      category: "Headphones",
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800",
    },
    {
      id: 4,
      title: "Samsung Galaxy S25",
      description: "Flagship smartphone with modern AI features.",
      price: 74999,
      category: "Smartphone",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
    },
    {
      id: 5,
      title: "Dell XPS 13",
      description: "Slim and powerful laptop for everyday productivity.",
      price: 145990,
      category: "Laptop",
      image:
        "https://images.unsplash.com/photo-1593642532400-2682810df593?w=800",
    },
    {
      id: 6,
      title: "iPad Pro",
      description: "Powerful tablet for work, creativity and entertainment.",
      price: 109999,
      category: "Tablet",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800",
    },
    {
      id: 7,
      title: "Apple Watch Series 10",
      description: "Smartwatch with health and fitness tracking.",
      price: 46999,
      category: "Smartwatch",
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800",
    },
    {
      id: 8,
      title: "AirPods Pro",
      description: "Premium wireless earbuds with active noise cancellation.",
      price: 24999,
      category: "Earbuds",
      image:
        "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800",
    },
    {
      id: 9,
      title: "PlayStation 5",
      description: "Next-generation gaming console for immersive gaming.",
      price: 54999,
      category: "Gaming",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800",
    },
    {
      id: 10,
      title: "Canon EOS Camera",
      description: "Professional camera for photography and video.",
      price: 89999,
      category: "Camera",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    },
    {
      id: 11,
      title: "Microsoft Surface Laptop",
      description: "Elegant laptop designed for productivity and mobility.",
      price: 139999,
      category: "Laptop",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    },
    {
      id: 12,
      title: "Google Pixel 9 Pro",
      description: "Advanced smartphone with powerful camera technology.",
      price: 99999,
      category: "Smartphone",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    },
    {
      id: 13,
      title: "Bose QuietComfort Ultra",
      description: "Premium headphones with immersive audio.",
      price: 34999,
      category: "Headphones",
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800",
    },
    {
      id: 14,
      title: "Nintendo Switch OLED",
      description: "Portable gaming console with an OLED display.",
      price: 34999,
      category: "Gaming",
      image:
        "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800",
    },
    {
      id: 15,
      title: "GoPro HERO",
      description: "Compact action camera for adventure photography.",
      price: 39999,
      category: "Camera",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
    },
    {
      id: 16,
      title: "Samsung Galaxy Tab",
      description: "Large-screen tablet for entertainment and productivity.",
      price: 59999,
      category: "Tablet",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800",
    },
    {
      id: 17,
      title: "DJI Mini Drone",
      description: "Compact drone for aerial photography and video.",
      price: 79999,
      category: "Drone",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
    },
    {
      id: 18,
      title: "Mechanical Gaming Keyboard",
      description: "RGB mechanical keyboard built for gaming and coding.",
      price: 8999,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
    },
    {
      id: 19,
      title: "Logitech MX Master Mouse",
      description: "Premium wireless mouse for productivity.",
      price: 9999,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
    },
    {
      id: 20,
      title: "Samsung 4K Smart TV",
      description: "Large 4K display with smart entertainment features.",
      price: 89999,
      category: "Television",
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
    },
  ];
  return (
    <>
      <div className="w-full relative">
        <h1 className="text-center font-semibold text-2xl my-10 md:text-3xl lg:text-4xl">
          Our Products
        </h1>

        <div className="w-35 md:w-50 lg:w-60 h-0.5 md:h-[2.5px] bg-zinc-500 rounded-xl absolute top-8 md:top-9 lg:top-10 left-31 md:left-79 lg:left-160"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {products.slice(0, limit || products.length).map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>

        {limit && limit < products.length && (
          <div className="flex justify-center items-center mt-2">
            <Link
              to="/products"
              className="py-3 px-4 bg-gray-400 rounded-lg text-white flex justify-center items-center gap-2 my-5 hover:bg-gray-500"
            >
              Show All Products <FaArrowRightLong className="pt-1" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
