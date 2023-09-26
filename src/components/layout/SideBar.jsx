import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { MdAssignment } from "react-icons/md";
import MOLSLogo from "../../assets/svg/MOLSLogo.svg";
import MOLSLogoText from "../../assets/svg/MOLSLogoText.svg";
import { Link, useLocation } from "react-router-dom";
import { BsPersonAdd } from "react-icons/bs";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";

const Aside = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActivePage("Dashboard");
    } else if (location.pathname === "/foreign-management") {
      setActivePage("Foreign Management");
    } else if (location.pathname === "/job-order") {
      setActivePage("Job Order");
    } else if (location.pathname === "/staff-members") {
      setActivePage("Staff Members");
    }
  }, [location]);
  return (
    <>
      <div
        className={`${
          sidebarOpen ? "w-[230px] px-[2%]" : "w-0 md:w-[120px]"
        } h-full bg-[#F9F9F9] py-20 md:px-[2%] customHeight fixed flex flex-col gap-6 items-end transition-all duration-200 ease-in-out md:relative z-20`}>
        <div
          onClick={() => {
            setSidebarOpen((prev) => !prev);
          }}
          className="h-12 w-10 bg-emdmsPrimary/5 md:flex justify-center items-center text-emdmsPrimary cursor-pointer rounded-md group transition-all duration-300 ease-in-out mb-8 hidden">
          <FaAngleLeft
            className={`${sidebarOpen ? "rotate-0" : "rotate-180"} text-lg`}
          />
        </div>
        <div
          onClick={() => {
            setSidebarOpen((prev) => !prev);
          }}
          className="bg-emdmsPrimary/5 fixed top-24 left-2 text-emdmsPrimary cursor-pointer rounded-md group transition-all duration-300 ease-in-out mb-8 md:hidden z-50 p-2 ">
          {!sidebarOpen ? (
            <HiOutlineBars3
              className={`${sidebarOpen ? "rotate-0" : "rotate-180"} text-xl `}
            />
          ) : (
            <HiXMark
              className={`${sidebarOpen ? "rotate-0" : "rotate-180"} text-xl `}
            />
          )}
        </div>
        <Link
          to="/admin"
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
          to="/admin/foreign-management"
          className={`${
            activePage === "Foreign Management"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <BsPersonAdd className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Local Applicants
            </p>
          )}
        </Link>
        {/* <Link
          to="/documents"
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
        </Link> */}

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
