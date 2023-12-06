import React, { useState } from "react";
import PartnershipTable from "../../components/layout/Foriegn/PartnershipTable";

import Search from "../../assets/svg/Vector.svg";
import Button from "../../components/utilities/Button";
import PaginationComponent from "../../components/utilities/PaginationComponent";
import { CiCirclePlus, CiFilter, CiSearch } from "react-icons/ci";
import PartnershipApprovalTable from "./partnershipPages/PartnershipApprovalTable";

const PartnershipApproval = () => {
  const [activeTab, setActiveTab] = useState("application");

  const buttons = [
    { id: 1, label: " 1" },
    { id: 2, label: " 2" },
    { id: 3, label: " 3" },
    { id: 4, label: " 4" },
  ];
  return (
    <div className="flex flex-col m-10 space-y-3   w-full">
      <div className="space-y-1">
        <p className="text-emdmsPrimary text-3xl font-medium ">
          Partnership Approval
        </p>
        <p className="text-xs text-N70 font-poppins font-medium">
          Application lists where the applicants submitted their documents to
          <br /> see of they are legit or not
        </p>
      </div>
      <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row items-center justify-between w-full">
        {" "}
        <div className="flex  py-4 px-3  bg-white rounded-lg shadow-sm justify-between items-center text-[#7D7D7D]  font-poppins w-full lg:w-[40%] overflow-x-auto">
          <Button
            handelClick={() => {
              setActiveTab("application");
            }}
            custom={`${
              activeTab === "application"
                ? "text-emdmsPrimary  font-bold"
                : "text-N80 bg-white"
            } px-4  w-full w-max text-sm whitespace-nowrap`}>
            Applications
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
              } px-4  w-full w-max text-sm  whitespace-nowrap`}>
              Approved
            </Button>
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
              } px-4  w-full w-max text-sm  whitespace-nowrap`}>
              Rejected
            </Button>
          </div>
        </div>
        <div className="flex space-x-3 w-full lg:w-[30%]  items-center justify-center">
          <div class="relative w-full ">
            <div class="absolute inset-y-0 left-0 flex text-[#212121] items-center pl-3 pointer-events-none">
              <CiSearch />
            </div>

            <input
              type="search"
              id="default-search"
              class="block w-full p-3 pl-10 pr-10 text-sm placeholder:text-[#212121] focus:outline-none border border-[#81818133] rounded-md bg-gray-50"
              placeholder="Search"
              required
            />

            <div class="absolute inset-y-0 right-0  w-24 flex space-x-1  border rounded-l-none border-[#81818133] rounded-md items-center pr-3  pointer-events-none">
              <div className="pl-2">
                <CiFilter className="text-[#212121]" />
              </div>
              <div className="text-sm">Filters</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {activeTab === "application" && <PartnershipApprovalTable />}
      </div>
      <div className="mt-10">
        {activeTab === "approved" && <PartnershipApprovalTable />}
      </div>
      <div className="mt-10">
        {activeTab === "rejected" && <PartnershipApprovalTable />}
      </div>
      <div className="flex justify-end   ">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default PartnershipApproval;
