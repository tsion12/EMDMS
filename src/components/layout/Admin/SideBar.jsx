import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineNoteAlt } from "react-icons/md";
import MOLSLogo from "../../../assets/svg/MOLSLogo.svg";
import MOLSLogoText from "../../../assets/svg/MOLSLogoText.svg";
import { Link, useLocation } from "react-router-dom";
import { BsPersonAdd } from "react-icons/bs";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import { MdGroupAdd } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";

const Aside = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActivePage("Dashboard");
    } else if (location.pathname === "/local-applicants") {
      setActivePage("Foreign Management");
    } else if (location.pathname === "/admin/job-order") {
      setActivePage("Job Order");
    } else if (location.pathname === "/admin/medical-examination") {
      setActivePage("Medical");
    } else if (location.pathname === "/staff-members") {
      setActivePage("Staff Members");
    } else if (location.pathname === "/admin/partnership") {
      setActivePage("Partnership");
    } else if (location.pathname === "/admin/tickets") {
      setActivePage("Ticket");
    }
  }, [location]);
  return (
    <>
      <div
        className={`${
          sidebarOpen ? "w-[230px] " : "w-0 md:w-[120px]"
        } h-full bg-[#F9F9F9] py-20 px-8 customHeight fixed flex flex-col gap-6 items-end transition-all duration-200 ease-in-out md:relative z-20`}>
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
          to="/admin/medical-examination"
          className={`${
            activePage === "Medical"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <FaBriefcaseMedical className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Medical Exam
            </p>
          )}
        </Link>
        <Link
          to="/admin/local-applicants"
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
        <Link
          to="/admin/inspection"
          className={`${
            activePage === "Documents"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <MdOutlineNoteAlt className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Inspection
            </p>
          )}
        </Link>
        <Link
          to="/admin/job-order"
          className={`${
            activePage === "job-order"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <MdOutlineNoteAlt className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Job Order
            </p>
          )}
        </Link>
        <Link
          to="/admin/partnership"
          className={`${
            activePage === "Partnership"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <MdGroupAdd className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Partnership
            </p>
          )}
        </Link>
        <Link
          to="admin/tickets"
          className={`${
            activePage === "Ticket"
              ? "bg-emdmsPrimary/10 text-emdmsPrimary  hover:bg-emdmsPrimary/20"
              : "hover:bg-N99/50 text-N60"
          } w-full flex gap-4 items-center justify-start px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out`}>
          <LuTicket className="text-2xl" />
          {sidebarOpen && (
            <p className="font-medium text-sm whitespace-nowrap overflow-hidden w-4/5">
              Create Tickets
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
