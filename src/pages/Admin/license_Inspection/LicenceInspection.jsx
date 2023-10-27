import React, { useState } from "react";
import InspectionApplication from "./InspectionApplication";

const LicenceInspection = () => {
  const [page, setPage] = useState("");
  return (
    <div className="flex flex-col mt-10 ml-10 mr-10 space-y-6 w-full">
      <div className="flex flex-col space-y-1">
        <div className="text-3xl font-semibold text-emdmsPrimary font-poppins">
          Applications
        </div>
        <div className="max-w-lg text-[#9898A3] text-sm font-poppins">
          Application lists where the applicants submitted their documents to
          see if they are legit or not
        </div>
      </div>
      {page === "" && (
        <div className=" h-[70vh] overflow-y-auto noscrollBar">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
            <div>
              <div className="flex flex-col bg- rounded-lg px-10 space-y-2 p-16 bg-white">
                <div className="text-[#006666] font-semibold text-lg">
                  Pre-license Inspection
                </div>
                <div className="text-[#555555] text-sm max-w-[300px]">
                  Upload the necessary registration documents, such as business
                  registration certificates, tax identification numbers, and
                  other relevant documents.
                </div>
                <div>
                  <button
                    onClick={() => {
                      setPage("pageOne");
                    }}
                    className="bg-emdmsPrimary text-white px-10 py-2 rounded-lg text-sm mt-2">
                    Inspect
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col bg-white rounded-lg px-10 space-y-2 p-16 backdrop-filter backdrop-blur-lg">
                <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"></div>
                <div className="text-[#006666] font-semibold text-lg">
                  Pre-license Inspection
                </div>
                <div className="text-[#555555] text-sm max-w-[300px]">
                  Upload the necessary registration documents, such as business
                  registration certificates, tax identification numbers, and
                  other relevant documents.
                </div>
                <div>
                  <button className="bg-emdmsPrimary text-white px-10 py-2 rounded-lg text-sm mt-2">
                    Inspect
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col bg-white rounded-lg px-10 space-y-2 p-16 backdrop-filter backdrop-blur-lg">
                <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"></div>
                <div className="text-[#006666] font-semibold text-lg">
                  Pre-license Inspection
                </div>
                <div className="text-[#555555] text-sm max-w-[300px]">
                  Upload the necessary registration documents, such as business
                  registration certificates, tax identification numbers, and
                  other relevant documents.
                </div>
                <div>
                  <button className="bg-emdmsPrimary text-white px-10 py-2 rounded-lg text-sm mt-2">
                    Inspect
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col bg-white rounded-lg px-10 space-y-2 p-16 backdrop-filter backdrop-blur-lg">
                <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"></div>
                <div className="text-[#006666] font-semibold text-lg">
                  Pre-license Inspection
                </div>
                <div className="text-[#555555] text-sm max-w-[300px]">
                  Upload the necessary registration documents, such as business
                  registration certificates, tax identification numbers, and
                  other relevant documents.
                </div>
                <div>
                  <button className="bg-emdmsPrimary text-white px-10 py-2 rounded-lg text-sm mt-2">
                    Inspect
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col bg-white rounded-lg px-10 space-y-2 p-16 backdrop-filter backdrop-blur-lg">
                <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"></div>
                <div className="text-[#006666] font-semibold text-lg">
                  Pre-license Inspection
                </div>
                <div className="text-[#555555] text-sm max-w-[300px]">
                  Upload the necessary registration documents, such as business
                  registration certificates, tax identification numbers, and
                  other relevant documents.
                </div>
                <div>
                  <button className="bg-emdmsPrimary text-white px-10 py-2 rounded-lg text-sm mt-2">
                    Inspect
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col bg-white rounded-lg px-10 space-y-2 p-16 backdrop-filter backdrop-blur-lg">
                <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"></div>
                <div className="text-[#006666] font-semibold text-lg">
                  Pre-license Inspection
                </div>
                <div className="text-[#555555] text-sm max-w-[300px]">
                  Upload the necessary registration documents, such as business
                  registration certificates, tax identification numbers, and
                  other relevant documents.
                </div>
                <div>
                  <button className="bg-emdmsPrimary text-white px-10 py-2 rounded-lg text-sm mt-2">
                    Inspect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {page === "pageOne" && <InspectionApplication />}
    </div>
  );
};

export default LicenceInspection;
