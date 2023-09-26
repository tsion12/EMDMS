import React, { useState } from "react";
import StarterClip from "../assets/images/starter.png";
import Button from "../components/Button";
import ApplicationClip from "../assets/applicationClip.png";

import { Document, Page } from "react-pdf";

const LocalApplicants = () => {
  const [activeTab, setActiveTab] = useState("");
  const [activeDoc, setActiveDoc] = useState("");
  const [showContainer, setShowContainer] = useState(false);
  const handleClick = () => {
    setShowContainer(true);
  };
  const [rejectClick, setRejectClick] = useState(false);
  const handleRejectClick = () => {};
  const pdfUrl = "../assets/sample.pdf";
  return (
    <>
      {/* main container */}
      <div className="flex flex-col mt-20 ml-10 mr-10 space-y-6 w-full">
        {/* title and subtitle */}
        <div className="flex flex-col space-y-1">
          <div className="text-3xl font-semibold text-emdmsPrimary font-poppins">
            Applications
          </div>
          <div className="max-w-lg text-[#9898A3] text-sm font-poppins">
            Application lists where the applicants submitted their documents to
            see if they are legit or not
          </div>
        </div>
        <div className="flex items-center justify-between ">
          {" "}
          {/* left side navigation container */}
          <div className="flex  py-4  bg-white rounded-lg shadow-sm justify-between items-center text-[#7D7D7D] text-sm font-poppins w-[30%]">
            <Button
              handelClick={() => {
                setActiveTab("application");
              }}
              custom={`${
                activeTab === "application"
                  ? "text-emdmsPrimary"
                  : "text-N80 bg-white"
              } px-6 py-2 w-full w-max  whitespace-nowrap`}>
              Application
            </Button>
            <Button
              handelClick={() => {
                setActiveTab("approved");
              }}
              custom={`${
                activeTab === "approved"
                  ? "text-emdmsPrimary"
                  : "text-N80 bg-white"
              } px-6 py-2 w-full w-max  whitespace-nowrap`}>
              Approved
            </Button>
            <Button
              handelClick={() => {
                setActiveTab("rejected");
              }}
              custom={`${
                activeTab === "rejected"
                  ? "text-emdmsPrimary"
                  : "text-N80 bg-white"
              } px-6 py-2 w-full w-max  whitespace-nowrap`}>
              Rejected
            </Button>
          </div>
          {/* right side navigation container */}
          <div className="flex space-x-6 px-10 bg-white  rounded-lg shadow-sm justify-between items-center text-[#7D7D7D] text-sm font-poppins w-[65%]">
            <button
              onClick={() => {
                setActiveDoc("financial");
              }}
              className={`${
                activeDoc === "financial"
                  ? "text-emdmsPrimary  border-b-emdmsPrimary border-b-4  py-5"
                  : "text-N80"
              } px-8 py-2   whitespace-nowrap`}>
              Financial
            </button>

            <button
              onClick={() => {
                setActiveDoc("business");
              }}
              className={`${
                activeDoc === "business"
                  ? "text-emdmsPrimary  border-b-emdmsPrimary border-b-4  py-5"
                  : "text-N80"
              } px-8 py-2   whitespace-nowrap`}>
              Business
            </button>
            <button
              onClick={() => {
                setActiveDoc("rent");
              }}
              className={`${
                activeDoc === "rent"
                  ? "text-emdmsPrimary  border-b-emdmsPrimary border-b-4  py-5"
                  : "text-N80"
              } px-8 py-2   whitespace-nowrap`}>
              Rent Contract
            </button>
            <button
              onClick={() => {
                setActiveDoc("slip");
              }}
              className={`${
                activeDoc === "slip"
                  ? "text-emdmsPrimary  border-b-emdmsPrimary border-b-4  py-5"
                  : "text-N80"
              } px-8 py-2   whitespace-nowrap`}>
              Slip License
            </button>
          </div>
        </div>
        {activeTab === "" && (
          <>
            <div className="mx-auto">
              <img src={StarterClip} alt="" className="w-[500px] h-[500px]" />
            </div>
          </>
        )}
        {activeTab === "application" && (
          <>
            <div className="flex justify-between h-full">
              <div className="flex flex-col space-y-4 py-10 px-10 bg-white rounded-lg shadow-sm justify-between   font-poppins w-[30%] h-[50%]">
                <div className="text-[#464255] font-semibold text-2xl">
                  License No: 12345678
                </div>
                <div className="text-sm max-w-sm tracking-wide text-[#A3A3A3] font-poppins">
                  License numbers are typically unique identifiers issued by
                  specific authorities or organizations for specific purposes
                </div>
                <div className="flex gap-16 items-center">
                  <div className="text-[#464255] text-sm font-medium font-poppins">
                    Documents
                  </div>
                  <div className="bg-emdmsPrimary px-3 py-1 text-white text-sm rounded-lg">
                    6
                  </div>
                </div>
                <div className="flex justify-end ">
                  <button
                    onClick={() => {
                      setActiveDoc("financial");
                    }}
                    className="bg-[#005656B2] px-4 py-2 rounded-lg text-white text-sm font-poppins">
                    View Document
                  </button>
                </div>
              </div>

              {activeDoc === "" && (
                <div className="flex  py-6 px-10  mx-auto text-[#7D7D7D] text-sm font-poppins w-[500px] h-[500px]">
                  <img src={ApplicationClip} alt="" className="" />
                </div>
              )}
              {activeDoc === "financial" && (
                <div className="flex space-x-4 mb-10 justify-between items-center font-poppins w-[65%] h-full ">
                  <div className=" bg-white py-4 px-10 rounded-lg shadow-sm w-[65%] h-full ">
                    {/* <Document file={pdfUrl}>
                      <Page pageNumber={1} />
                    </Document> */}
                    <div className="text-center"> PDF to be viewed</div>
                  </div>
                  <div className="flex flex-col bg-white py-4 px-4 rounded-lg shadow-sm w-[35%] h-full  ">
                    <div className="flex justify-between items-center">
                      <div className="text-2xl">Financial Documents</div>
                      <div className="text-N70 text-sm"> 250kb</div>
                    </div>
                    <div className="text-lg"> finance.jpg</div>
                    <div className="mt-20 space-y-6">
                      <button className="bg-[#008080] p-2 w-full rounded-md shadow-sm text-white font-medium">
                        Approve
                      </button>
                      {rejectClick === true && (
                        <div className=" flex flex-col space-y-3">
                          {" "}
                          <div className="bg-[#94949419] border border-gray-300 p-3 h-[200px] rounded-lg shadow-sm text-[#949494] text-xs ">
                            {" "}
                            please enter reason
                          </div>{" "}
                          <div className=" flex space-x-4 ">
                            <button className=" px-2 py-2 border border-red-500 rounded-md w-[50%] text-red-500">
                              Reject
                            </button>
                            <button
                              onClick={() => {
                                setRejectClick(false);
                              }}
                              className=" px-2 py-2 border border-green-500 rounded-md w-[50%] text-gray-500">
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                      {rejectClick === false && (
                        <button
                          onClick={() => {
                            setRejectClick(true);
                          }}
                          className="bg-white p-2 w-full rounded-md shadow-lg text-error40 font-medium">
                          Reject
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeDoc === "business" && (
                <div className="flex space-x-4 mb-10 justify-between items-center font-poppins w-[65%] h-full ">
                  <div className=" bg-white py-4 px-10 rounded-lg shadow-sm w-[65%] h-full ">
                    {/* <Document file={pdfUrl}>
                      <Page pageNumber={1} />
                    </Document> */}
                    <div className="text-center"> PDF to be viewed</div>
                  </div>
                  <div className="flex flex-col bg-white py-4 px-4 rounded-lg shadow-sm w-[35%] h-full  ">
                    <div className="flex justify-between items-center">
                      <div className="text-2xl">Business Documents</div>
                      <div className="text-N70 text-sm"> 250kb</div>
                    </div>
                    <div className="text-lg"> business.jpg</div>
                    <div className="mt-20 space-y-6">
                      <button className="bg-[#008080] p-2 w-full rounded-md shadow-sm text-white font-medium">
                        Approve
                      </button>
                      <button
                        onClick={() => {}}
                        className="bg-white p-2 w-full rounded-md shadow-lg text-error40 font-medium">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {activeDoc === "rent" && (
                <div className="flex space-x-4 mb-10 justify-between items-center font-poppins w-[65%] h-full ">
                  <div className=" bg-white py-4 px-10 rounded-lg shadow-sm w-[65%] h-full ">
                    {/* <Document file={pdfUrl}>
                      <Page pageNumber={1} />
                    </Document> */}
                    <div className="text-center"> PDF to be viewed</div>
                  </div>
                  <div className="flex flex-col bg-white py-4 px-4 rounded-lg shadow-sm w-[35%] h-full  ">
                    <div className="flex justify-between items-center">
                      <div className="text-2xl">Rent</div>
                      <div className="text-N70 text-sm"> 250kb</div>
                    </div>
                    <div className="text-lg"> rent.jpg</div>
                    <div className="mt-20 space-y-6">
                      <button className="bg-[#008080] p-2 w-full rounded-md shadow-sm text-white font-medium">
                        Approve
                      </button>
                      <button className="bg-white p-2 w-full rounded-md shadow-lg text-error40 font-medium">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {activeDoc === "slip" && (
                <div className="flex space-x-4 mb-10 justify-between items-center font-poppins w-[65%] h-full ">
                  <div className=" bg-white py-4 px-10 rounded-lg shadow-sm w-[65%] h-full ">
                    {/* <Document file={pdfUrl}>
                      <Page pageNumber={1} />
                    </Document> */}
                    <div className="text-center"> PDF to be viewed</div>
                  </div>
                  <div className="flex flex-col bg-white py-4 px-4 rounded-lg shadow-sm w-[35%] h-full  ">
                    <div className="flex justify-between items-center">
                      <div className="text-2xl">Slip Document</div>
                      <div className="text-N70 text-sm"> 250kb</div>
                    </div>
                    <div className="text-lg"> slip.jpg</div>
                    <div className="mt-20 space-y-6">
                      <button className="bg-[#008080] p-2 w-full rounded-md shadow-sm text-white font-medium">
                        Approve
                      </button>
                      <button className="bg-white p-2 w-full rounded-md shadow-lg text-error40 font-medium">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LocalApplicants;