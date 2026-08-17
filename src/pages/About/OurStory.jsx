import React from "react";

const OurStory = () => {
  return (
    <div className="w-full mt-5">
      <h2 className="text-center text-3xl font-semibold mb-1">OUR STORY</h2>
      <div className="p-5">
        <div className="my-2 lg:my-8 flex justify-center md:justify-between lg:justify-between md:gap-5 lg:gap-20 md:px-2 lg:px-10">
          <img
            className="rounded-lg ml-5 w-85 md:80 lg:h-80 md:w-100 lg:w-140 "
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000"
            alt=""
          />
          <p className="hidden md:block lg:block text-base text-gray-700  md:text-lg leading-relaxed">
            TechStore started with a simple idea — make it easier for people to
            discover and buy reliable technology products. From laptops and
            smartphones to accessories and gaming devices, we focus on bringing
            useful products to our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
