import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../assets/Logo.svg";
import User from "../../../assets/Ellipse 2.png";
import Ethio from "../../../assets/ethio.svg";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutsideDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("click", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <header className="bg-white w-full flex z-20 justify-between items-center relative h-24 ">
      <div className="flex gap-8 items-center w-1/2 lg:bg-transparent bg-emdmsPrimary">
        <div className="bg-[#005656] lg:w-[230px] items-center h-full">
          <img src={Logo} alt="Company Logo" className="h-24 px-8 py-4" />
        </div>
        <div className="text-[#005656] font-bold">
          <h1 className="hidden lg:block text-xl xl:text-2xl ">
            Ethiopian Oveseas Workers
          </h1>
        </div>
      </div>
      <img
        src={Ethio}
        alt="Company Logo"
        className="h-full absolute top-0 left-1/2 -translate-x-1/2"
      />

      <div className="top-0 bg-white flex items-center p-1 justify-end space-x-4 w-1/2">
        <div className="hidden lg:block">
          <span className="text-black font-semibold">Abebe Kebede</span>
          <span className="block text-sm text-black">ID: 123456</span>{" "}
        </div>

        <div className="relative flex items-center px-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownToggle();
            }}
            className="rounded-full bg-primary ">
            <img
              src={User}
              alt="User Profile"
              className="h-14 w-14 md:w-16 md:h-16 rounded-full"
            />
          </button>
          {/* SVG icon for the dropdown */}
          {/* <svg
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownToggle();
            }}
            className={`w-6 h-6 ml-1 text-black cursor-pointer ${
              showDropdown ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg> */}
          {showDropdown && (
            <ul
              ref={dropdownRef}
              className="absolute top-20 w-1/2 bg-white text-gray-800 rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
