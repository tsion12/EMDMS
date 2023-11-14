import React, { useEffect, useState } from "react";
import Logo from "../../../assets/svg/NewLogoEmdms.svg";
import Flag from "../../../assets/svg/Flag.svg";
import DefaultAvatar from "../../../assets/svg/DefaultAvatarImage.svg";
import { AiFillCaretDown } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { MdAssignment } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { BsFillBagCheckFill, BsPersonBadgeFill } from "react-icons/bs";
import { FaFileSignature } from "react-icons/fa6";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setActivePage("Dashboard");
    } else if (location.pathname.startsWith("/dashboard/documents")) {
      setActivePage("Documents");
    } else if (location.pathname.startsWith("/dashboard/profile")) {
      setActivePage("Profile");
    }
  }, [location]);

  return (
    <>
      <nav className="flex relative w-full  bg-white  z-30 justify-between items-center h-18 ">
        <div className="flex items-center relative pl-[6%] md:py-4 bg-emdmsPrimary w-2/3 lg:w-4/5">
          <img src={Logo} alt="LMIS Logo" className="h-1/2 md:h-full " />
          <div className="text-white lg:text-2xl hidden md:block font-bold pl-10 ">
            Ethio Migrant Database Management system (EMDMS)
          </div>
          <img
            src={Flag}
            alt="Flag"
            className="absolute top-0 -right-16 md:-right-24 block h-full"
          />
        </div>

        <div className="hidden md:flex gap-4 items-center justify-end pr-[3%] w-1/2 lg:w-2/5">
          <span className=" flex flex-col items-end">
            <p className="text-N40 font-bold text-sm">Abebe Kebede</p>
            <p className="text-N40 font-medium text-xs">Abebe Kebede</p>
          </span>

          <img
            src={DefaultAvatar}
            alt="Default Avatar"
            className="h-16 w-16 rounded-full border-2 border-green30"
          />

          <AiFillCaretDown className="text-lg textgreen30" />
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden flex gap-4 items-center justify-end pr-[6%] w-1/2 lg:w-2/5">
          {menuOpen ? (
            <IoClose
              onClick={() => {
                setMenuOpen(false);
              }}
              className="text-2xl cursor-pointer hover:scale-105 text-N60 hover:text-N10 transition-all duration-200 ease-in-out"
            />
          ) : (
            <HiOutlineMenu
              onClick={() => {
                setMenuOpen(true);
              }}
              className="text-2xl cursor-pointer hover:scale-105 text-N60 hover:text-N10 transition-all duration-200 ease-in-out"
            />
          )}
        </div>

        <div
          className={`${
            menuOpen
              ? "translte-x-0 visible opacity-100"
              : "translate-x-full invisible opacity-0"
          } flex flex-col gap-4 items-start bg-white absolute w-1/2 right-0 top-full p-6 transition-all duration-500 ease-in-out z-30`}>
          <div className="px-4 py-2 flex gap-4 bg-N99/40 w-full">
            <img
              src={DefaultAvatar}
              alt="Default Avatar"
              className="h-8 w-8 rounded-full border-2 border-green30"
            />{" "}
            <span className=" flex flex-col items-start">
              <p className="text-N40 font-bold text-sm">Abebe Kebede</p>
              <p className="text-N40 font-medium text-xs">ID: 56GUJ670LOIU</p>
            </span>
          </div>
          <Link
            onClick={() => {
              setMenuOpen(false);
            }}
            to="/agency"
            className={`${
              activePage === "Dashboard"
                ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
            <BiSolidDashboard className="" />

            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Dashboard
            </p>
          </Link>
          <Link
            onClick={() => {
              setMenuOpen(false);
            }}
            to="/dashboard/profile"
            className={`${
              activePage === "Profile"
                ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
            <BsPersonBadgeFill className="" />

            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Profile
            </p>
          </Link>
          <Link
            to="/agency"
            className={`${
              activePage === "Dashboard"
                ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
            <BiSolidDashboard className="text-2xl" />

            <p className="font-medium text-lg whitespace-nowrap overflow-hidden w-4/5">
              Dashboard
            </p>
          </Link>
          <Link
            to="/dashboard/profile"
            className={`${
              activePage === "Profile"
                ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
            <BsPersonBadgeFill className="text-2xl" />

            <p className="font-medium text-lg whitespace-nowrap overflow-hidden w-4/5">
              Profile
            </p>
          </Link>
          <Link
            to="/dashboard/job-order"
            className={`${
              activePage === "Job Order List"
                ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
            <BsFillBagCheckFill className="text-2xl" />

            <p className="font-medium text-lg whitespace-nowrap overflow-hidden w-4/5">
              Job Order List
            </p>
          </Link>
          <Link
            to="/dashboard/documents"
            className={`${
              activePage === "Documents"
                ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
            <MdAssignment className="text-2xl" />

            <p className="font-medium text-lg whitespace-nowrap overflow-hidden w-4/5">
              Documents
            </p>
          </Link>
          <Link
            to="/agency/license"
            className={`${
              activePage === "license"
                ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
            <MdAssignment className="text-2xl" />

            <p className="font-medium text-lg whitespace-nowrap overflow-hidden w-4/5">
              License
            </p>
          </Link>
          <Link
            to="/agency/stuff"
            className={`${
              activePage === "staff"
                ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
                : "hover:bg-N99/50 text-N60"
            } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
            <FaFileSignature className="text-2xl" />

            <p className="font-medium text-lg whitespace-nowrap overflow-hidden w-4/5">
              Staff Members
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
