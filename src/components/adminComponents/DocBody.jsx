import React, { useState, useEffect } from "react";
import { docs } from "../../pages/Admin/data";
import { LuBadgeX } from "react-icons/lu";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const DocBody = ({
  selectedCardIndex,
  setSelectedCardIndex,
  setIsApproved,
  isApproved,
  setActiveDoc,
  activeDoc,
  setSideModalOpen,
  documentData,
  setDocumentData,
  handleAction,
}) => {
  useEffect(() => {
    console.log(documentData);
  }, [selectedCardIndex]);

  const handleTabChange = () => {
    if (activeDoc === "financial") setActiveDoc("business");
    if (activeDoc === "business") setActiveDoc("rent");
    if (activeDoc === "rent") setActiveDoc("slip");
    setDocumentData(docs);
    setSelectedCardIndex(1);
    setIsApproved(false);
  };

  return (
    <div className="flex flex-col  bg-white py-4 px-4  rounded-lg shadow-sm w-[35%] h-full ">
      <div className="flex flex-col space-y-3 mb-5 max-h-[55vh] overflow-auto noscrollBar">
        {documentData.map((doc) => (
          <div
            onClick={() => setSelectedCardIndex(doc.id)}
            key={doc.id}
            className={`flex flex-col p-6  rounded-lg space-y-3 cursor-pointer ${
              selectedCardIndex === doc.id
                ? "border-2 border-emdmsPrimary"
                : "border border-gray-300"
            } ${
              doc.status === "Approved"
                ? "bg-[#92ebd2] text-[#32A583] "
                : doc.status === "Rejected"
                ? "bg-[#F8E5E5]"
                : "bg-[#F0F7F7]"
            }`}
            style={{
              opacity:
                selectedCardIndex === null || selectedCardIndex === doc.id
                  ? 1
                  : 0.5,
            }}>
            {doc.status === "Approved" && (
              <div className="flex justify-end space-x-1">
                <RiVerifiedBadgeFill className="text-[#257B62]" />
                <div className="text-[#32A583] text-xs">Approved</div>
              </div>
            )}
            {doc.status === "Rejected" && (
              <div className="flex justify-end space-x-1">
                <LuBadgeX className="text-[#992823]" />
                <div className="text-[#992823] text-xs">Rejected</div>
              </div>
            )}
            <div className="text-N40 font-bold">{doc.title}</div>
            <div className="text-N40 text-xs">{doc.description}</div>
            <div className="flex justify-end">
              {/* <button
                className="border border-emdmsPrimary px-10 py-1 rounded-md text-xs"
                onClick={() => setSelectedCardIndex(doc.id)}>
                {doc.buttonname}
              </button> */}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-2">
        {isApproved ? (
          <button
            onClick={() => handleTabChange()}
            className="bg-[#008080] px-6 py-2 rounded-md shadow-sm text-white font-medium">
            Finish
          </button>
        ) : (
          <>
            <button
              onClick={() => setSideModalOpen(true)}
              className="bg-white px-8 py-2 rounded-md  border border-error40 shadow-lg text-error40 font-medium">
              Reject
            </button>
            <button
              onClick={() => handleAction("Approved")}
              className="bg-[#008080] px-6 py-2 rounded-md shadow-sm text-white font-medium">
              Approve
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DocBody;
