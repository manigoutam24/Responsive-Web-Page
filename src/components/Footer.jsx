import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleSection = (e) => {
    setOpenSection(openSection === e ? null : e);
  };

  return (
    <footer className="w-full bg-zinc-100 pt-3">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between lg:justify-between w-80 md:w-200 lg:w-360 mx-auto bg-zinc-200 p-5 rounded-md">
        {/* Brand */}
        <div className="flex flex-col gap-2 mr-3">
          <h1 className="text-xl font-semibold">🛍 TechStore</h1>

          <p className="text-[17px] text-gray-600 leading-relaxed">
            Modern technology for all
          </p>
        </div>

        {/* Footer Sections */}
        <div className="flex w-full flex-col md:flex-row justify-between md:justify-around gap-5 mb-5">
          {/* ================= LINKS ================= */}
          <div className="flex flex-col mt-3">
            <div
              onClick={() => handleSection("Links")}
              className="flex justify-between items-center cursor-pointer md:cursor-none lg:cursor-none"
            >
              <h5 className="font-semibold mb-2">Links</h5>

              <MdOutlineKeyboardArrowDown className="block md:hidden text-xl" />
            </div>

            <ul
              className={`${
                openSection === "Links" ? "flex flex-col" : "hidden"
              } md:flex md:flex-col`}
            >
              <Link
                to="/"
                className="py-1 font-semibold lg:py-2 lg:px-5 rounded-lg hover:bg-gray-300 text-center"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="py-1 font-semibold lg:py-2 lg:px-5 rounded-lg hover:bg-gray-300 text-center"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="py-1 font-semibold lg:py-2 lg:px-5 rounded-lg hover:bg-gray-300 text-center"
              >
                About
              </Link>
            </ul>
          </div>

          {/* ================= SUPPORT ================= */}
          <div className="flex flex-col mt-3">
            <div
              onClick={() => handleSection("Support")}
              className="flex justify-between items-center cursor-pointer md:cursor-none lg:cursor-none"
            >
              <h5 className="font-semibold mb-2">Support</h5>

              <MdOutlineKeyboardArrowDown className="block md:hidden text-xl" />
            </div>

            <ul
              className={`${
                openSection === "Support" ? "flex flex-col" : "hidden"
              } md:flex md:flex-col`}
            >
              <Link
                to="/faq"
                className="py-1 font-semibold lg:py-2 lg:px-5 rounded-lg hover:bg-gray-300 text-center"
              >
                FAQ
              </Link>

              <Link
                to="/contact"
                className="py-1 font-semibold lg:py-2 lg:px-5 rounded-lg hover:bg-gray-300 text-center"
              >
                Contact
              </Link>

              <Link
                to="/privacy"
                className="py-1 font-semibold lg:py-2 lg:px-5 rounded-lg hover:bg-gray-300 text-center"
              >
                Privacy
              </Link>
            </ul>
          </div>

          {/* ================= FOLLOW US ================= */}
          <div className="flex flex-col mt-3">
            <div
              onClick={() => handleSection("FollowUs")}
              className="flex justify-between items-center lg:text-center cursor-pointer md:cursor-none lg:cursor-none"
            >
              <h5 className="font-semibold mb-2">Follow Us</h5>
              <MdOutlineKeyboardArrowDown className="block md:hidden text-xl" />
            </div>

            <ul
              className={`${
                openSection === "FollowUs" ? "flex flex-col" : "hidden"
              } md:flex md:flex-col`}
            >
              <Link
                to="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="py-1 font-semibold lg:py-2 lg:px-5 rounded-lg hover:bg-gray-300 text-center"
              >
                GitHub
              </Link>

              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="py-1 font-semibold lg:py-2 lg:px-5 rounded-lg hover:bg-gray-300 text-center"
              >
                LinkedIn
              </Link>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-3 hidden md:block md:pb-10 lg:mb-10">
          <h2 className="text-lg font-semibold">
            © 2026 TechStore <br />
            All rights reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
