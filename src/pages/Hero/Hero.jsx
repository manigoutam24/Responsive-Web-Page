import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Products from "../Products";
import WhyChosse from "../WhyChosse";
import About from "../About/About";
import Contact from "../Contact";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleProducts = () => {
    navigate("/products");
  };
  return (
    <>
      <div className="lg:w-full lg:flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:my-30 mt-6">
        {/* LEFT */}
        <div className="lg:w-[50%] lg:flex flex-col text-center lg:pt-5 pt-5 md:pt-10">
          <h1 className="lg:text-6xl md:text-6xl text-4xl text-center font-semibold">
            <span className="">Build Your Future</span> <br />
            <span className="lg:text-4xl md:leading-0 md:tracking-tight md:text-4xl text-2xl">
              With{" "}
              <span className="text-orange-400 font-semibold">Technology</span>
            </span>
          </h1>

          <div className="pt-2 lg:pt-3 md:pt-10">
            <p className="text-[20px] font-semibold leading-tight tracking-tight md:text-3xl">
              Discover powerful products <br />
              designed for your everyday life.
            </p>
          </div>
          <div className="flex justify-center items-center lg:flex-row flex-col gap-3 lg:gap-9 lg:mt-8 mt-8 md:mt-15 md:gap-6">
            <button
              onClick={handleProducts}
              className="bg-gray-400 py-3 px-4 flex justify-center items-center gap-2 rounded-lg w-60 lg:w-50 text-white hover:bg-gray-500 cursor-pointer"
            >
              Explore Products <FaArrowRightLong className="pt-1" />
            </button>
            <button className="bg-gray-400 flex justify-center items-center gap-2 py-3 px-4 rounded-lg w-60 lg:w-50 text-white hover:bg-gray-500 cursor-pointer">
              Learn More <FaArrowRightLong className="pt-1" />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center lg:w-[50%] mt-10">
          <img
            className="rounded-lg w-80 lg:w-150 md:w-120 md:mt-10 lg:h-80 md:h-95"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Technology"
          />
        </div>
      </div>
      <Products limit={3} />
      <WhyChosse />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Hero;
