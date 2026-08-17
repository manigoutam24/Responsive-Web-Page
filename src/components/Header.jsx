import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    setIsOpen(false);
  };

  return (
    <div className="w-full h-21 bg-white shadow-lg sticky top-0 z-50">
      <div className="relative flex justify-between items-center pt-6 mx-5">
        <Link
          to={"/"}
          className="lg:text-[16px] md:text-[20px] text-[14px] font-semibold lg:ml-5 md:ml-10"
        >
          TechStore
        </Link>

        {/* DESKTOP NAV */}

        <nav className="flex items-center">
          <div className="hidden lg:flex lg:gap-10 md:gap-5 gap-4">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `lg:text-[16px] md:text-[14px] text-[14px] font-semibold py-1.5 px-2.5 rounded-lg hover:bg-gray-300 ${isActive ? "underline underline-offset-4 decoration-red-500" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `lg:text-[16px] md:text-[14px] text-[14px] font-semibold py-1.5 px-2.5 rounded-lg hover:bg-gray-300 ${isActive ? "underline underline-offset-4 decoration-red-500" : ""}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `lg:text-[16px] md:text-[14px] text-[14px] font-semibold py-1.5 px-2.5 rounded-lg hover:bg-gray-300 ${isActive ? "underline underline-offset-4 decoration-red-500" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `lg:text-[16px] md:text-[14px] text-[14px] font-semibold py-1.5 px-2.5 rounded-lg hover:bg-gray-300 ${isActive ? "underline underline-offset-4 decoration-red-500" : ""}`
              }
            >
              Contact
            </NavLink>
            <button
              onClick={handleLogin}
              className="font-semibold py-1.5 px-2.5 bg-gray-200 text-center rounded-lg  hover:bg-gray-300"
            >
              Login
            </button>

            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                `lg:text-[16px] md:text-[14px] text-[14px] font-semibold py-1.5 px-2.5 rounded-lg hover:bg-gray-300 ${isActive ? "underline underline-offset-4 decoration-red-500" : ""}`
              }
            >
              🛒
            </NavLink>
          </div>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden md:mr-5 md:text-[16px]"
        >
          ☰
        </button>

        {/* MOBILE NAV */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full lg:hidden bg-white">
            <div className="lg:hidden flex flex-col">
              <NavLink
                onClick={() => setIsOpen(false)}
                to={"/"}
                className={({ isActive }) =>
                  `md:text-[14px] text-[14px] font-semibold py-1.5 px-2.5 rounded-lg hover:bg-gray-300 ${isActive ? "underline underline-offset-4 decoration-red-500" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setIsOpen(false)}
                to={"/products"}
                className={({ isActive }) =>
                  `md:text-[14px] text-[14px] font-semibold py-1.5 px-2.5 rounded-lg hover:bg-gray-300 ${isActive ? "underline underline-offset-4 decoration-red-500" : ""}`
                }
              >
                Products
              </NavLink>
              <NavLink
                onClick={() => setIsOpen(false)}
                to={"/about"}
                className={({ isActive }) =>
                  `md:text-[14px] text-[14px] font-semibold py-1.5 px-2.5 rounded-lg hover:bg-gray-300 ${isActive ? "underline underline-offset-4 decoration-red-500" : ""}`
                }
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setIsOpen(false)}
                to={"/contact"}
                className={({ isActive }) =>
                  `md:text-[14px] text-[14px] font-semibold py-1.5 px-2.5 rounded-lg hover:bg-gray-300 ${isActive ? "underline underline-offset-4 decoration-red-500" : ""}`
                }
              >
                Contact
              </NavLink>
              <button
                onClick={handleLogin}
                className="px-2.5 py-1.5 bg-gray-300 w-20 rounded-md"
              >
                Login
              </button>

              <NavLink
                onClick={() => setIsOpen(false)}
                to={"/cart"}
                className={({ isActive }) =>
                  `md:text-[14px] text-[14px] font-semibold py-1.5 px-2.5 rounded-lg hover:bg-gray-300 ${isActive ? "underline underline-offset-4 decoration-red-500" : ""}`
                }
              >
                🛒
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
