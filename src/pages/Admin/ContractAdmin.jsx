import React, { useState } from "react";
import StarterClip from "../../assets/images/starter.png";
import Button from "../../components/utilities/Button";
import ApplicationClip from "../../assets/applicationClip.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// import Modal from "../../components/utilities/Modal";
import { MdOutlineCancel } from "react-icons/md";
// import RejectionModal from "../../components/utilities/RejectionModal";
import DocBody from "../../components/adminComponents/DocBody";
import { docs } from "./data";
import ApprovedPage from "./pages/ApprovedPage";
import RejectedPage from "./pages/RejectedPage";

const ContractAdmin = () => {
  const [activeTab, setActiveTab] = useState("");
  const [activeDoc, setActiveDoc] = useState("");
  const [selectedCardIndex, setSelectedCardIndex] = useState(1);
  const [documentData, setDocumentData] = useState(docs);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const [sideModalOpen, setSideModalOpen] = useState(false);

  const openSideModal = () => {
    setSideModalOpen(true);
  };

  const closeSideModal = () => {
    setSideModalOpen(false);
  };
  const [isApproved, setIsApproved] = useState(false);

  const handleAction = (action) => {
    if (selectedCardIndex === documentData.length) {
      setIsApproved(true);
      setSelectedCardIndex(selectedCardIndex + 1);
      setDocumentData(
        documentData.map((doc) =>
          doc.id === selectedCardIndex ? { ...doc, status: action } : doc
        )
      );
    } else {
      setSelectedCardIndex(selectedCardIndex + 1);
      setDocumentData(
        documentData.map((doc) =>
          doc.id === selectedCardIndex ? { ...doc, status: action } : doc
        )
      );
    }
  };
  return (
    <>
      {sideModalOpen && (
        <div className="fixed inset-0 flex items-center justify-end z-50 transition-all duration-200 ease-in-out  backdrop-filter backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-1/4 bg-white rounded-md shadow-lg px-8 py-8">
            <button
              className="absolute top-0 right-0 m-4"
              onClick={closeSideModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-6 items-start">
              <div className=" flex space-x-2 items-center mt-5">
                <MdOutlineCancel className="text-3xl text-red-500" />
                <div className="text-[#464255] text-lg font-semibold">
                  Rejected Bank Gurantee
                </div>
              </div>
              <div className="flex items-center max-w-sm">
                <p className="text-lg text-[#BC4C2E]">
                  <span className="text-[#661B17] font-semibold">
                    Attention
                  </span>
                  : Out of the total of 4 documents submitted, 3 have been
                  deemed unacceptable. Now you have rejected this document.
                  Please specify your rejection reasons under the given format
                </p>
              </div>
              <div className="mt-10 text-[#313A4E] text-sm font-semibold">
                Rejection Reason
              </div>
              <div className="bg-[#F0F7F7] rounded-md shadow-md h-[250px] w-full px-8 py-4 text-xs text-[#313a4e97] ">
                type the rejection reason...
              </div>
            </div>
            <div className="flex space-x-6 justify-center mt-10">
              <button
                onClick={closeSideModal}
                className="bg-[#F0F7F7] py-2 px-10 text-[#008080] rounded-sm">
                Cancel
              </button>
              <button
                onClick={() => {
                  handleAction("Rejected");
                  closeSideModal();
                }}
                className=" border border-red-500 py-2 px-16 text-red-500 rounded-sm">
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
      {/* main container */}
      <div className="flex flex-col mt-10 ml-10 mr-10 space-y-6 w-full">
        {/* title and subtitle */}
        <div className="flex flex-col space-y-1">
          <div className="title font-semibold text-emdmsPrimary font-poppins">
            Contract Applications
          </div>
          <div className="max-w-sm text-[#9898A3] title-description font-poppins">
            Application lists where the applicants submitted their documents to
            see if they are legit or not
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row   md:items-start space-x-3 ">
          {" "}
          {/* left side navigation container */}
          <div className="bg-white  flex space-x-10 md:space-x-6 md:flex-row justify-between items-center py-3  rounded-lg shadow-sm  text-[#7D7D7D] text-xs font-poppins  md:w-[30%] w-[100%]  overflow-x-auto ">
            <Button
              handelClick={() => {
                setActiveTab("application");
              }}
              custom={`${
                activeTab === "application"
                  ? "text-emdmsPrimary"
                  : "text-[#7D7D7D] bg-white"
              } px-4  w-full w-max text-xs  whitespace-nowrap`}>
              Application
            </Button>
            <Button
              handelClick={() => {
                setActiveTab("approved");
              }}
              custom={`${
                activeTab === "approved"
                  ? "text-emdmsPrimary"
                  : "text-[#7D7D7D] bg-white"
              } px-4  w-full w-max text-xs whitespace-nowrap`}>
              Approved
            </Button>
            <Button
              handelClick={() => {
                setActiveTab("rejected");
              }}
              custom={`${
                activeTab === "rejected"
                  ? "text-red-500"
                  : "text-[#7D7D7D] bg-white"
              } px-4  w-full w-max text-xs  whitespace-nowrap`}>
              Rejected
            </Button>
          </div>
          {/* right side navigation container */}
          <div className=" md:w-[30%] w-[100%] flex items-center justify-center  overflow-x-auto ">
            {" "}
            {activeTab === "" && (
              <>
                <div className="mt-20">
                  <img src={StarterClip} alt="" className="w-80 py-10" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Application tab */}
        {activeTab === "application" && (
          <>
            <div className="flex flex-col space-y-3  md:space-y-0 md:flex-row md:justify-between bg-green-300   max-h-[65vh] overflow-y-auto noscrollBar">
              {/* Right Side */}
              <div className="flex flex-col  py-10 px-10 bg-red-100 rounded-lg shadow-lg space-y-4 font-poppins w-[30%]  ">
                <div className="text-[#464255] font-semibold text-md">
                  Agency ID: 12345678
                </div>
                <div className="text-xs max-w-lg tracking-wide text-[#A3A3A3] font-poppins">
                  License numbers are typically unique identifiers issued by
                  specific authorities or organizations for specific purposes
                </div>
                <div className="flex gap-16 items-center">
                  <div className="text-[#464255] text-sm font-medium font-poppins">
                    Documents
                  </div>
                  <div className="bg-emdmsPrimary px-3 py-1 text-white text-sm md:text-xs rounded-lg">
                    6
                  </div>
                </div>
              </div>
              <div>jnfkjhfkjhk</div>
            </div>
          </>
        )}
        {/* Approve Tab */}
        {activeTab === "approved" && (
          <>
            <ApprovedPage />
          </>
        )}
        {activeTab === "rejected" && (
          <>
            <RejectedPage />
          </>
        )}
      </div>
    </>
  );
};

export default ContractAdmin;
