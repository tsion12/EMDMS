import React, { useState } from "react";
import StarterClip from "../../assets/images/starter.png";
import Button from "../../components/Button";
import ApplicationClip from "../../assets/applicationClip.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import Modal from "../../components/Modal";
import { MdOutlineCancel } from "react-icons/md";
import RejectionModal from "../../components/RejectionModal";
import DocBody from "../../components/adminComponents/DocBody";
import { docs } from "./data";

const LocalApplicants = () => {
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
        <div className="fixed inset-0 flex items-center justify-end z-50  backdrop-filter backdrop-blur-sm">
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
          <div className="text-3xl font-semibold text-emdmsPrimary font-poppins">
            Applications
          </div>
          <div className="max-w-lg text-[#9898A3] text-sm font-poppins">
            Application lists where the applicants submitted their documents to
            see if they are legit or not
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row  md:items-center md:justify-between ">
          {" "}
          {/* left side navigation container */}
          <div className="bg-white  flex space-x-10 md:space-x-6 md:flex-row justify-between items-center py-3  rounded-lg shadow-sm  text-[#7D7D7D] text-sm font-poppins  md:w-[30%] w-[100%]  overflow-x-auto ">
            <Button
              handelClick={() => {
                setActiveTab("application");
              }}
              custom={`${
                activeTab === "application"
                  ? "text-emdmsPrimary"
                  : "text-N80 bg-white"
              } px-4  w-full w-max  whitespace-nowrap`}>
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
              } px-4  w-full w-max  whitespace-nowrap`}>
              Approved
            </Button>
            <Button
              handelClick={() => {
                setActiveTab("rejected");
              }}
              custom={`${
                activeTab === "rejected" ? "text-red-500" : "text-N80 bg-white"
              } px-4  w-full w-max  whitespace-nowrap`}>
              Rejected
            </Button>
          </div>
          {/* right side navigation container */}
          {activeTab === "application" && (
            <>
              <div className="flex bg-white  space-x-2 rounded-lg shadow-sm md:justify-between items-center text-[#7D7D7D] text-sm font-poppins md:max-w-[65%] w-full overflow-x-auto">
                <button
                  onClick={() => {
                    setActiveDoc("financial");
                  }}
                  className={`${
                    activeDoc === "financial"
                      ? "text-emdmsPrimary  border-b-emdmsPrimary border-b-4 py-3 "
                      : "text-N80 py-3"
                  } px-6    whitespace-nowrap`}>
                  Financial
                </button>

                <button
                  onClick={() => {
                    setActiveDoc("business");
                  }}
                  className={`${
                    activeDoc === "business"
                      ? "text-emdmsPrimary  border-b-emdmsPrimary border-b-4  py-3"
                      : "text-N80 py-3"
                  } px-6    whitespace-nowrap`}>
                  Business
                </button>
                <button
                  onClick={() => {
                    setActiveDoc("rent");
                  }}
                  className={`${
                    activeDoc === "rent"
                      ? "text-emdmsPrimary  border-b-emdmsPrimary border-b-4  py-3"
                      : "text-N80 py-3"
                  } px-6    whitespace-nowrap`}>
                  Rent Contract
                </button>
                <button
                  onClick={() => {
                    setActiveDoc("slip");
                  }}
                  className={`${
                    activeDoc === "slip"
                      ? "text-emdmsPrimary  border-b-emdmsPrimary border-b-4  py-3"
                      : "text-N80 py-3"
                  } px-12    whitespace-nowrap`}>
                  Slip License
                </button>
                
              </div>
            </>
          )}
        </div>
        {activeTab === "" && (
          <>
            <div className="mx-auto">
              <img src={StarterClip} alt="" className="w-[350px] h-[400px]" />
            </div>
          </>
        )}

        {/* Application tab */}
        {activeTab === "application" && (
          <>
            <div className="flex flex-col space-y-3  md:space-y-0 md:flex-row md:justify-between md:h-full max-h-[65vh] overflow-y-auto noscrollBar">
              <div className="flex flex-col  py-10 px-10 bg-white rounded-lg shadow-lg space-y-6 font-poppins md:w-[30%] md:h-[300px] lg:h-[250px]">
                <div className="text-[#464255] font-semibold text-xl md:text-xs lg:text-lg">
                  License No: 12345678
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
                {activeDoc === "" && (
                  <div className="flex justify-end ">
                    <button
                      onClick={() => {
                        setActiveDoc("financial");
                      }}
                      className="bg-[#005656B2] px-4 py-2 rounded-lg text-white text-sm md:text-xs lg:text-sm font-poppins">
                      View Document
                    </button>
                  </div>
                )}
              </div>
              {activeDoc === "" && (
                <div className="md:ml-[100px] flex items-center justify-center  h-full w-full">
                  <img
                    src={ApplicationClip}
                    alt=""
                    className="w-60 md:w-[350px] md:h-[400px]"
                  />
                </div>
              )}

              {/* Financial Tab */}
              {activeDoc === "financial" && (
                <div className=" flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-4  lg:justify-between  font-poppins md:max-w-[65%] md:overflow-x-auto md:h-[70vh] h-[40vh] overflow-y-auto noscrollBar ">
                  <div className=" bg-white py-4 px-10 rounded-lg shadow-sm w-full lg:w-[65%] h-full ">
                    {/* <Document file={pdfUrl}>
                      <Page pageNumber={1} />
                    </Document> */}
                    <div className="text-center"> PDF to be viewed</div>
                  </div>
                  <DocBody
                    selectedCardIndex={selectedCardIndex}
                    setSelectedCardIndex={setSelectedCardIndex}
                    isApproved={isApproved}
                    setSideModalOpen={setSideModalOpen}
                    documentData={documentData}
                    setDocumentData={setDocumentData}
                    handleAction={handleAction}
                    setIsApproved={setIsApproved}
                    activeDoc={activeDoc}
                    setActiveDoc={setActiveDoc}
                  />
                </div>
              )}
              {/* Business Tab */}
              {activeDoc === "business" && (
                <div className="flex space-x-4 mb-10 justify-between items-center font-poppins w-[65%]  ">
                  <div className=" bg-white py-4 px-10 rounded-lg shadow-sm w-[65%] h-full ">
                    {/* <Document file={pdfUrl}>
                      <Page pageNumber={1} />
                    </Document> */}
                    <div className="text-center"> PDF to be viewed</div>
                  </div>
                  <DocBody
                    selectedCardIndex={selectedCardIndex}
                    setSelectedCardIndex={setSelectedCardIndex}
                    isApproved={isApproved}
                    setSideModalOpen={setSideModalOpen}
                    documentData={documentData}
                    setDocumentData={setDocumentData}
                    handleAction={handleAction}
                    setIsApproved={setIsApproved}
                    activeDoc={activeDoc}
                    setActiveDoc={setActiveDoc}
                  />
                </div>
              )}

              {/* Rent tab */}
              {activeDoc === "rent" && (
                <div className="flex space-x-4 mb-10 justify-between items-center font-poppins w-[65%]  ">
                  <div className=" bg-white py-4 px-10 rounded-lg shadow-sm w-[65%] h-full ">
                    {/* <Document file={pdfUrl}>
                      <Page pageNumber={1} />
                    </Document> */}
                    <div className="text-center"> PDF to be viewed</div>
                  </div>
                  <DocBody
                    selectedCardIndex={selectedCardIndex}
                    setSelectedCardIndex={setSelectedCardIndex}
                    isApproved={isApproved}
                    setSideModalOpen={setSideModalOpen}
                    documentData={documentData}
                    setDocumentData={setDocumentData}
                    handleAction={handleAction}
                    setIsApproved={setIsApproved}
                    activeDoc={activeDoc}
                    setActiveDoc={setActiveDoc}
                  />
                </div>
              )}

              {/* Slip Tab*/}
              {activeDoc === "slip" && (
                <div className="flex space-x-4 mb-10 justify-between items-center font-poppins w-[65%] ">
                  <div className=" bg-white py-4 px-10 rounded-lg shadow-sm w-[65%] h-full ">
                    {/* <Document file={pdfUrl}>
                      <Page pageNumber={1} />
                    </Document> */}
                    <div className="text-center"> PDF to be viewed</div>
                  </div>
                  <DocBody
                    selectedCardIndex={selectedCardIndex}
                    setSelectedCardIndex={setSelectedCardIndex}
                    isApproved={isApproved}
                    setSideModalOpen={setSideModalOpen}
                    documentData={documentData}
                    setDocumentData={setDocumentData}
                    handleAction={handleAction}
                    setIsApproved={setIsApproved}
                    activeDoc={activeDoc}
                    setActiveDoc={setActiveDoc}
                  />
                </div>
              )}
            </div>
          </>
        )}
        {/* Approve Tab */}
        {activeTab === "approved" && (
          <>
            <div className=" flex flex-col mb-4 h-full pr-32">
              <div className="mt-5 flex  w-full space-x-6  h-full ">
                <div className="bg-white p-10 rounded-xl w-1/3 h-[80%]">
                  <div className="flex flex-col space-y-6">
                    <div className="text-2xl text-[#464255]">
                      License No: 1234567
                    </div>
                    <div className="max-w-lg text-[#A3A3A3] tracking-wide">
                      A bank statement is typically a digital or physical
                      document that provides a summary of the transactions,
                      balances, and activity in a bank account over a specific
                      period of time.
                    </div>
                    <div className="flex gap-16 items-center">
                      <div className="text-[#464255] text-lg font-medium font-poppins">
                        Documents
                      </div>
                      <div className="bg-emdmsPrimary px-3 py-1 text-white text-sm rounded-lg">
                        6
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-10 rounded-xl w-1/3 h-[80%]">
                  <div className="flex flex-col space-y-6">
                    <div className="text-2xl text-[#464255]">
                      License No: 1234567
                    </div>
                    <div className="max-w-lg text-[#A3A3A3] tracking-wide">
                      A bank statement is typically a digital or physical
                      document that provides a summary of the transactions,
                      balances, and activity in a bank account over a specific
                      period of time.
                    </div>
                    <div className="flex gap-16 items-center">
                      <div className="text-[#464255] text-lg font-medium font-poppins">
                        Documents
                      </div>
                      <div className="bg-emdmsPrimary px-3 py-1 text-white text-sm rounded-lg">
                        6
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-10 rounded-xl w-1/3 h-[80%]">
                  <div className="flex flex-col space-y-6">
                    <div className="text-2xl text-[#464255]">
                      License No: 1234567
                    </div>
                    <div className="max-w-lg text-[#A3A3A3] tracking-wide">
                      A bank statement is typically a digital or physical
                      document that provides a summary of the transactions,
                      balances, and activity in a bank account over a specific
                      period of time.
                    </div>
                    <div className="flex gap-16 items-center">
                      <div className="text-[#464255] text-lg font-medium font-poppins">
                        Documents
                      </div>
                      <div className="bg-emdmsPrimary px-3 py-1 text-white text-sm rounded-lg">
                        6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-end mb-10 space-x-3">
                <button className="border border-[#005656] px-6 py-1">
                  {" "}
                  <div className="flex space-x-2 items-center text-[#005656]">
                    <AiOutlineLeft />
                    <div>Previous</div>
                  </div>
                </button>
                <div className="border border-[#005656] bg-white pr-2 flex space-x-6 ">
                  {" "}
                  <button className="bg-emdmsPrimary px-3 py-1">1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                </div>
                <button className="border border-[#005656] px-6 py-1">
                  {" "}
                  <div className="flex space-x-2 items-center text-[#005656]">
                    <div>Next</div>
                    <AiOutlineRight />
                  </div>
                </button>
              </div>
            </div>
          </>
        )}
        {activeTab === "rejected" && (
          <>
            <div className=" flex flex-col mb-4 h-full pr-32">
              <div className="mt-5 flex  w-full space-x-6  h-full ">
                <div className="bg-white p-10 rounded-xl w-1/3 h-[90%]">
                  <div className="flex flex-col space-y-6">
                    <div className="text-2xl text-[#464255]">
                      License No: 1234567
                    </div>
                    <div className="max-w-lg text-[#A3A3A3] tracking-wide">
                      A bank statement is typically a digital or physical
                      document that provides a summary of the transactions,
                      balances, and activity in a bank account over a specific
                      period of time.
                    </div>
                    <div className="flex gap-16 items-center">
                      <div className="text-[#464255] text-lg font-medium font-poppins">
                        Documents
                      </div>
                      <div className="bg-emdmsPrimary px-3 py-1 text-white text-sm rounded-lg">
                        6
                      </div>
                    </div>
                    <div className="flex justify-end items-center ">
                      {" "}
                      <button
                        onClick={openModal}
                        className="bg-white shadow px-6 py-2 rounded-lg text-red-500 text-center">
                        View Reason
                      </button>
                      <RejectionModal isOpen={isOpen} onClose={closeModal}>
                        <div className="bg-[#DF817D] p-10 h-[70%] w-full ">
                          <div className="flex flex-col space-y-6">
                            <div className=" text-2xl text-white font-bold">
                              Rejected Reason
                            </div>
                            <div className="text-white max-w-2xl">
                              The document you uploaded and the name you entered
                              are incompatible, so please cross-check again and
                              change the name. We have read the document you
                              have submitted and the document. Please submit a
                              valid form and document.
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-end m-10">
                          <button
                            onClick={closeModal}
                            className="border border-red-500 text-red-500 py-2 px-12   rounded-lg">
                            Cancel
                          </button>
                        </div>
                      </RejectionModal>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-10 rounded-xl w-1/3 h-[90%]">
                  <div className="flex flex-col space-y-6">
                    <div className="text-2xl text-[#464255]">
                      License No: 1234567
                    </div>
                    <div className="max-w-lg text-[#A3A3A3] tracking-wide">
                      A bank statement is typically a digital or physical
                      document that provides a summary of the transactions,
                      balances, and activity in a bank account over a specific
                      period of time.
                    </div>
                    <div className="flex gap-16 items-center">
                      <div className="text-[#464255] text-lg font-medium font-poppins">
                        Documents
                      </div>
                      <div className="bg-emdmsPrimary px-3 py-1 text-white text-sm rounded-lg">
                        6
                      </div>
                    </div>
                    <div className="flex justify-end items-center ">
                      {" "}
                      <button
                        onClick={openModal}
                        className="bg-white shadow px-6 py-2 rounded-lg text-red-500 text-center">
                        View Reason
                      </button>
                      <RejectionModal isOpen={isOpen} onClose={closeModal}>
                        <div className="bg-[#DF817D] p-10 h-[70%] w-full ">
                          <div className="flex flex-col space-y-6">
                            <div className=" text-2xl text-white font-bold">
                              Rejected Reason
                            </div>
                            <div className="text-white max-w-2xl">
                              The document you uploaded and the name you entered
                              are incompatible, so please cross-check again and
                              change the name. We have read the document you
                              have submitted and the document. Please submit a
                              valid form and document.
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-end m-10">
                          <button
                            onClick={closeModal}
                            className="border border-red-500 text-red-500 py-2 px-12   rounded-lg">
                            Cancel
                          </button>
                        </div>
                      </RejectionModal>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-10 rounded-xl w-1/3 h-[90%]">
                  <div className="flex flex-col space-y-6">
                    <div className="text-2xl text-[#464255]">
                      License No: 1234567
                    </div>
                    <div className="max-w-lg text-[#A3A3A3] tracking-wide">
                      A bank statement is typically a digital or physical
                      document that provides a summary of the transactions,
                      balances, and activity in a bank account over a specific
                      period of time.
                    </div>
                    <div className="flex gap-16 items-center">
                      <div className="text-[#464255] text-lg font-medium font-poppins">
                        Documents
                      </div>
                      <div className="bg-emdmsPrimary px-3 py-1 text-white text-sm rounded-lg">
                        6
                      </div>
                    </div>
                    <div className="flex justify-end items-center ">
                      {" "}
                      <button
                        onClick={openModal}
                        className="bg-white shadow px-6 py-2 rounded-lg text-red-500 text-center">
                        View Reason
                      </button>
                      <RejectionModal isOpen={isOpen} onClose={closeModal}>
                        <div className="bg-[#DF817D] p-10 h-[70%] w-full ">
                          <div className="flex flex-col space-y-6">
                            <div className=" text-2xl text-white font-bold">
                              Rejected Reason
                            </div>
                            <div className="text-white max-w-2xl">
                              The document you uploaded and the name you entered
                              are incompatible, so please cross-check again and
                              change the name. We have read the document you
                              have submitted and the document. Please submit a
                              valid form and document.
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-end m-10">
                          <button
                            onClick={closeModal}
                            className="border border-red-500 text-red-500 py-2 px-12   rounded-lg">
                            Cancel
                          </button>
                        </div>
                      </RejectionModal>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-end mb-10 space-x-3">
                <button className="border border-[#005656] px-6 py-1">
                  {" "}
                  <div className="flex space-x-2 items-center text-[#005656]">
                    <AiOutlineLeft />
                    <div>Previous</div>
                  </div>
                </button>
                <div className="border border-[#005656] bg-white pr-2 flex space-x-6 ">
                  {" "}
                  <button className="bg-emdmsPrimary px-3 py-1">1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                </div>
                <button className="border border-[#005656] px-6 py-1">
                  {" "}
                  <div className="flex space-x-2 items-center text-[#005656]">
                    <div>Next</div>
                    <AiOutlineRight />
                  </div>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LocalApplicants;
