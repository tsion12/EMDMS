import React, { useState } from "react";
import SearchClipart from "../../../assets/images/searchClipart.png";
import AgencyInformation from "./pages/AgencyInformation";

const InspectionApplication = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  return (
    <div className="flex items-start space-x-6 w-full  min-h-screen  pb-10">
      {/* left side */}
      {currentPage === "" && (
        <>
          <div className="flex flex-col items-center w-[35%] space-y-6">
            {/* tabs */}
            <div className="bg-white flex justify-around items-center w-full rounded-xl shadow-lg p-2 text-[#7D7D7D]">
              <button
                onClick={() => {
                  setCurrentTab("applications");
                }}
                className={`${
                  currentTab === "applications"
                    ? "text-emdmsPrimary font-semibold"
                    : ""
                }`}>
                Applications
              </button>
              <button
                onClick={() => {
                  setCurrentTab("Approved");
                }}
                className={`${
                  currentTab === "Approved"
                    ? "text-emdmsPrimary font-semibold"
                    : ""
                }`}>
                Approved
              </button>
              <button
                onClick={() => {
                  setCurrentTab("Rejected");
                }}
                className={`${
                  currentTab === "Rejected"
                    ? "text-emdmsPrimary font-semibold"
                    : ""
                }`}>
                Rejected{" "}
              </button>
            </div>
            {/* the 2nd card */}
            {currentTab === "applications" && (
              <div className="bg-white flex flex-col space-y-4 items-start w-full rounded-xl shadow-lg p-6">
                <div className="text-lg font-bold">Agency ID: 12345678</div>
                <div className="text-[#A3A3A3] w-full tracking-wide text-sm">
                  License numbers are typically unique identifiers issued by
                  specific authorities or organizations for specific purposes
                </div>
                <div className="flex justify-end w-full text-white pt-3">
                  <button
                    onClick={() => {
                      setCurrentPage("agencyInfo");
                    }}
                    className="bg-[#005656B2] px-6 py-2 rounded-lg">
                    inspect
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* right side */}
          {currentTab === "applications" && (
            <div className="flex flex-col items-center justify-center w-[60%] p-2  space-y-6">
              <div w-full>
                <img src={SearchClipart} alt="" className="w-[400px]" />
              </div>

              <div className="text-emdmsPrimary text-3xl tracking-wider max-w-md font-bold text-center">
                Click on inspect buttons to start evaluate the agency{" "}
              </div>
            </div>
          )}
        </>
      )}
      {currentPage === "agencyInfo" && (
        <>
          <AgencyInformation />
        </>
      )}
    </div>
  );
};

export default InspectionApplication;
