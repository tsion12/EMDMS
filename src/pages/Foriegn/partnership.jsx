import React, { useState } from "react";
import PartnershipTable from "../../components/layout/Foriegn/PartnershipTable";

import Search from "../../assets/svg/Vector.svg";
import Button from "../../components/utilities/Button";
const Partnership = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isActive, setIsActive] = useState(1);

  const handleClick = (buttonId) => {
    setIsActive(buttonId);
  };
  const handleNext = () => {
    setIsActive((prevActive) => (prevActive % 4) + 1);
  };
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
        <div className="flex  py-3  bg-white rounded-lg shadow-sm justify-between items-center text-[#7D7D7D] text-sm font-poppins w-[40%]">
          <Button
            handelClick={() => {
              setActiveTab("new");
            }}
            custom={`${
              activeTab === "new"
                ? "text-emdmsPrimary font-bold"
                : "text-N80 bg-white"
            } px-4  w-full w-max  whitespace-nowrap`}>
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
              } px-4  w-full w-max  whitespace-nowrap`}>
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
              } px-4  w-full w-max  whitespace-nowrap`}>
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
      </div>
    </>
  );
};

export default Partnership;
