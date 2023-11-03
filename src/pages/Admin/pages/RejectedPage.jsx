import React, { useState } from "react";
import Map from "../../../assets/map.png";
import SmallMap from "../../../assets/smallMaop.png";
import Flag from "../../../assets/Japan.png";
import Qatar from "../../../assets/qatar.png";
import SubmitFlag from "../../../assets/submitFlag.png";
import RejectionModal from "../../../components/RejectionModal";

const RejectedPage = () => {
  const [requestModal, setrequestModal] = useState(false);
  const [rejectionModal, setRejectionModal] = useState(false);
  const [activePage, setActivePage] = useState("");

  const closeModal = () => {
    setrequestModal(false);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const options = [
    "Partner 1",
    "Partner 2",
    "Partner 3",
    "Partner 4",
    "Partner 5",
  ];
  const [selectedOption2, setSelectedOption2] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption2(option);
    setIsOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardData = [
    {
      submittedAt: "Sep 12, 2022",
      flagImage: SubmitFlag,
      licenseNo: "12345678",
      agencyName: "Abdulraman Agency",
      description:
        "This license number is accepted by License numbers are typically unique identifiers issued by specific authorities or organizations for specific purposes",
    },
    {
      submittedAt: "Sep 12, 2022",
      flagImage: SubmitFlag,
      licenseNo: "12345678",
      agencyName: "Abdulraman Agency",
      description:
        "This license number is accepted by License numbers are typically unique identifiers issued by specific authorities or organizations for specific purposes",
    },
    {
      submittedAt: "Sep 12, 2022",
      flagImage: SubmitFlag,
      licenseNo: "12345678",
      agencyName: "Abdulraman Agency",
      description:
        "This license number is accepted by License numbers are typically unique identifiers issued by specific authorities or organizations for specific purposes",
    },
    {
      submittedAt: "Sep 12, 2022",
      flagImage: SubmitFlag,
      licenseNo: "12345678",
      agencyName: "Abdulraman Agency",
      description:
        "This license number is accepted by License numbers are typically unique identifiers issued by specific authorities or organizations for specific purposes",
    },
    {
      submittedAt: "Sep 12, 2022",
      flagImage: SubmitFlag,
      licenseNo: "12345678",
      agencyName: "Abdulraman Agency",
      description:
        "This license number is accepted by License numbers are typically unique identifiers issued by specific authorities or organizations for specific purposes",
    },
    {
      submittedAt: "Sep 12, 2022",
      flagImage: SubmitFlag,
      licenseNo: "12345678",
      agencyName: "Abdulraman Agency",
      description:
        "This license number is accepted by License numbers are typically unique identifiers issued by specific authorities or organizations for specific purposes",
    },
  ];

  return (
    <div className="">
      {activePage === "" && (
        <>
          <RejectionModal isOpen={rejectionModal}>
            <div className="bg-[#DF817D] p-10 h-[70%] rounded-lg w-full ">
              <div className="flex flex-col space-y-3">
                <div className=" text-xl text-white font-bold">
                  Rejection Reason
                </div>
                <div className="text-white text-sm max-w-2xl">
                  The document you uploaded and the name you entered are
                  incompatible, so please cross-check again and change the name.
                  We have read the document you have submitted and the document.
                  Please submit a valid form and document.
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end m-10 space-x-4">
              <button
                onClick={() => setRejectionModal(false)}
                className="border border-[#CC362F] text-[#CC362F] py-2 px-12   rounded-md">
                Cancel
              </button>
            </div>
          </RejectionModal>
          <div className=" relative mr-20">
            {/* Content */}
            <div className="mt-5 mr-10 w-full h-[65vh]  2xl:[70vh] overflow-auto noscrollBar  ">
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white flex flex-col rounded-lg shadow-md p-8 gap-4">
                    <div className="flex justify-end text-xs text-[#555555]">
                      Submitted at: {card.submittedAt}
                    </div>
                    <div className="flex sm:flex-row flex-col items-start gap-4">
                      <img
                        src={card.flagImage}
                        alt="Profile 1"
                        className="w-20 h-20 rounded-full mb-4"
                      />
                      <div className=" flex flex-col ">
                        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center ">
                          {" "}
                          <div className="flex flex-col items-start  justify-center ">
                            <div className="text-sm text-[#3B3F5C] font-bold ">
                              Licence No: {card.licenseNo}
                            </div>
                            <div className="text-[#2A282F] text-xs tracking-wider">
                              {" "}
                              <span className="font-bold">
                                Agency Name:
                              </span>{" "}
                              {card.agencyName}
                            </div>
                          </div>
                        </div>

                        <div className="text-xs pt-4 pb-5 text-[#3B3F5C]">
                          {card.description}
                        </div>
                        <div
                          onClick={() => {
                            setRejectionModal(true);
                          }}
                          className="flex  items-center justify-start">
                          <div className="border border-[#CC362F] text-[#CC362F] rounded-msm px-12 py-2 text-xs ">
                            View Reason
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RejectedPage;
