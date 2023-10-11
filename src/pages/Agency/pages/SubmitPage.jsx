import React, { useState } from "react";
import Map from "../../../assets/map.png";
import SmallMap from "../../../assets/smallMaop.png";
import Flag from "../../../assets/Japan.png";
import Qatar from "../../../assets/qatar.png";
import SubmitFlag from "../../../assets/submitFlag.png";

import Saudi from "../../../assets/saudi.png";
import SearchIcon from "../../../assets/searchcontryIcon.png";

import { FaFileCircleCheck } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import Modal from "../../../components/Modal";
import {
  BsCheck,
  BsChevronDown,
  BsClock,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";
import {
  AiFillExclamationCircle,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import { IoScanCircleSharp, IoScanOutline } from "react-icons/io5";
import { TbDeviceDesktopCheck, TbDeviceIpadCheck } from "react-icons/tb";

import { RiMoneyCnyCircleLine } from "react-icons/ri";

import { BiLock, BiMessageRoundedCheck, BiSolidLock } from "react-icons/bi";

const SubmitPage = () => {
  const [requestModal, setrequestModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [activePage, setActivePage] = useState("");
  //   const openModal = () => {
  //     setrequestModal(true);
  //   };

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

  return (
    <div className="">
      {/* Add License Modal */}
      {activeModal === "request" && (
        <>
          <Modal isOpen={requestModal} onClose={closeModal}>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div>
                <img src={SmallMap} alt="" />
              </div>
              <div className="text-emdmsPrimary text-2xl font-semibold font-poppins tracking-wide">
                Choose Country
              </div>
              <div className="text-[#212121] text-xs tracking-wider font-poppins">
                Choose the country in which the license will be issued.
              </div>
            </div>
            {/* Radio Buttons */}
            <div className="p-10">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-emdmsPrimary"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                <div className="ml-5 p-0 py-0 rounded-sm">
                  <img src={Qatar} alt="" />
                </div>
                <span className="ml-2 text-sm">Jordan</span>
              </label>

              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-emdmsPrimary"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                <div className="ml-5 p-0 py-0 rounded-sm">
                  <img src={Flag} alt="" />
                </div>
                <span className="ml-2 text-sm">Qatar</span>
              </label>

              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-emdmsPrimary"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={handleOptionChange}
                />
                <div className="ml-5 p-0 py-0 rounded-sm">
                  <img src={Saudi} alt="" />
                </div>
                <span className="ml-2 text-sm">Saudi Arabia</span>
              </label>

              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-emdmsPrimary"
                  value="option4"
                  checked={selectedOption === "option4"}
                  onChange={handleOptionChange}
                />
                <div className="ml-5 p-0 py-0 rounded-sm">
                  <img src={Flag} alt="" />
                </div>
                <span className="ml-2 text-sm">United Arab Emirates</span>
              </label>
            </div>
            <div className="flex items-center justify-center space-x-6">
              {" "}
              <button
                onClick={closeModal}
                className="border border-[#008080] py-2 px-16 text-N40 rounded-lg">
                Cancel
              </button>
              <button
                onClick={() => {
                  setActiveModal("partner");
                }}
                className="bg-[#008080] py-2 px-16 text-white rounded-lg">
                Select
              </button>
            </div>

            <div className="flex items-center justify-center pt-10 space-x-1">
              <AiOutlineExclamationCircle className="text-red-900 font-extrabold" />
              <p className="text-[#cf5151bf]">
                <span className="font-bold">Note:</span> You must select only
                one country in order to choose foreign partner to create new
                licence
              </p>
            </div>
          </Modal>
        </>
      )}
      {/* Add Partner Modal */}
      {activeModal === "partner" && (
        <div>
          <Modal isOpen={requestModal} onClose={closeModal}>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div>
                <img src={SmallMap} alt="" />
              </div>
              <div className="text-emdmsPrimary text-2xl font-semibold font-poppins tracking-wide">
                Choose Partner
              </div>
              <div className="text-[#212121] text-xs tracking-wider font-poppins">
                Choose the country in which the license will be issued.
              </div>
            </div>
            {/* DropDown */}
            <div className="flex space-x-40 items-center p-10">
              <div className="flex items-start space-x-1">
                <img src={SearchIcon} alt="" />
                <div className="flex flex-col items-start">
                  <div className="font-bold">Foriegn Partner</div>
                  <div className="text-N70 text-xs max-w-xs">
                    Choose a single partner to carry out the process.
                  </div>
                </div>{" "}
              </div>{" "}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Foreign Partner"
                  className="  bg-[#F3F3F3] rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emdmsPrimary w-64"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onClick={() => setIsOpen(!isOpen)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <BsChevronDown className="" />
                </div>
                {isOpen && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg">
                    {filteredOptions.map((option) => (
                      <div
                        key={option}
                        className="py-2 px-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                        onClick={() => handleOptionClick(option)}>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                {selectedOption2 && (
                  <div className="mt-2">
                    Selected Option: <strong>{selectedOption2}</strong>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center space-x-6">
              {" "}
              <button
                onClick={() => {
                  setActiveModal("request");
                }}
                className="border border-[#008080] py-2 px-16 text-N40 rounded-lg">
                Back
              </button>
              <button
                onClick={() => {
                  setrequestModal(false);
                  setActivePage("pageTwo");
                }}
                className="bg-[#008080] py-2 px-16 text-white rounded-lg">
                Select
              </button>
            </div>

            <div className="flex items-center justify-center pt-10 space-x-1">
              <AiOutlineExclamationCircle className="text-red-900 font-extrabold" />
              <p className="text-[#cf5151bf]">
                <span className="font-bold">Note:</span> You must select only
                one country in order to choose foreign partner to create new
                licence
              </p>
            </div>
          </Modal>
        </div>
      )}
      {/* Background Image */}
      {activePage === "" && (
        <>
          {" "}
          <div className=" relative mr-20">
            <div className="flex justify-end mr-10 space-x-6">
              {/* Request License Button */}
              <button
                onClick={() => {
                  setrequestModal(true);
                  setActiveModal("request");
                }}
                className="bg-emdmsPrimary text-white p-2 px-10 rounded-lg text-sm font-poppins">
                Request License
              </button>
            </div>

            {/* Content */}
            <div className="mt-10 mr-10 w-full h-[65vh]  2xl:[70vh] overflow-auto noscrollBar  ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-16 ">
                {/* card One */}
                <div className="bg-white flex flex-col rounded-lg shadow-md p-8 gap-8">
                  <div className="flex sm:flex-row flex-col items-start gap-4">
                    <img
                      src={SubmitFlag}
                      alt="Profile 1"
                      className="w-20 h-20 rounded-full mb-4"
                    />
                    <div className=" flex flex-col">
                      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-3">
                        {" "}
                        <div className="flex flex-col items-start  justify-center ">
                          <div className="text-sm text-[#3B3F5C] font-bold ">
                            Licence No: 12345678
                          </div>
                          <div className="text-[#2A282F] text-xs tracking-wider">
                            {" "}
                            <span className="font-bold">Agency Name:</span>{" "}
                            Abdulraman Agency
                          </div>
                          <div className="text-xs text-[#555555]">
                            Submitted at: Sep 12, 2022
                          </div>
                        </div>
                        <div className="border border-emdmsPrimary  text-emdmsPrimary rounded-md flex items-center justify-center px-12 py-2 text-xs ">
                          View
                        </div>
                      </div>

                      <div className="text-xs pt-4 pb-5 text-[#3B3F5C]">
                        This license number is accepted by License numbers are
                        typically unique identifiers issued by specific
                        authorities or organizations for specific purposes
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative">
                        <div className="bg-[#257B62] rounded-full px-2 py-2">
                          <IoScanOutline className="text-xl text-white text-center " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Screener</div>
                    </div>

                    <svg className="flex-grow h-2  mb-4">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-black stroke-4"
                        strokeWidth={4}
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      {" "}
                      <div className="relative">
                        <div className="bg-[#257B62] rounded-full px-2 py-2">
                          <TbDeviceIpadCheck className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Verifier</div>
                    </div>
                    <svg className="flex-grow h-2  mb-4">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-black stroke-4"
                        strokeWidth={4}
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      {" "}
                      <div className="relative">
                        <div className="bg-[#257B62] rounded-full px-2 py-2">
                          <BiMessageRoundedCheck className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px] ">Inspection</div>
                    </div>
                    <svg className="flex-grow  h-1 mb-4">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-gray-300"
                        strokeDasharray="4"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="border border-dashed border-black/50 rounded-full px-2 py-2">
                          <GoChecklist className="text-xl text-black/50 " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 text-white rounded-full">
                          <BiSolidLock className="text-sm text-black/50" />
                        </div>
                      </div>
                      <div className="text-[9px]">Approver</div>
                    </div>
                    <svg className="flex-grow mb-4 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-black"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="border border-black/50 rounded-full px-2 py-2">
                          <RiMoneyCnyCircleLine className="text-xl text-black/50 " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 text-white rounded-full">
                          <BiSolidLock className="text-sm text-black/50" />
                        </div>
                      </div>
                      <div className="text-[9px]">Finance</div>
                    </div>
                    <svg className="flex-grow  h-1 mb-4">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-black"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="border border-black/50 rounded-full px-2 py-2">
                          <TbDeviceDesktopCheck className="text-xl text-black/50 " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 text-white rounded-full">
                          <BiSolidLock className="text-sm text-black/50" />
                        </div>
                      </div>
                      <div className="text-[9px]">CEO</div>
                    </div>
                  </div>
                </div>
                {/* card Two */}
                <div className="bg-white flex flex-col rounded-lg shadow-md p-8 space-y-4">
                  <div className=" flex  ">
                    <div className="w-[180px] h-[80px]">
                      {" "}
                      <img
                        src={SubmitFlag}
                        alt="Profile 1"
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                      />
                    </div>
                    <div className=" flex flex-col">
                      <div className="flex justify-between items-center">
                        {" "}
                        <div className="flex flex-col items-start  justify-center space-x-2 ">
                          <div className="pl-2 text-sm text-[#3B3F5C] font-bold ">
                            Licence No: 12345678
                          </div>
                          <div className="text-[#2A282F] text-xs tracking-wider">
                            {" "}
                            <span className="font-bold">Agency Name:</span>{" "}
                            Abdulraman Agency
                          </div>
                          <div className="text-xs text-[#555555]">
                            Submitted at: Sep 12, 2022
                          </div>
                        </div>
                        <div className="border border-emdmsPrimary  text-emdmsPrimary rounded-md flex items-center justify-between px-12 py-2 text-xs ">
                          View
                        </div>
                      </div>

                      <div className="text-xs pl-2 pt-4 pb-5 text-[#3B3F5C]">
                        This license number is accepted by License numbers are
                        typically unique identifiers issued by specific
                        authorities or organizations for specific purposes
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center   ">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <IoScanOutline className="text-xl text-white text-center " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Screener</div>
                    </div>

                    <svg className="flex-grow h-2  mb-4">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-black stroke-4"
                        strokeWidth={4}
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <TbDeviceIpadCheck className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Verifier</div>
                    </div>

                    <svg className="flex-grow h-2  mb-4">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-black stroke-4"
                        strokeWidth={4}
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="bg-red-500 rounded-full px-2 py-2">
                          <BiMessageRoundedCheck className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-red-400 text-white rounded-full">
                          <AiOutlineCloseCircle className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px] text-red-500">Inspection</div>
                    </div>

                    <svg className="flex-grow mx-2 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-black"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      {" "}
                      <div className="relative">
                        <div className="border  border-black/50 rounded-full px-2 py-2">
                          <GoChecklist className="text-xl text-black/50 " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 text-white rounded-full">
                          <BiSolidLock className="text-sm text-black/50" />
                        </div>
                      </div>
                      <div className="text-[9px]">Approver</div>
                    </div>

                    <svg className="flex-grow mx-2 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-black"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      {" "}
                      <div className="relative">
                        <div className="border border-black/50 rounded-full px-2 py-2">
                          <RiMoneyCnyCircleLine className="text-xl text-black/50 " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 text-white rounded-full">
                          <BiSolidLock className="text-sm text-black/50" />
                        </div>
                      </div>
                      <div className="text-[9px]">Finance</div>
                    </div>

                    <svg className="flex-grow mx-2 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-black"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="border border-black/50 rounded-full px-2 py-2">
                          <TbDeviceDesktopCheck className="text-xl text-black/50 " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 text-white rounded-full">
                          <BiSolidLock className="text-sm text-black/50" />
                        </div>
                      </div>
                      <div className="text-[9px]">CEO</div>
                    </div>
                  </div>
                </div>{" "}
                {/* card Three */}
                <div className="bg-white flex flex-col rounded-lg shadow-md p-8 space-y-4">
                  <div className=" flex  ">
                    <div className="w-[180px] h-[80px]">
                      {" "}
                      <img
                        src={SubmitFlag}
                        alt="Profile 1"
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                      />
                    </div>
                    <div className=" flex flex-col">
                      <div className="flex justify-between items-center">
                        {" "}
                        <div className="flex flex-col items-start  justify-center space-x-2 ">
                          <div className="pl-2 text-sm text-[#3B3F5C] font-bold ">
                            Licence No: 12345678
                          </div>
                          <div className="text-[#2A282F] text-xs tracking-wider">
                            {" "}
                            <span className="font-bold">Agency Name:</span>{" "}
                            Abdulraman Agency
                          </div>
                          <div className="text-xs text-[#555555]">
                            Submitted at: Sep 12, 2022
                          </div>
                        </div>
                        <div className="border border-emdmsPrimary  text-emdmsPrimary rounded-md flex items-center justify-between px-12 py-2 text-xs ">
                          View
                        </div>
                      </div>

                      <div className="text-xs pl-2 pt-4 pb-5 text-[#3B3F5C]">
                        This license number is accepted by License numbers are
                        typically unique identifiers issued by specific
                        authorities or organizations for specific purposes
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center   ">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <IoScanOutline className="text-xl text-white text-center " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Screener</div>
                    </div>

                    <svg className="flex-grow h-2  mb-4">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-black stroke-4"
                        strokeWidth={4}
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      {" "}
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <TbDeviceIpadCheck className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Verifier</div>
                    </div>

                    <svg className="flex-grow mx-2 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-gray-300"
                        strokeDasharray="4"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <BiMessageRoundedCheck className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Inspection</div>
                    </div>

                    <svg className="flex-grow mx-2 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-gray-300"
                        strokeDasharray="4"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      {" "}
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <GoChecklist className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Approver</div>
                    </div>

                    <svg className="flex-grow mx-2 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-gray-300"
                        strokeDasharray="4"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      {" "}
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <RiMoneyCnyCircleLine className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Finance</div>
                    </div>

                    <svg className="flex-grow mx-2 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-gray-300"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <TbDeviceDesktopCheck className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">CEO</div>
                    </div>
                  </div>
                </div>{" "}
                {/* card Four */}
                <div className="bg-white flex flex-col rounded-lg shadow-md p-8 space-y-4">
                  <div className=" flex  ">
                    <div className="w-[180px] h-[80px]">
                      {" "}
                      <img
                        src={SubmitFlag}
                        alt="Profile 1"
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                      />
                    </div>
                    <div className=" flex flex-col">
                      <div className="flex justify-between items-center">
                        {" "}
                        <div className="flex flex-col items-start  justify-center space-x-2 ">
                          <div className="pl-2 text-sm text-[#3B3F5C] font-bold ">
                            Licence No: 12345678
                          </div>
                          <div className="text-[#2A282F] text-xs tracking-wider">
                            {" "}
                            <span className="font-bold">Agency Name:</span>{" "}
                            Abdulraman Agency
                          </div>
                          <div className="text-xs text-[#555555]">
                            Submitted at: Sep 12, 2022
                          </div>
                        </div>
                        <div className="border border-emdmsPrimary  text-emdmsPrimary rounded-md flex items-center justify-between px-12 py-2 text-xs ">
                          View
                        </div>
                      </div>

                      <div className="text-xs pl-2 pt-4 pb-5 text-[#3B3F5C]">
                        This license number is accepted by License numbers are
                        typically unique identifiers issued by specific
                        authorities or organizations for specific purposes
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center   ">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <IoScanOutline className="text-xl text-white text-center " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Screener</div>
                    </div>

                    <svg className="flex-grow h-2  mb-4">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-black stroke-4"
                        strokeWidth={4}
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      {" "}
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <TbDeviceIpadCheck className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Verifier</div>
                    </div>

                    <svg className="flex-grow mx-2 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-gray-300"
                        strokeDasharray="4"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <BiMessageRoundedCheck className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Inspection</div>
                    </div>

                    <svg className="flex-grow mx-2 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-gray-300"
                        strokeDasharray="4"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <GoChecklist className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">Approver</div>
                    </div>

                    <svg className="flex-grow mx-2 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-gray-300"
                        strokeDasharray="4"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <RiMoneyCnyCircleLine className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-[9px]">CEO</div>
                    </div>

                    <svg className="flex-grow mx-2 h-1">
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="stroke-current text-gray-300"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="relative">
                        <div className="bg-black rounded-full px-2 py-2">
                          <TbDeviceDesktopCheck className="text-xl text-white " />
                        </div>

                        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center w-4 h-4 bg-emdmsPrimary text-white rounded-full">
                          <BsCheck className="text-sm" />
                        </div>
                      </div>
                      <div className="text-xs">hello</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SubmitPage;
