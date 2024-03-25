import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Nofile from "../../../assets/svg/noFile.svg";
import CreateCompliantSideModal from "./components/CreateCompliantSideModal";
import { BsPostcard, BsPostcardHeart } from "react-icons/bs";

const Compliant = () => {
  const [initialView, setInitialView] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [openSideModal, setOpenSideModal] = useState(false);
  return (
    <div className="flex flex-col mt-10 ml-10 mr-10 space-y-6 w-full">
      {openSideModal && (
        <CreateCompliantSideModal setOpenSideModal={setOpenSideModal} />
      )}
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between items-end w-full">
        <div className="flex flex-col space-y-1">
          <div className="text-3xl font-semibold text-emdmsPrimary font-poppins">
            Compliant Management
          </div>
          <div className="max-w-lg text-[#9898A3] text-sm font-poppins">
            Under this table you will find a list of report issues that you
            created as a part of labour.
          </div>
        </div>
        <div
          onClick={() => {
            setOpenSideModal(true);
          }}
          className="w-40 cursor-pointer py-3 gap-2 rounded-r-md text-xs flex items-center justify-center  bg-emdmsPrimary text-white">
          <IoMdAdd className="text-lg" />
          Request Compliant
        </div>
      </div>
      {initialView && (
        <div className=" w-full h-full flex flex-col items-center justify-center">
          <img src={Nofile} alt="" />
          <div className="text-emdmsPrimary max-w-sm text-lg text-center ">
            In this section, you will find the reports you applied for the
            labor.
          </div>
        </div>
      )}
      {!initialView && (
        <div className="bg-white p-10 ">
          {" "}
          <div className="flex w-full justify-between pb-10 items-center">
            <div className="flex items-start w-2/4 gap-10 justify-start text-sm border border-l-0 border-r-0 border-t-0 py-4">
              <div
                onClick={() => {
                  setActiveTab("all");
                }}
                className={`${
                  activeTab === "all" ? "text-emdmsPrimary font-bold" : ""
                } flex cursor-pointer items-center justify-center space-x-2`}>
                <BsPostcard />
                <p>All Complains</p>
              </div>{" "}
              <div
                onClick={() => {
                  setActiveTab("Pending");
                }}
                className={`${
                  activeTab === "Pending" ? "text-emdmsPrimary font-bold" : ""
                } flex cursor-pointer items-center justify-center space-x-2`}>
                <BsPostcard />
                <p>Pending</p>
              </div>{" "}
              <div
                onClick={() => {
                  setActiveTab("resolved");
                }}
                className={`${
                  activeTab === "resolved" ? "text-emdmsPrimary font-bold" : ""
                } flex cursor-pointer  items-center justify-center space-x-2`}>
                <BsPostcardHeart />
                <p>Resolved</p>
              </div>{" "}
              <div
                onClick={() => {
                  setActiveTab("NotResolved");
                }}
                className={`${
                  activeTab === "NotResolved"
                    ? "text-emdmsPrimary font-bold"
                    : ""
                } flex cursor-pointer items-center justify-center space-x-2`}>
                <BsPostcard />
                <p>Not Resolved</p>
              </div>{" "}
            </div>

            <form class="max-w-md w-1/4 ">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          <div className=" h-[65vh] overflow-y-auto flex flex-col space-y-5">
            Table
          </div>
        </div>
      )}
    </div>
  );
};

export default Compliant;
