import React from "react";
import Card from "../components/Card";
import Box from "../components/Box";

const WhyChosse = () => {
  const features = [
    {
      id: 1,
      icon: "🚚",
      title: "Fast Delivery",
      description: "Get your products delivered quickly to your doorstep.",
    },
    {
      id: 2,
      icon: "🔒",
      title: "Secure Payment",
      description: "Safe and secure payment options for every purchase.",
    },
    {
      id: 3,
      icon: "⭐",
      title: "Premium Quality",
      description: "High quality products selected for your everyday needs.",
    },
    {
      id: 4,
      icon: "📞",
      title: "24/7 Support",
      description: "Our support team is always ready to help you.",
    },
  ];
  return (
    <div className="w-full my-5">
      <div className="mt-5">
        <h1 className="text-3xl text-center font-semibold">Why Choose Us?</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5">
        {features.map((feature) => {
          return <Box key={feature.id} feature={feature} />;
        })}
      </div>
    </div>
  );
};

export default WhyChosse;
