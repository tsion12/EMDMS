import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaFileSignature } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { MdAssignment } from "react-icons/md";
import MOLSLogo from "../../../assets/svg/MOLSLogo.svg";
import MOLSLogoText from "../../../assets/svg/MOLSLogoText.svg";
import { Link, useLocation } from "react-router-dom";
import { BsPersonBadgeFill, BsFillBagCheckFill } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";
const Aside = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/foreign/dashboard") {
      setActivePage("Dashboard");
    } else if (location.pathname === "/foreign/documents") {
      setActivePage("Documents");
    } else if (location.pathname === "/foreign/profile") {
      setActivePage("Profile");
    } else if (location.pathname === "/foreign/job-order") {
      setActivePage("Job Order");
    } else if (location.pathname === "/foreign/contracts") {
      setActivePage("Contracts");
    } else if (location.pathname === "/foreign/staff-members") {
      setActivePage("Staff Members");
    } else if (location.pathname === "/foreign/compliant") {
      setActivePage("Compliant");
    } else if (location.pathname === "/foreign/license") {
      setActivePage("License");
    }
  }, [location]);
  return (
    <>
      <div
        className={`${
          sidebarOpen ? "w-[280px]" : "w-[120px]"
        }  h-full bg-[#F9F9F9] py-1 p-5 pt-10 z-10 customHeight hidden md:flex flex-col gap-6 items-end transition-all duration-200 ease-in-out relative`}>
        <div
          onClick={() => {
            setSidebarOpen((prev) => !prev);
          }}
          className="h-12 w-10 bg-emdmsPrimary/5 flex justify-center items-center text-emdmsPrimary cursor-pointer rounded-md group transition-all duration-300 ease-in-out mb-8">
          <FaAngleLeft
            className={`${sidebarOpen ? "rotate-0" : "rotate-180"} text-sm`}
          />
        </div>
        <Link
          to="/foreign/dashboard"
          className={`${
            activePage === "Dashboard"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <BiSolidDashboard className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Dashboard
            </p>
          )}
        </Link>
        <Link
          to="/foreign/license"
          className={`${
            activePage === "License"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <BsPersonBadgeFill className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              License
            </p>
          )}
        </Link>
        <Link
          to="/foreign/compliant"
          className={`${
            activePage === "Compliant"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <BsPersonBadgeFill className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Compliant
            </p>
          )}
        </Link>
        <Link
          to="/foreign/profile"
          className={`${
            activePage === "Profile"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <BsPersonBadgeFill className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Profile
            </p>
          )}
        </Link>
        <Link
          to="/foreign/partnership"
          className={`${
            activePage === "Profile"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <FaHandshakeSimple className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Partnership
            </p>
          )}
        </Link>
        <Link
          to="/foreign/job-order"
          className={`${
            activePage === "Job Order"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <BsFillBagCheckFill className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Job Order
            </p>
          )}
        </Link>
        <Link
          to="/foreign/documents"
          className={`${
            activePage === "Documents"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <MdAssignment className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Documents
            </p>
          )}
        </Link>
        <Link
          to="/foreign/contracts"
          className={`${
            activePage === "Contracts"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <FaFileSignature className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Contracts
            </p>
          )}
        </Link>
        <div
          className={` ${
            sidebarOpen ? "bg-green40/10" : ""
          } absolute bottom-4 left-1/2 -translate-x-1/2 p-4 w-4/5  rounded-lg flex flex-col gap-2 items-center justify-center transition-all duration-500 ease-in-out`}>
          {sidebarOpen ? (
            <>
              <p className="text-N60 text-sm">Powered by</p>
              <img
                src={MOLSLogoText}
                alt="Mols Logo"
                className={`${
                  sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
                } w-full transition-all duration-500 ease-in-out`}
              />
            </>
          ) : (
            <img
              src={MOLSLogo}
              alt="Mols Logo"
              className={`${
                sidebarOpen ? "opacity-0 invisible" : "opacity-100 visible"
              } w-full transition-all duration-500 ease-in-out`}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Aside;
