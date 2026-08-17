import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="my-5">
        <div>
          <h1 className="text-3xl font-semibold text-center mb-1">
            About TechStore
          </h1>
          <h3 className="text-[13px] text-center font-semibold mb-5">
            Technology that makes life easier
          </h3>
        </div>

        <div className="my-8 flex justify-between md:gap-5 lg:gap-20 md:px-2 lg:px-10">
          <img
            className="rounded-lg w-85 md:w-100 lg:w-140 md:ml-8 mx-auto"
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000"
            alt="Hero"
          />
          <p className="hidden md:block lg:block leading-relaxed md:mr-5 lg:mr-50 tracking-tight">
            <span className="font-semibold text-3xl">TechStore </span> <br />
            TechStore is a modern e-commerce platform designed to make buying
            technology products simple, convenient, and reliable. We offer a
            range of quality tech products including laptops, smartphones,
            headphones, and other modern gadgets. Our goal is to provide
            customers with a smooth shopping experience, secure payments, fast
            delivery, and reliable customer support. Whether you're looking for
            a powerful laptop, the latest smartphone, or premium accessories,
            TechStore brings modern technology closer to you. Modern Technology.
            Simple Shopping. Better Experience.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Link className="py-2 px-4 bg-zinc-400 rounded-lg hover:bg-zinc-500 text-white">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
