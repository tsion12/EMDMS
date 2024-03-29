import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaFileSignature } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { MdAssignment } from "react-icons/md";
import MOLSLogo from "../../../assets/svg/MOLSLogo.svg";
import MOLSLogoText from "../../../assets/svg/MOLSLogoText.svg";
import { Link, useLocation } from "react-router-dom";
import { BsPersonBadgeFill, BsFillBagCheckFill } from "react-icons/bs";
import { BsPersonFillAdd } from "react-icons/bs";
import { FcInspection } from "react-icons/fc";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/agency") {
      setActivePage("Dashboard");
    } else if (location.pathname === "/dashboard/documents") {
      setActivePage("Documents");
    } else if (location.pathname === "/agency/commission") {
      setActivePage("Commission");
    } else if (location.pathname === "/agency/job-order") {
      setActivePage("Job Order");
    } else if (location.pathname === "/agency/contracts") {
      setActivePage("Contracts");
    } else if (location.pathname === "/agency/stuff") {
      setActivePage("Staff");
    } else if (location.pathname === "/agency/inspection") {
      setActivePage("inspection");
    }
  }, [location]);
  return (
    <>
      <div
        className={`${
          sidebarOpen ? "w-[280px]" : "w-[120px]"
        }  h-full bg-[#F9F9F9] py-14 px-6 z-10 text-xs customHeight hidden md:flex flex-col gap-3 items-end transition-all duration-200 ease-in-out relative`}>
        <div
          onClick={() => {
            setSidebarOpen((prev) => !prev);
          }}
          className="h-12 w-10 bg-emdmsPrimary/5 flex justify-center items-center text-emdmsPrimary cursor-pointer rounded-md group transition-all duration-300 ease-in-out mb-8">
          <FaAngleLeft
            className={`${sidebarOpen ? "rotate-0" : "rotate-180"} text-lg`}
          />
        </div>
        <Link
          to="/agency"
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
          to="/agency/commission"
          className={`${
            activePage === "Commission"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <BsPersonBadgeFill className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Commission Report
            </p>
          )}
        </Link>
        <Link
          to="/agency/job-order"
          className={`${
            activePage === "Job Order List"
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
          to="/agency/license"
          className={`${
            activePage === "license"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <MdAssignment className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              License
            </p>
          )}
        </Link>
        <Link
          to="/agency/contracts"
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
        <Link
          to="/agency/stuff"
          className={`${
            activePage === "staff"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <BsPersonFillAdd className="text-2xl" />

          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Staff Members
            </p>
          )}
        </Link>
        <Link
          to="/agency/inspection"
          className={`${
            activePage === "inspection"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <FcInspection className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Inspection
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

export default SideBar;
