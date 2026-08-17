import React from "react";

const Box = ({ feature }) => {
  return (
    <div className="w-full mx-auto p-5">
      <div className="flex flex-col justify-center text-center">
        <h2 className="text-2xl">{feature.icon}</h2>
        <h1 className="text-lg font-semibold">{feature.title}</h1>
        <p className="text-base leading-relaxed md:text-lg">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default Box;
