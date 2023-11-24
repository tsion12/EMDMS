import React, { useState } from "react";
import PartnershipTable from "../../components/layout/Foriegn/PartnershipTable";
import Button from "../../components/Button";

import Search from "../../assets/svg/Vector.svg";
import Button from "../../components/utilities/Button";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Pagination } from "@tanstack/react-table";
import PaginationComponent from "../../components/utilities/PaginationComponent";
const Partnership = () => {
  const [activeTab, setActiveTab] = useState("");
  const [page, setPage] = useState("table");

  const [isActive, setIsActive] = useState(1);

  const buttons = [
    { id: 1, label: " 1" },
    { id: 2, label: " 2" },
    { id: 3, label: " 3" },
    { id: 4, label: " 4" },
  ];

  return (
    <>
      <div className="mt-10 ml-10 mr-20 mb-10 w-full h-full space-y-3">
        <div className="space-y-1 mb-8">
          <p className="text-emdmsPrimary text-3xl font-medium ">
            Partnership Management
          </p>
          <p className="text-xs text-N70 font-poppins font-medium">
            Application lists where the applicants submitted their documents to
            <br /> see of they are legit or not
          </p>
        </div>
        <div className="flex  py-4  bg-white rounded-lg shadow-sm justify-between items-center text-[#7D7D7D]  font-poppins w-[40%] ">
          <Button
            handelClick={() => {
              setActiveTab("new");
            }}
            custom={`${
              activeTab === "new"
                ? "text-emdmsPrimary font-bold"
                : "text-N80 bg-white"
            } px-4  w-full w-max  whitespace-nowrap`}
          >
            New Request
          </Button>
          <div className="flex items-center justify-center space-x-0 ">
            <Button
              handelClick={() => {
                setActiveTab("approved");
              }}
              custom={`${
                activeTab === "approved"
                  ? "text-emdmsPrimary"
                  : "text-N80 bg-white"
              } px-4  w-full w-max  whitespace-nowrap`}
            >
              Approved Requests
            </Button>
            <div className="bg-[#E59A97] h-4 w-4 rounded-full text-center text-xs text-white">
              5
            </div>
          </div>

          <div className="flex items-center justify-center space-x-0 mr-5 ">
            <Button
              handelClick={() => {
                setActiveTab("rejected");
              }}
              custom={`${
                activeTab === "rejected"
                  ? "text-emdmsPrimary"
                  : "text-N80 bg-white"
              } px-4  w-full w-max  whitespace-nowrap`}
            >
              Rejected Requests
            </Button>
            <div className="bg-[#E59A97] h-4 w-4 rounded-full text-center text-xs text-white">
              5
            </div>
          </div>
        </div>
        <div className="mt-10">
          {activeTab === "new" && <PartnershipTable />}
        </div>
        <div className="flex justify-end  mt-2 mr-5 space-x-3">
          {/* <button className="border border-[#005656] px-6 py-2 lg:py-1">
            {" "}
            <div
              onClick={() => setPage((prev) => prev - 1)}
              className=" space-x-2 items-center  flex text-[#005656]">
              {" "}
              <AiOutlineLeft />
              <div className="hidden  md:block">Previous</div>
            </div>
          </button>
          <div className="border border-[#005656] bg-white pr-2 flex space-x-6 ">
            {" "}
            <button className="bg-emdmsPrimary text-white px-3 py-1">1</button>
            <button className="text-emdmsPrimary">2</button>
            <button className="text-emdmsPrimary">3</button>
            <button className="text-emdmsPrimary">4</button>
          </div>
          <button className="border border-[#005656] px-6 py-2 lg:py-1">
            {" "}
            <div
              onClick={() => setPage((prev) => prev + 1)}
              className=" space-x-2 items-center  flex text-[#005656]">
              <div className="hidden md:block">Next</div>
              <AiOutlineRight />
            </div>
          </button> */}
          <PaginationComponent />
        </div>
      </div>
    </>
  );
};

export default Partnership;
