import React, { useState } from "react";
import SubmitFlag from "../../../assets/svg/submitFlag.png";

const RejectedPage = () => {
  const [requestModal, setrequestModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");
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
      {/* Background Image */}
      {activePage === "" && (
        <>
          {" "}
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
                        <div className="flex  items-center justify-start">
                          <div className="border border-emdmsPrimary  text-emdmsPrimary rounded-msm px-12 py-2 text-xs ">
                            View
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
