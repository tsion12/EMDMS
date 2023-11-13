import React, { useState } from "react";
import SearchClipart from "../../../assets/images/searchClipart.png";
import AgencyInformation from "./pages/AgencyInformation";
import ApprovedTab from "./pages/ApprovedTab";
import RejectedTab from "./pages/RejectedTab";

const InspectionApplication = () => {
  const [currentTab, setCurrentTab] = useState("applications");
  const [currentPage, setCurrentPage] = useState("");
  return (
    <div className="flex flex-col items-start space-y-6 w-full   noscrollBar  h-[70vh] overflow-y-auto pb-10">
      {/* tabs */}
      {currentPage === "" && (
        <div className="bg-white flex justify-around w-full lg:w-[35%] items-center rounded-xl shadow-lg p-2 text-[#7D7D7D]">
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
              currentTab === "Approved" ? "text-emdmsPrimary font-semibold" : ""
            }`}>
            Approved
          </button>
          <button
            onClick={() => {
              setCurrentTab("Rejected");
            }}
            className={`${
              currentTab === "Rejected" ? "text-emdmsPrimary font-semibold" : ""
            }`}>
            Rejected{" "}
          </button>
        </div>
      )}

      {currentTab === "applications" && (
        <>
          {currentPage === "" && (
            <>
              <div className="flex flex-col items-center lg:flex-row lg:items-start w-full ">
                {/* left side */}
                <div className="w-full  lg:w-[35%]">
                  <div className="bg-white flex flex-col space-y-4 items-start w-full rounded-xl shadow-lg p-6">
                    <div className="text-lg font-bold">Agency ID: 12345678</div>
                    <div className="text-[#A3A3A3] w-full tracking-wide text-sm">
                      License numbers are typically unique identifiers issued by
                      specific authorities or organizations for specific
                      purposes
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
                </div>

                {/* right side */}
                <div className="flex flex-col items-center justify-center w-64 lg:w-[60%] p-2  space-y-6">
                  <div w-full>
                    <img src={SearchClipart} alt="" className="w-[400px]" />
                  </div>

                  <div className="text-emdmsPrimary text-xl lg:text-3xl tracking-wider max-w-lg lg:max-w-md font-bold text-center">
                    Click on inspect buttons to start evaluate the agency{" "}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
      {currentTab === "Approved" && (
        <>
          {currentPage === "" && (
            <>
              <ApprovedTab />
            </>
          )}
        </>
      )}
      {currentTab === "Rejected" && (
        <>
          {currentPage === "" && (
            <>
              <RejectedTab />
            </>
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
